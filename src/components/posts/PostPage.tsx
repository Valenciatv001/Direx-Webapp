import { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  title: string;
  content: string;
  author: string;
}

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts/fake');
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
        </div>
      ))}
    </div>
  );
};