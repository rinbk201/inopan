"use client";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LinearProgress from "@mui/material/LinearProgress";
import DashedLine from "../../atoms/DashedLine";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PersonIcon from "@mui/icons-material/Person";
import UserIcon from "../../atoms/UserIcon";
import { PostCardType, PostType } from "@/types";
import Link from "next/link";
import PostImageBox from "../../atoms/PostImageBox";

const PostTypeText = styled.p`
  font-size: 0.9rem;
  font-weight: var(--bold);
  color: var(--pink);
`;

const PostTitle = styled.p`
  font-size: 1rem;
  font-weight: var(--bold);
`;

const UserName = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin: 0 0 0 0.2rem;
`;

const PostInfo = styled.p`
  font-size: 0.9rem;
  color: gray;
  margin: 0 0 0 0.2rem;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
`;

const RecruitmentNumbersText = styled.p`
  font-size: 1.2rem;
`;

interface PostCardProps {
  postCardData: PostCardType;
}
export default function PostCard({ postCardData }: PostCardProps) {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <Link href={`/post/${postCardData.PostType.id}`} passHref>
      {/* <CardMedia
        sx={{ height: 198 }}
        image="../../../../../1.jpeg"
        title="green iguana"
      /> */}

      <PostImageBox imgSrc={`/${postCardData.PostType.id%6+1}.jpeg`}></PostImageBox>
      
        <CardContent>
          <PostTypeText>{postCardData.PostType.eventType}</PostTypeText>
          <PostTitle>{postCardData.PostType.title}</PostTitle>
          <InfoBox>
            <UserIcon iconSize="1.5rem" iconImg="/images/"></UserIcon>
            <UserName>{postCardData.autherName}</UserName>
          </InfoBox>

          <DashedLine></DashedLine>
          <InfoBox>
            <WatchLaterIcon sx={{ width: 18 }}></WatchLaterIcon>
            <PostInfo>
              {formatDate(postCardData.PostType.deadline, "/")}
            </PostInfo>
          </InfoBox>
          <InfoBox>
            <PersonIcon sx={{ width: 18 }}></PersonIcon>
            <PostInfo>募集人数</PostInfo>
          </InfoBox>
          <RecruitmentNumbersText>
            {postCardData.approvedCount}/
            {postCardData.PostType.recruitmentNumbers}人
          </RecruitmentNumbersText>
          <LinearProgress
            color={"primary"}
            variant="determinate"
            value={
              (postCardData.approvedCount /
                postCardData.PostType.recruitmentNumbers) *
              100
            }
          />
        </CardContent>
      </Link>
    </Card>
  );
}

function formatDate(date: Date, sep = "") {
  date = new Date(date);
  const yyyy = date.getFullYear();
  const mm = ("00" + (date.getMonth() + 1)).slice(-2);
  const dd = ("00" + date.getDate()).slice(-2);

  return `${yyyy}${sep}${mm}${sep}${dd}`;
}
