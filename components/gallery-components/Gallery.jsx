import React, { useState } from "react";
import { ImageList, ImageListItem, Typography } from "@mui/material";
import GalleryModal from "./GalleryModal"; // Import the modal component

const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    cols: 2,
    rows: 2,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    cols: 1,
    rows: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1526927071144-dbe4c41835e4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
    cols: 1,
    rows: 2,
  },
  {
    src: "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
    cols: 1,
    rows: 1,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ019r2GcVfsd94tVr8ru4YT-aGSuZCwDj1g&s",
    cols: 2,
    rows: 1,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    cols: 2,
    rows: 2,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    cols: 1,
    rows: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1526927071144-dbe4c41835e4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
    cols: 1,
    rows: 2,
  },
  {
    src: "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
    cols: 1,
    rows: 1,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ019r2GcVfsd94tVr8ru4YT-aGSuZCwDj1g&s",
    cols: 2,
    rows: 1,
  },
];

const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div
      style={{
        padding: "50px",
        backgroundColor: "rgb(43, 43, 43)", // Dark background
        minHeight: "100vh",
        color: "rgb(255, 228, 0)", // Font color for the overall container
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title and Description */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{
          color: "rgb(255, 228, 0)", // Yellow font for the title
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        Gallery
      </Typography>
      <Typography
        variant="body1"
        align="center"
        gutterBottom
        style={{
          color: "rgb(255, 228, 0)", // Yellow font for the description
          maxWidth: "600px",
          marginBottom: "40px",
          fontSize: "18px",
          lineHeight: "1.6",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>

      {/* Photo Grid */}
      <ImageList
        sx={{
          width: "100%",
          maxWidth: "1200px",
          height: "auto",
          borderRadius: "12px", // Rounded corners for a modern look
          overflow: "hidden", // To avoid overflow issues
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)", // Subtle shadow for modern aesthetics
        }}
        variant="quilted"
        cols={4}
        rowHeight={200}
        gap={8}
      >
        {images.map((image, index) => (
          <ImageListItem
            key={index}
            cols={image.cols || 1}
            rows={image.rows || 1}
            onClick={() => handleImageClick(image.src)} // Open modal when image is clicked
            style={{
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              borderRadius: "8px", // Add some border-radius to images
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"; // Zoom effect on hover
              e.currentTarget.style.boxShadow =
                "0px 6px 20px rgba(0, 0, 0, 0.8)"; // Add hover shadow
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal for showing clicked image */}
      <GalleryModal
        open={openModal}
        onClose={handleCloseModal}
        imageSrc={selectedImage}
      />
    </div>
  );
};

export default Gallery;
