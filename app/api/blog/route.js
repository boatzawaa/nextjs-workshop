export function GET() {
  return Response.json([
    { id: 1, title: "abc" },
    { id: 2, title: "def" },
    { id: 3, title: "ghi" },
  ]);
}
