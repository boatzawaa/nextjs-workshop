// export default async function Blog() {
// const data = await fetch('https://jsonplaceholder.typicode.com/posts');
// const posts = await data.json();

//   return (
//     <>
//       <div>Hello Blog</div>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.id} {post.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

import { Suspense } from "react";

export default async function Blog() {
  return (
    <>
      <div>Hello Blog</div>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicContent />
      </Suspense>
    </>
  );
}

async function DynamicContent() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id} {post.title}
        </li>
      ))}
    </ul>
  );
}
