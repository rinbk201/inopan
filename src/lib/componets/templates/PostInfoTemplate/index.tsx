import { Container, Grid } from "@mui/material";
import PostInfoTitle from "../../organisms/PostInfoTopTitleBox";
import PostImageBox from "../../atoms/PostImageBox";
import PostDetailBox from "../../organisms/PostDetailBox";
import PostInfoBox from "../../organisms/PostInfoBox";
import TeamSkillBox from "../../organisms/TeamSkillBox";

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
  // postData:postType[] これにするべき?
  postData: object;
}
export default function PostInfoTemplate({ postData }: PostInfoTemplateProps) {
  return (
    <Container>
      <PostInfoTitle
        type={postData.type}
        title={postData.title}
      ></PostInfoTitle>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <PostImageBox imgSrc={postData.img}></PostImageBox>
          <PostDetailBox
            title={postData.title}
            description={postData.description}
            updateDate={formatDate(postData.modifiedAt, "/")}
            launchDay={formatDate(postData.launchDay, "/")}
          ></PostDetailBox>
        </Grid>

        <Grid item xs={12} sm={6}>
          <PostInfoBox
            deadline={formatDate(postData.deadline, "/")}
            bookmarkUserNum={postData.bookmarkUserNum}
            requestUserNum={postData.requestUserNum}
            matchingUserNum={postData.matchingUserNum}
            recruitmentNumbers={postData.recruitmentNumbers}
          ></PostInfoBox>
          <TeamSkillBox
            requestUserNum={postData.requestUserNum}
            teamSkill={postData.teamSkill}
          ></TeamSkillBox>
        </Grid>
      </Grid>
    </Container>
  );
}
function formatDate(date, sep = "") {
  const yyyy = date.getFullYear();
  const mm = ("00" + (date.getMonth() + 1)).slice(-2);
  const dd = ("00" + date.getDate()).slice(-2);

  return `${yyyy}${sep}${mm}${sep}${dd}`;
}
