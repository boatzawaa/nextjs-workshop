import Image from "next/image";

export default async function Daily() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <>
      <div>Hello Daily</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} {post.title}
          </li>
        ))}
      </ul>
      <img src="/file.svg" alt="file logo" width="150"/>
      <Image src="/globe.svg" alt="globe logo" width="500" height="500"/>
    </>
  );
}
