"use client";
// // データベースに接続するためのクライアントをインポート
import Header from "@/lib/componets/header";
import RaderChart from "@/lib/componets/atoms/RaderChart";
import { Container, Grid } from "@mui/material";
import UserList from "@/lib/componets/organisms/UserList";
import { useEffect, useState } from "react";
export default function Home() {
  // // Userテーブルから全てデータを取得
  // const users = prisma.userInfo.findMany();
  // // Postテーブルから全てデータを取得
  // const posts = prisma.post.findMany();

  // FIX:DBからのデータ取得に修正
  const demo_team_skill_data = {
    PLANNING: 3,
    DESIGN: 5,
    FRONTEND: 4,
    BACKEND: 3,
    PRESENTATION: 1,
  };

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
      skill: {
        PLANNING: 3,
        DESIGN: 5,
        FRONTEND: 4,
        BACKEND: 3,
        PRESENTATION: 1,
      },
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
      skill: {
        PLANNING: 1,
        DESIGN: 2,
        FRONTEND: 3,
        BACKEND: 2,
        PRESENTATION: 5,
      },
    },
  ];

  // templateを元にDBから取得したチームスキルをRaderChartに渡せる形式に整形
  const template = [
    { id: "PLANNING", subject: "アイデア・企画力" },
    { id: "PRESENTATION", subject: "プレゼン力" },
    { id: "DESIGN", subject: "デザイン" },
    { id: "FRONTEND", subject: "フロントエンド" },
    { id: "BACKEND", subject: "バックエンド" },
  ];
  const [convertedTeamData, setTeamData] = useState(
    template.map((obj) => ({
      ...obj,
      value: demo_team_skill_data[obj.id] || 0,
      // FIX: 募集人数から算出する式
      fullMark: 25,
    }))
  );

  const handleCheckedAbilityCard = (selectedUserData: object) => {
    setTeamData(
      convertedTeamData.map((obj) => ({
        ...obj,
        newValue: obj.value + selectedUserData[obj.id] || 0,
      }))
    );
  };

  return (
    <Container>
      <Header />
      <Grid container spacing={3}>
        <Grid>
          <h2>参加希望者一覧</h2>
          <UserList
            list={demo_user_list}
            onCheckAbilityCard={handleCheckedAbilityCard}
          ></UserList>
        </Grid>
        <Grid>
          <RaderChart data={convertedTeamData}></RaderChart>
        </Grid>
      </Grid>
    </Container>
  );
}
