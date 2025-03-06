"use client";
import { Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const GalleryModal = ({ open, onClose, imageSrc, format }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent
        style={{
          position: "relative",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(43, 43, 43)",
        }}
      >
        <IconButton
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1,
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>

        <img
          src={imageSrc || "/placeholder.svg"}
          alt={`Selected ${format} image`}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "90vh",
            objectFit: "contain",
          }}
        />

        {format && (
          <Typography
            variant="subtitle1"
            style={{
              color: "rgb(255, 228, 0)",
              padding: "10px",
              textAlign: "center",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {format} Format
            {format === "portrait" && " (1080x1920)"}
            {format === "square" && " (1:1)"}
            {format === "landscape" && " (3:1)"}
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
