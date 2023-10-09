// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await axios.get('/api/posts?limit=10');
//       const filteredPosts = response.data.filter((post) => post.userId !== user?.id);
//       setPosts(filteredPosts);
//     };
//     fetchPosts();
//   }, [user]);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const response = await axios.get('/api/user');
//       setUser(response.data);
//     };
//     fetchUser();
//   }, []);

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PostList;



import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface Post {
    id: string;
    title: string;
    content: string;
  }

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const observer = useRef(null);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await axios.get(`/api/posts?limit=10&page=${page}`);
    const filteredPosts = response.data.filter((post) => post.userId !== user?.id);
    setPosts((prevPosts) => [...prevPosts, ...filteredPosts]);
    setLoading(false);
  };

  const handleRefresh = () => {
    setPosts([]);
    setPage(1);
  };

  const handleImageClick = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('/api/user');
      setUser(response.data);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    observer.current.observe(document.querySelector('#load-more'));
  }, [loading]);

  return (
    <div>
      <button onClick={handleRefresh}>Refresh</button>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      ))}
      {loading && 'Loading...'}
      {isOpen && (
        <Lightbox
          mainSrc={posts[0].images[photoIndex].url}
          nextSrc={posts[0].images[(photoIndex + 1) % posts[0].images.length].url}
          prevSrc={posts[0].images[(photoIndex + posts[0].images.length - 1) % posts[0].images.length].url}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + posts[0].images.length - 1) % posts[0].images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % posts[0].images.length)}
        />
      )}
      <div id="load-more">{loading && 'Loading...'}</div>
    </div>
  );
};

export default PostList;
