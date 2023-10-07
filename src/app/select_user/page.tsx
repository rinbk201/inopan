"use client";
// データベースに接続するためのクライアントをインポート
import Header from "@/lib/componets/header";
import { prisma } from "@/lib/prismaClient";

import { Container, Grid } from "@mui/material";
import AbilityCard from "@/lib/componets/abilityCard";
import RaderChart from "@/lib/componets/raderChart";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: pink;
`;

export default async function Home() {
  // Userテーブルから全てデータを取得
  const users = prisma.user.findMany();
  // Postテーブルから全てデータを取得
  const posts = prisma.post.findMany();

  const demo_default_data = [
    { subject: "企画力", value: 10, fullMark: 100 },
    { subject: "プレゼン力", value: 5, fullMark: 100 },
    { subject: "デザイン", value: 15, fullMark: 100 },
    { subject: "フロントエンド", value: 20, fullMark: 100 },
    { subject: "バックエンド", value: 10, fullMark: 100 },
  ];

  return (
    <Container>
      <Header />
      <Grid container spacing={3}>
        <Grid>
          <StyledDiv>こんにちは</StyledDiv>
          <h2>参加希望者一覧</h2>
          <AbilityCard></AbilityCard>
        </Grid>
        <Grid>
          <RaderChart data={demo_default_data}></RaderChart>
        </Grid>
      </Grid>
    </Container>
  );
}
