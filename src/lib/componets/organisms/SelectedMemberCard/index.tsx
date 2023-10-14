import { Card, CardContent } from "@mui/material";
import UserIcon from "../../atoms/UserIcon";

interface SelectedMemberCardProps {
  imgSrc: string;
  userName: string;
  userSkill: object;
}
export default function SelectedMemberCard({
  imgSrc,
  userName,
  userSkill,
}: SelectedMemberCardProps) {
  return (
    <Card
      style={{
        minWidth: "8rem",
        margin: "0.3rem",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "200px",
        }}
      >
        <div>
          <UserIcon iconImg={imgSrc} iconSize="3rem"></UserIcon>
        </div>
        <p>{userName}</p>
      </CardContent>
    </Card>
  );
}
