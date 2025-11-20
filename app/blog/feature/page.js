export default async function Feature() {
  // const headerList = new Headers();
  // const host = headerList.get("host");
  // console.log("Host:", host);

  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
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
