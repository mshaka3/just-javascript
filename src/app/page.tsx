import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      (Just javascript website) in progress
      {posts.map((post) => (
        <div key={post.id}> {post.name}</div>
      ))}
    </main>
  );
}
