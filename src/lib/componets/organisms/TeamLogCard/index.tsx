import styled from "styled-components";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";

const Item =styled.div`
display: flex;
align-items: center;
margin: 0.2rem 0;
`;

interface PostCardProps {
  postData: object;
}
export default function LogCard({ postData }: PostCardProps) {
  return (
    <Box
      sx={{
          mb: 2,
          display: "flex",
          flexDirection: "column",
          boxShadow: 1,
          width: 200,
          height: 200,
          overflow: "hidden",
          overflowY: "scroll",
        }}
    >
    <Stack spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
    </Box>
  );
}

function formatDate(date: any, sep = "") {
  const yyyy = date.getFullYear();
  const mm = ("00" + (date.getMonth() + 1)).slice(-2);
  const dd = ("00" + date.getDate()).slice(-2);

  return `${yyyy}${sep}${mm}${sep}${dd}`;
}
