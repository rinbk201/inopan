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
    gakka: "FI",
    gakkaText: "未来科学部情報メディア学科",
    imgSrc: "/images/1.jpg",
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
    gakka: "AD",
    gakkaText: "システムデザイン工学部デザイン工学科",
    imgSrc: "/images/2.jpg",
    skill: {
      PLANNING: 1,
      DESIGN: 2,
      FRONTEND: 3,
      BACKEND: 2,
      PRESENTATION: 5,
    },
  },
  {
    userId: 10,
    display_name: "ちょこ",
    email: "XXfiXXX@ms.dendai.ac.jp",
    affiliation_id: 1,
    lab: "情報セキュリティ研究室",
    gender: "MAN",
    hobby: "Youtube, Netflix",
    comment: "経験は少ないですが，協力し合いながら経験を積んでいきたいです！",
    discordId: "hogehoge",
    xId: "hogehoge",
    facebookId: "hogehoge",
    freeForm: "いぬがすき",
    gakka: "AJ",
    gakkaText: "システムデザイン工学部システム工学科",
    imgSrc: "/images/3.jpg",
    skill: {
      PLANNING: 1,
      DESIGN: 2,
      FRONTEND: 3,
      BACKEND: 2,
      PRESENTATION: 5,
    },
  },
  {
    userId: 2,
    display_name: "れおん",
    email: "XXfiXXX@ms.dendai.ac.jp",
    affiliation_id: 4,
    lab: "メディア応用研究室",
    gender: "WOMAN",
    hobby: "寝ること",
    comment: "俺はかわいい",
    discordId: "hogehoge",
    xId: "hogehoge",
    facebookId: "hogehoge",
    freeForm: "ネズミには目がありません",
    gakka: "RD",
    gakkaText: "理工学部情報システムデザイン学系",
    imgSrc: "/images/4.jpg",
    skill: {
      PLANNING: 1,
      DESIGN: 2,
      FRONTEND: 3,
      BACKEND: 2,
      PRESENTATION: 5,
    },
  },
  {
    userId: 3,
    display_name: "ちーの",
    email: "XXfiXXX@ms.dendai.ac.jp",
    affiliation_id: 2,
    lab: "実空間コンピューティング研究室",
    gender: "MAN",
    hobby: "アニメ鑑賞",
    comment: "バックエンドの開発経験はありますが，フロントエンドは苦手です",
    discordId: "hogehoge",
    xId: "hogehoge",
    facebookId: "hogehoge",
    freeForm: "ゲームも好きなので一緒にやりましょう",
    gakka: "FI",
    gakkaText: "未来科学部情報メディア学科",
    imgSrc: "/images/5.jpg",
    skill: {
      PLANNING: 1,
      DESIGN: 2,
      FRONTEND: 3,
      BACKEND: 2,
      PRESENTATION: 5,
    },
  },
];

const demo_user_paticipant_list = [
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
];

export default function Home() {
  return (
    <SelectUserTemplate
      teamSkillData={demo_team_skill_data}
      userList={demo_user_list}
      paticipant={demo_user_paticipant_list}
    ></SelectUserTemplate>
  );
}
