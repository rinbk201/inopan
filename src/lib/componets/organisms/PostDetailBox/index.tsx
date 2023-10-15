import styled from "styled-components";
import { Box } from "@mui/material";
import PostInfoTitle from "../../atoms/PostInfoTitle";
import PostInfoData from "../../molecules/PostInfoData";

const UpdateDataText = styled.p`
  font-size: 1rem;
  color: silver;
`;

interface PostInfoBoxProps {
  updateDate: string;
  description: string;
  title: string;
  launchDay: string;
}
export default function PostInfoBox({
  updateDate,
  description,
  title,
  launchDay,
}: PostInfoBoxProps) {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: "white",
        marginTop: "1rem",
        padding: "1.5rem",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div style={{ textAlign: "right", marginBottom: "1rem" }}>
        <UpdateDataText>最終更新日：{updateDate}</UpdateDataText>
      </div>
      <p style={{ marginBottom: "1rem" }}>{description}</p>
      <div style={{ margin: "3rem 0" }}>
        <PostInfoTitle title="イベント情報"></PostInfoTitle>
        <p>{description}</p>
        <PostInfoData title="イベント名" data={title}></PostInfoData>
        <PostInfoData title="開催日時" data={launchDay}></PostInfoData>
      </div>
    </Box>
  );
}
