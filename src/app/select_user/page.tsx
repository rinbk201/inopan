"use client";
// // データベースに接続するためのクライアントをインポート
import Header from "@/lib/componets/header";
// import { prisma } from "@/lib/prismaClient";

import { Container, Grid } from "@mui/material";
import UserList from "@/lib/componets/organisms/UserList";
import RaderChart from "@/lib/componets/raderChart";
import { prisma } from "@/lib/prismaClient";
export default function Home() {
  // Userテーブルから全てデータを取得
  const users = prisma.user.findMany();
  // Postテーブルから全てデータを取得
  const posts = prisma.post.findMany();
  console.log(users);
  console.log(posts);

  const demo_default_data = [
    { subject: "企画力", value: 10, fullMark: 100 },
    { subject: "プレゼン力", value: 5, fullMark: 100 },
    { subject: "デザイン", value: 15, fullMark: 100 },
    { subject: "フロントエンド", value: 20, fullMark: 100 },
    { subject: "バックエンド", value: 10, fullMark: 100 },
  ];

  const demo_user_list = [
    {
      name: "電大太郎",
      display_name: "でん君",
      email: "denkun@example.com",
      affiliation_id: 1,
      lab: "情報セキュリティ研究室",
      gender: "男",
      hobby: "キャンプ",
      comment: "経験少ないけど頑張ります！",
      DiscordID: "hogehoge",
      XID: "hogehoge",
      FaceBookID: "hogehoge",
      free_form: "特にフロントエンドに興味があります",
      deleted_at: "2023-22-22",
    },
    {
      name: "電大花子",
      display_name: "でんちゃん",
      email: "denkun@example.com",
      affiliation_id: 2,
      lab: "情報セキュリティ研究室",
      gender: "男",
      hobby: "キャンプ",
      comment: "経験少ないけど頑張ります！",
      DiscordID: "hogehoge",
      XID: "hogehoge",
      FaceBookID: "hogehoge",
      free_form: "特にフロントエンドに興味があります",
      deleted_at: "2023-22-22",
    },
  ];

  return (
    <Container>
      <Header />
      <Grid container spacing={3}>
        <Grid>
          <h2>参加希望者一覧</h2>
          <UserList list={demo_user_list}></UserList>
        </Grid>
        <Grid>
          <RaderChart data={demo_default_data}></RaderChart>
        </Grid>
      </Grid>
    </Container>
  );
}
