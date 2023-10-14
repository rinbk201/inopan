import { Box } from "@mui/material";
import Image from 'next/image'

interface PostImageBox {
  imgSrc: string;
}
export default function PostImageBox({ imgSrc }: PostImageBox) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "22rem",
        borderRadius: 1,
        overflow: "hidden",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Image 

        src={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        alt="説明です"
      />
    </Box>
  );
}
