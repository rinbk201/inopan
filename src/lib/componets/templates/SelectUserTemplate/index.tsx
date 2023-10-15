import RaderChart from "@/lib/componets/atoms/RaderChart";
import { Container, Grid, Modal } from "@mui/material";
import UserList from "@/lib/componets/organisms/UserList";
import { useState } from "react";
import Button from "@/lib/componets/atoms/Button";
import Confetti from "@/lib/componets/atoms/Confetti";
import CheckModel from "../../organisms/CheckModal";
import CelebrateModal from "../../organisms/CelebrateModal";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import styled from "styled-components";
import SelectedMemberCard from "../../organisms/SelectedMemberCard";
import { Card, CardContent } from "@mui/material";
import { PaticipantSelectionIncludeTeamInfoType, SkillType, SkillFields , PaticipantSelectionType} from "@/types";
import userList from "@/lib/componets/organisms/UserList";
import { getAllApplicationUser } from "@/lib/utils/participantSelection";

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
  userLists: PaticipantSelectionIncludeTeamInfoType;
  teamSkill: SkillType
}
export default function SelectUserTemplate({
  userLists,
  teamSkill
}: SelectUserTemplate) {
  // templateを元にDBから取得したチームスキルをRaderChartに渡せる形式に整形
  const template = [
    { id: SkillFields.PLANNING, subject: "アイデア・企画力" },
    { id: SkillFields.PRESENTATION, subject: "プレゼン力" },
    { id: SkillFields.DESIGN, subject: "デザイン" },
    { id: SkillFields.FRONTEND, subject: "フロントエンド" },
    { id: SkillFields.BACKEND, subject: "バックエンド" },
  ];
  const [convertedTeamData, setTeamData] = useState(
    template.map((obj) => ({
      ...obj,
      value: teamSkill[obj.id] || 0,
      fullMark: userLists.RequirementNumber * 5,
    }))
  );
  const applicationUser: PaticipantSelectionType[] = userLists.paticipants.UNAPPROVED
  const userList: any[] = []
  for (var i in applicationUser) {
    const data = 
      {   id: applicationUser[i].userInfo.id,
          img_path: "@/img/" + String(applicationUser[i].userInfo.id),
          name: applicationUser[i].userInfo.displayName,
          display_name: applicationUser[i].userInfo.displayName,
          email: applicationUser[i].userInfo.email,
          affiliation_id: applicationUser[i].userInfo,
          lab: applicationUser[i].userInfo.affiliationId,
          gender: applicationUser[i].userInfo.gender,
          hobby: applicationUser[i].userInfo.hobby,
          comment: applicationUser[i].userInfo.comment,
          DiscordID: applicationUser[i].userInfo.discordId,
          XID: applicationUser[i].userInfo.xId,
          FaceBookID: applicationUser[i].userInfo.facebookId,
          free_form: applicationUser[i].userInfo.freeForm,
          deleted_at: applicationUser[i].userInfo.deletedAt,
          skill: applicationUser[i].skills,
      }
      userList.push(data)
  }
  //console.log(teamSkill)
  //console.log(applicationUser)
  // 選択されたユーザのリスト
  const [selectedUser, setSelectedUser] = useState([]);
  const createSelectedUserList = (indexList: []) => {
    var selectedUserList: object[] = [];
    console.log(indexList)
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
      <Title>メンバー編成</Title>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={7}>
          <div style={{ margin: "1rem 0" }}>
            <div style={{ display: "flex" }}>
              <PeopleAltIcon sx={{ width: 25 }}></PeopleAltIcon>{" "}
              <h2 style={{ marginLeft: "0.3rem" }}>応募ユーザを選定</h2>
            </div>
            <UserList
              list={userList}
              onCheckAbilityCard={handleCheckedAbilityCard}
            ></UserList>
            <Button
              type="default"
              text="選択したユーザの参加を承諾"
              onClick={handleOpenCheckModal}
            ></Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div
            style={{
              backgroundColor: "white",
              padding: "1rem",
              borderRadius: 2,
            }}
          >
            <div style={{ display: "flex" }}>
              <PeopleAltIcon sx={{ width: 25 }}></PeopleAltIcon>{" "}
              <h2 style={{ marginLeft: "0.3rem" }}>現在のチームの開発スキル</h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "white",
                flexDirection: "column",
                padding: "1rem",
                borderRadius: 2,
              }}
            >
              <RaderChart data={convertedTeamData}></RaderChart>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <PeopleAltIcon sx={{ width: 25 }}></PeopleAltIcon>{" "}
                <h2 style={{ marginLeft: "0.3rem" }}>参加中のメンバー</h2>
              </div>
              <div style={{ display: "flex", overflowX: "scroll" }}>
                {selectedUser.map((item, index) => (
                  <SelectedMemberCard
                    key={index}
                    imgSrc={item.id}
                    userName={item.display_name}
                    userSkill={item.skill}
                  ></SelectedMemberCard>
                ))}
              </div>
            </div>
          </div>
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

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: var(--bold);
  text-align: center;
  margin-bottom: 2rem;
`;
