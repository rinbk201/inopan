"use client";
import SelectUserTemplate from "@/lib/componets/templates/SelectUserTemplate";
// FIX:DBからのデータ取得に修正

const demo_team_skill_data = {
  recruitmentNumbers: 5, // POSTの募集人数
  skill: {
    PLANNING: 3,
    DESIGN: 5,
    FRONTEND: 4,
    BACKEND: 3,
    PRESENTATION: 1,
  },
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
export default function Home() {
  return (
    <SelectUserTemplate
      teamSkillData={demo_team_skill_data}
      userList={demo_user_list}
    ></SelectUserTemplate>
  );
}
