import { useState } from "react";
import { Box, Grid, Modal } from "@mui/material";
import Button from "../../atoms/Button";
import CelebrateModal from "../CelebrateModal";

const FirstModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "40%",
  borderRadius: 1,
  backgroundColor: "white",
  padding: "2rem",
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

interface CheckModal {
  onClose: () => void;
  onConfirm: () => void;
}
export default function CheckModel({ onClose, onConfirm }: CheckModal) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={FirstModalStyle}>
      <p style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
        選択中のユーザの参加を承諾します。<br></br>よろしいですか？
      </p>
      <Grid container spacing={4} sx={{ width: "80%", marginTop: "0.2rem" }}>
        <Grid item xs={12} sm={6}>
          <Button
            type="second"
            text="戻る"
            height={"4rem"}
            onClick={onClose}
          ></Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            type="default"
            text="参加承諾"
            height={"4rem"}
            onClick={onConfirm}
          ></Button>
        </Grid>
      </Grid>
    </Box>
  );
}
