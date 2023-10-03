import CsPaper from "../../components/reusable/CsPaper";
import itemData from "../../data/certificates";
import {
  Box,
  ImageList,
  ImageListItem,
  Modal,
  Typography,
  styled,
} from "@mui/material";
import { IconButton } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  backgroundColor: "transparent",
  p: 4,
};

const ImageInModal = styled("img")({
  width: "100%",
  objectFit: "cover",
});

const Certificate = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <CsPaper>
      <Typography variant="h5">Vos certificats</Typography>
      <ImageList
        sx={{ height: 600, marginTop: 3, position: "relative" }}
        cols={3}
        rowHeight={164}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.id}
            sx={{ cursor: "pointer", width: 300, height: 300 }}
          >
            <img
              src={`${item.imgSrc}?w=264&h=264&fit=crop&auto=format`}
              srcSet={`${item.imgSrc}?w=264&h=264&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              onClick={() => {
                handleOpen();
                setSelectedImage(item.imgSrc);
              }}
              loading="lazy"
            />
            <IconButton
              sx={{ position: "absolute", right: 0, top: 0 }}
              download
              href={item.imgSrc}
            >
              <GetAppIcon />
            </IconButton>
          </ImageListItem>
        ))}
      </ImageList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ImageInModal src={selectedImage} loading="lazy" />
        </Box>
      </Modal>
    </CsPaper>
  );
};

export default Certificate;
