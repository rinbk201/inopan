// データベースに接続するためのクライアントをインポート
import Header from "@/lib/componets/header";
import { prisma } from "@/lib/prismaClient";

export default async function Home() {
  // Userテーブルから全てデータを取得
  const users = prisma.user.findMany();
  // Postテーブルから全てデータを取得
  const posts = prisma.post.findMany();

  return (
    <>
     <Header />
      <h1 className="font-bold text-2xl">Users</h1>
      {/* Userテーブルの結果の一覧を画面に出力する */}
      {(await users).map((user, index) => (
        <div key={user.id} className="bg-gray-800 m-2 w-[300px]">
          <p>id: {user.id}</p>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
          {/* Add more user attributes as needed */}
        </div>
      ))}
      <br/>
      <h1 className="font-bold text-2xl">Post</h1>
      {/* Postテーブルの結果の一覧を画面に出力する */}
      {(await posts).map((post, index) => (
        <div key={post.id} className="bg-gray-800 m-2 w-[300px]">
          <p>id: {post.id}</p>
          <p>name: {post.title}</p>
          <p>content: {post.content}</p>
          <p>published: {post.published+``}</p>
          <p>authorId: {post.authorId}</p>
        </div>
      ))}
    </>
  );
}