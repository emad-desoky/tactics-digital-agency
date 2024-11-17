import React from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const GalleryModal = ({ open, onClose, imageSrc }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent
        style={{
          position: "relative",
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>
        <img
          src={imageSrc}
          alt="Selected"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "90vh",
            objectFit: "contain",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
