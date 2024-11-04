"use client";

import { useState, useEffect } from "react";

const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      const posts = data.products;
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  if (posts.length === 0) return <div>Loading...</div>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Page;
