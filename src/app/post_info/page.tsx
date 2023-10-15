"use client";
import PostInfoTemplate from "@/lib/componets/templates/PostInfoTemplate";

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
export default function PostInfo() {
  return <PostInfoTemplate postData={demo_post_data}></PostInfoTemplate>;
}
