import { Box, Grid } from "@mui/material";
import Button from "../../atoms/Button";
import styled from "styled-components";
import MatchingUserCard from "../MatchingUserCard";

const FirstModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "50%",
  borderRadius: 1,
  backgroundColor: "white",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: var(--bold);
  margin: 0 0 2rem 0;
`;
interface CelebrateModalProps {
  onClose: () => void;
  matchingUserList: object;
}
export default function CelebrateModal({
  onClose,
  matchingUserList,
}: CelebrateModalProps) {
  return (
    <Box sx={FirstModalStyle}>
      <p style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
        <H1>マッチングおめでとうございます！</H1>
      </p>
      <div style={{ display: "flex" }}>
        {matchingUserList.map((item, index) => (
          <div key={index}>
            <MatchingUserCard
              imgSrc={item.id}
              userName={item.display_name}
            ></MatchingUserCard>
          </div>
        ))}
      </div>

      <p style={{ color: "gray", marginTop: "1rem" }}>
        参加希望者に通知を送信しました。
      </p>
    </Box>
  );
}
