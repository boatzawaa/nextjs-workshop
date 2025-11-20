export default async function Feature() {
  // const headerList = new Headers();
  // const host = headerList.get("host");
  // console.log("Host:", host);

  const data = await fetch("http://localhost:3000/api/blog");
  const posts = await data.json();

  return (
    <>
      <div>Hello Blog</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} {post.title}
          </li>
        ))}
      </ul>
    </>
  );
}
