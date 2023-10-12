// データベースに接続するためのクライアントをインポート
import Header from "@/lib/componets/header";
import { prisma } from "@/lib/prismaClient";
import user_processer from "@/lib/utils/user"
import post_processer from "@/lib/utils/post"

export default async function Home() {
  // Userテーブルから全てデータを取得
  //const users = prisma.userInfo.findMany();
  // Postテーブルから全てデータを取得
  //const posts = prisma.post.findMany();
  const user = await user_processer.get_user_language(2)
  const post = await post_processer.get_all_posts()
  //console.log(user)
  //onsole.log(post)

  return (
    <>
     <Header />
      <h1 className="font-bold text-2xl">Users</h1>
      {/* Userテーブルの結果の一覧を画面に出力する */}
        <div key={user.id} className="bg-gray-800 m-2 w-[300px]">
          <p>id: {user.id}</p>
          <p>name: {user.displayName}</p>
          <p>email: {user.email}</p>
          {/* Add more user attributes as needed */}
        </div>
      <br/>
    </>
  );
}