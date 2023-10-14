import Header from "@/lib/componets/header";
import RaderChart from "@/lib/componets/atoms/RaderChart";
import { Container, Grid, Modal } from "@mui/material";
import UserList from "@/lib/componets/organisms/UserList";
import { useState } from "react";
import Button from "@/lib/componets/atoms/Button";
import Confetti from "@/lib/componets/atoms/Confetti";
import CheckModel from "../../organisms/CheckModal";
import CelebrateModal from "../../organisms/CelebrateModal";

/**
   * "teamSkillData"
   * チーム参加決定者のスキルの値の合算したデータ
   * 以下の形式を想定
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
   * */

/**
    * "userList"
   * 参加希望者リスト
   * 以下の形式を想定
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
   * */

interface SelectUserTemplate {
  teamSkillData: object;
  userList: object;
}
export default function SelectUserTemplate({
  teamSkillData,
  userList,
}: SelectUserTemplate) {
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
      value: teamSkillData.skill[obj.id] || 0,
      fullMark: teamSkillData.recruitmentNumbers * 5,
    }))
  );
  // 選択されたユーザのリスト
  const [selectedUser, setSelectedUser] = useState([]);
  const createSelectedUserList = (indexList: object) => {
    var selectedUserList: object = [];
    indexList.map((index) => {
      selectedUserList.push(userList[index]);
    });
    return selectedUserList;
  };
  // 選択されたユーザのIndexListを元に全員分のSkillを足した値を返す
  const createSelectedUserData = (indexList: object) => {
    var template = {
      PLANNING: 0,
      DESIGN: 0,
      FRONTEND: 0,
      BACKEND: 0,
      PRESENTATION: 0,
    };
    indexList.map((index) => {
      Object.keys(template).map((key) => {
        template[key] += userList[index].skill[key];
      });
    });
    return template;
  };
  // 選択された内容を反映
  const handleCheckedAbilityCard = (SelectedUserIndexList: object) => {
    setSelectedUser(createSelectedUserList(SelectedUserIndexList));
    setTeamData(
      convertedTeamData.map((obj) => ({
        ...obj,
        newValue:
          obj.value + createSelectedUserData(SelectedUserIndexList)[obj.id] ||
          0,
      }))
    );
  };

  // 一つ目の承諾送信確認モーダルの表示管理
  const [openCheckModal, setOpenCheckModal] = useState(false);
  const handleOpenCheckModal = () => setOpenCheckModal(true);
  const handleCloseCheckModal = () => setOpenCheckModal(false);

  // 二つ目のマッチングおめでとうモーダルの表示管理
  const [openCelebrateModal, setOpenCelebrateModal] = useState(false);
  const handleOpenCelebrateModal = () => setOpenCelebrateModal(true);
  const handleCloseCelebrateModal = () => setOpenCelebrateModal(false);

  const handleConfirm = () => {
    handleCloseCheckModal();
    handleOpenCelebrateModal();
  };
  return (
    <Container>
      <Header />
      <Grid container spacing={3}>
        <Grid>
          <h2>参加希望者一覧</h2>
          <UserList
            list={userList}
            onCheckAbilityCard={handleCheckedAbilityCard}
          ></UserList>
          <Button
            type="default"
            text="選択したユーザの参加を承諾"
            onClick={handleOpenCheckModal}
          ></Button>
        </Grid>
        <Grid>
          <RaderChart data={convertedTeamData}></RaderChart>
        </Grid>
      </Grid>
      <Modal
        open={openCheckModal}
        onClose={handleCloseCheckModal}
        disableAutoFocus
      >
        <CheckModel
          onClose={handleCloseCheckModal}
          onConfirm={handleConfirm}
        ></CheckModel>
      </Modal>

      <Modal open={openCelebrateModal} onClose={handleCloseCelebrateModal}>
        <CelebrateModal
          onClose={handleCloseCelebrateModal}
          matchingUserList={selectedUser}
        ></CelebrateModal>
      </Modal>
      <Confetti></Confetti>
    </Container>
  );
}
