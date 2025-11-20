"use client";
import { useEffect, useState } from "react";

async function getBlog() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json();
}

export default function Post() {
  const [blog, setBlog] = useState([]);

  const initblog = async () => {
    const blogs = await getBlog();
    setBlog(blogs);
  };

  useEffect(() => {
    initblog();
  }, []);

  console.log(blog);

  return (
    <>
      <div>Hello Post</div>
      <ul>
        {blog.map((b) => (
          <li key={b.id}>
            {b.id} {b.title}
          </li>
        ))}
      </ul>
    </>
  );
}
