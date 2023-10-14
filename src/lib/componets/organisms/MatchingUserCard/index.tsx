import { Card, CardContent } from "@mui/material";
import UserIcon from "../../atoms/UserIcon";
interface MatchingUserCardProps {
  imgSrc: string;
  userName: string;
}
export default function MatchingUserCard({
  imgSrc,
  userName,
}: MatchingUserCardProps) {
  return (
    <Card sx={{ margin: "0.5rem", textAlign: "center" }}>
      <CardContent>
        <UserIcon iconImg={imgSrc} iconSize="5rem" />
        <p style={{ marginTop: "0.5rem" }}>{userName}</p>
      </CardContent>
    </Card>
  );
}
