"use client";

import { useState } from "react";
import { ImageList, ImageListItem, Typography } from "@mui/material";
import GalleryModal from "./GalleryModal";

// Define image aspect ratios based on WhatsApp chat
const imageFormats = {
  portrait: { cols: 1, rows: 2 }, // 1080 x 1920 portrait
  square: { cols: 1, rows: 1 }, // 1:1 square
  landscape: { cols: 2, rows: 1 }, // 3:1 landscape
  wide: { cols: 2, rows: 2 }, // Wide format
};

// Updated images array with proper aspect ratios
const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    ...imageFormats.wide,
    format: "wide",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    ...imageFormats.square,
    format: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1526927071144-dbe4c41835e4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
    ...imageFormats.portrait,
    format: "portrait",
  },
  {
    src: "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
    ...imageFormats.square,
    format: "square",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ019r2GcVfsd94tVr8ru4YT-aGSuZCwDj1g&s",
    ...imageFormats.landscape,
    format: "landscape",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    ...imageFormats.wide,
    format: "wide",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    ...imageFormats.square,
    format: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1526927071144-dbe4c41835e4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
    ...imageFormats.portrait,
    format: "portrait",
  },
  {
    src: "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
    ...imageFormats.square,
    format: "square",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ019r2GcVfsd94tVr8ru4YT-aGSuZCwDj1g&s",
    ...imageFormats.landscape,
    format: "landscape",
  },
];

const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [filterFormat, setFilterFormat] = useState("all");

  const handleImageClick = (imageSrc, format) => {
    setSelectedImage(imageSrc);
    setSelectedFormat(format);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Filter images based on selected format
  const filteredImages =
    filterFormat === "all"
      ? images
      : images.filter((img) => img.format === filterFormat);

  return (
    <>
      <div
        style={{
          maxHeight: "auto",
          overflowY: "auto",
          padding: "5%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          style={{
            padding: "2%",
            backgroundColor: "rgb(43, 43, 43)",
            minHeight: "auto",
            color: "rgb(255, 228, 0)",
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
              color: "rgb(255, 228, 0)",
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
              color: "rgb(255, 228, 0)",
              maxWidth: "600px",
              marginBottom: "20px",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            Browse our collection of images in different formats: portrait
            (1080x1920), square (1:1), and landscape (3:1).
          </Typography>

          {/* Format Filter Buttons */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <button
              onClick={() => setFilterFormat("all")}
              style={{
                padding: "8px 16px",
                backgroundColor:
                  filterFormat === "all" ? "rgb(255, 228, 0)" : "transparent",
                color: filterFormat === "all" ? "black" : "rgb(255, 228, 0)",
                border: "1px solid rgb(255, 228, 0)",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              All
            </button>
            <button
              onClick={() => setFilterFormat("portrait")}
              style={{
                padding: "8px 16px",
                backgroundColor:
                  filterFormat === "portrait"
                    ? "rgb(255, 228, 0)"
                    : "transparent",
                color:
                  filterFormat === "portrait" ? "black" : "rgb(255, 228, 0)",
                border: "1px solid rgb(255, 228, 0)",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Portrait
            </button>
            <button
              onClick={() => setFilterFormat("square")}
              style={{
                padding: "8px 16px",
                backgroundColor:
                  filterFormat === "square"
                    ? "rgb(255, 228, 0)"
                    : "transparent",
                color: filterFormat === "square" ? "black" : "rgb(255, 228, 0)",
                border: "1px solid rgb(255, 228, 0)",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Square
            </button>
            <button
              onClick={() => setFilterFormat("landscape")}
              style={{
                padding: "8px 16px",
                backgroundColor:
                  filterFormat === "landscape"
                    ? "rgb(255, 228, 0)"
                    : "transparent",
                color:
                  filterFormat === "landscape" ? "black" : "rgb(255, 228, 0)",
                border: "1px solid rgb(255, 228, 0)",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Landscape
            </button>
          </div>

          {/* Photo Grid */}
          <ImageList
            sx={{
              width: "100%",
              maxWidth: "1200px",
              height: "auto",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
            }}
            variant="quilted"
            cols={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6, "2xl": 7, "3xl": 8 }}
            rowHeight={200}
            gap={8}
          >
            {filteredImages.map((image, index) => (
              <ImageListItem
                key={index}
                cols={image.cols || 1}
                rows={image.rows || 1}
                onClick={() => handleImageClick(image.src, image.format)}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0px 6px 20px rgba(0, 0, 0, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={`Gallery Image ${index + 1} - ${image.format}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                {/* Format label */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "rgb(255, 228, 0)",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {image.format}
                </div>
              </ImageListItem>
            ))}
          </ImageList>

          {/* Modal for showing clicked image */}
          <GalleryModal
            open={openModal}
            onClose={handleCloseModal}
            imageSrc={selectedImage}
            format={selectedFormat}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
