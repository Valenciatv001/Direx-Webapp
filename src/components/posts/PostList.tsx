import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
    id: string;
    title: string;
    content: string;
  }

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts?limit=10');
      const filteredPosts = response.data.filter((post) => post.userId !== user?.id);
      setPosts(filteredPosts);
    };
    fetchPosts();
  }, [user]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('/api/user');
      setUser(response.data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;

