export default async function UserName({ params }) {
  const { name } = await params;

  return (
    <>
      <div>Hello : {name}</div>
      <footer>Footer</footer>
    </>
  );
}
