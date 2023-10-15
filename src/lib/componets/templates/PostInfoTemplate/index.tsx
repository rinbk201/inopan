"use client"
import { Container, Grid } from "@mui/material";
import PostInfoTitle from "../../organisms/PostInfoTopTitleBox";
import PostImageBox from "../../atoms/PostImageBox";
import PostDetailBox from "../../organisms/PostDetailBox";
import PostInfoBox from "../../organisms/PostInfoBox";
import TeamSkillBox from "../../organisms/TeamSkillBox";
import { PostDetailType } from "@/types";
import { Noto_Sans_Canadian_Aboriginal } from "next/font/google";

/**
 * 
 * メモ：以下のようなdemoデータを想定して動くように実装してあります．
 * 
 * 
const demo_post_data = {
  type: "ハッカソン",
  title:
    "タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル",
  img: "/images/AdobeStock_237571484.jpeg",
  deadline: new Date(2023, 10, 22),
  launchDay: new Date(2023, 10, 25),
  modifiedAt: new Date(2023, 10, 22),
  description:
    "あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ一緒に一揆しませんか？　詳細説明",
  bookmarkUserNum: 15,
  requestUserNum: 5,
  matchingUserNum: 1,
  recruitmentNumbers: 6,
  teamSkill: {
    PLANNING: 5,
    DESIGN: 2,
    FRONTEND: 3,
    BACKEND: 2,
    PRESENTATION: 5,
  },
};
 * 
 * 
 */

interface PostInfoTemplateProps {
  postData: PostDetailType;
}
export default function PostInfoTemplate({ postData }: PostInfoTemplateProps) {
  
  return (
    <Container>
      <PostInfoTitle
        type={postData.PostType.eventType}
        title={postData.PostType.title}
      ></PostInfoTitle>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <PostImageBox imgSrc="/../../../../../1.jpeg"></PostImageBox>
          <PostDetailBox
            title={postData.PostType.title}
            description={postData.PostType.description}
            updateDate={formatDate(postData.PostType.modifiedAt, "/")}
            launchDay={formatDate(postData.PostType.launchDay, "/")}
          ></PostDetailBox>
        </Grid>

        <Grid item xs={12} sm={6}>
          <PostInfoBox
            deadline={formatDate(postData.PostType.deadline, "/")}
            bookmarkUserNum={postData.bookmarkCount}
            requestUserNum={postData.requestCount}
            matchingUserNum={postData.approvedCount}
            recruitmentNumbers={postData.PostType.recruitmentNumbers}
          ></PostInfoBox>
          <TeamSkillBox
            requestUserNum={postData.requestCount}
            teamSkill={postData.teamSkill}
          ></TeamSkillBox>
        </Grid>
      </Grid>
    </Container>
  );
}
function formatDate(date: Date|undefined, sep = "") {
if(date != undefined){
  date = new Date(date!);
  const yyyy = date.getFullYear();
  const mm = ("00" + (date.getMonth() + 1)).slice(-2);
  const dd = ("00" + date.getDate()).slice(-2);
  return `${yyyy}${sep}${mm}${sep}${dd}`;
}
  return `${2023}${sep}${10}${sep}${14}`;
}
