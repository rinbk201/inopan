import styled from "styled-components";
import { Box } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RaderChart from "../../atoms/RaderChart";
const H1 = styled.h1`
  font-size: 1.3rem;
  font-weight: var(--heavy);
  margin: 0 0 0 0.2rem;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0.1rem 0;
`;
interface TeamSkillBoxProps {
  requestUserNum: number;
  matchingUserNum: number;
  teamSkill: object;
}
export default function TeamSkillBox({
  teamSkill,
  requestUserNum,
}: TeamSkillBoxProps) {
  // templateを元にDBから取得したチームスキルをRaderChartに渡せる形式に整形
  const template = [
    { id: "PLANNING", subject: "アイデア・企画力" },
    { id: "PRESENTATION", subject: "プレゼン力" },
    { id: "DESIGN", subject: "デザイン" },
    { id: "FRONTEND", subject: "フロントエンド" },
    { id: "BACKEND", subject: "バックエンド" },
  ];
  const convertedTeamSkill = template.map((obj) => ({
    ...obj,
    value: teamSkill[obj.id] || 0,
    fullMark: requestUserNum * 5,
  }));

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: "white",
        padding: "1.5rem",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",
        marginTop: "1rem",
      }}
    >
      <TitleBox>
        <PeopleAltIcon sx={{ width: 25 }}></PeopleAltIcon>

        <H1>チームの開発スキル</H1>
      </TitleBox>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}
      >
        <RaderChart data={convertedTeamSkill}></RaderChart>
      </div>
    </Box>
  );
}
