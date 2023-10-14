import styled from "styled-components";
import { Box, Grid, LinearProgress } from "@mui/material";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Link from "next/link";
import Button from "../../atoms/Button";

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0.1rem 0;
`;

const InfoTitle = styled.p`
  font-size: 0.9rem;
  margin: 0 0 0 0.2rem;
  line-height: 1.6rem;
`;

const InfoText = styled.p`
  font-size: 2.4rem;
  font-weight: var(--heavy);
`;

interface PostInfoBox {
  deadline: string;
  bookmarkUserNum: number;
  requestUserNum: number;
  matchingUserNum: number;
  recruitmentNumbers: number;
}
export default function PostInfoBox({
  deadline,
  bookmarkUserNum,
  requestUserNum,
  matchingUserNum,
  recruitmentNumbers,
}: PostInfoBox) {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: "white",
        padding: "1.5rem",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <InfoBox>
          <WatchLaterIcon sx={{ width: 20 }}></WatchLaterIcon>
          <InfoTitle>応募締め切り</InfoTitle>
        </InfoBox>
        <InfoText>{deadline}</InfoText>
      </div>
      <Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
        <Grid item xs={12} sm={6}>
          <InfoBox>
            <BookmarkIcon sx={{ width: 20 }}></BookmarkIcon>
            <InfoTitle>ブックマーク中のユーザ</InfoTitle>
          </InfoBox>
          <InfoText>{bookmarkUserNum}人</InfoText>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InfoBox>
            <PersonIcon sx={{ width: 20 }}></PersonIcon>
            <InfoTitle>応募中のユーザ</InfoTitle>
          </InfoBox>
          <InfoText>{requestUserNum}人</InfoText>
        </Grid>
      </Grid>
      <InfoBox>
        <HandshakeIcon sx={{ width: 20 }}></HandshakeIcon>
        <InfoTitle>マッチング状況</InfoTitle>
      </InfoBox>
      <InfoBox>
        <InfoText style={{ color: "var(--primary)" }}>
          {matchingUserNum}
        </InfoText>
        <InfoText style={{ marginLeft: "0.2rem" }}>/</InfoText>
        <InfoText style={{ marginLeft: "0.2rem" }}>
          {recruitmentNumbers}
        </InfoText>
      </InfoBox>
      <LinearProgress
        color={"primary"}
        variant="determinate"
        value={(matchingUserNum / recruitmentNumbers) * 100}
        sx={{ height: 8, margin: "0.5rem 0" }}
      />
      <div style={{ marginTop: "1.5rem" }}></div>

      <Link href="/select_user">
        <Button type="default" text="メンバー編成"></Button>
      </Link>
      <Button type="second" text="POSTを編集"></Button>
    </Box>
  );
}
