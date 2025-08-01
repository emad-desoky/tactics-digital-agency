"use client";

import { useState, useEffect } from "react";
import GalleryModal from "./GalleryModal";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Use the provided image URLs with some modified to be full-width portraits
const galleryImages = [
  // Page 1 - standard layout
  {
    src: "https://images.unsplash.com/photo-1526927071144-dbe4c41835e4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
    format: "portrait",
    cols: 1,
    rows: 2,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ019r2GcVfsd94tVr8ru4YT-aGSuZCwDj1g&s",
    format: "landscape",
    cols: 2,
    rows: 1,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    format: "landscape",
    cols: 2,
    rows: 1,
  },
  {
    src: "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
    format: "square",
    cols: 1,
    rows: 1,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    format: "square",
    cols: 1,
    rows: 1,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    format: "square",
    cols: 1,
    rows: 1,
  },

  // Page 2 - with full-width portrait
  {
    src: "https://images.unsplash.com/photo-1526927071144-dbe4c41835e4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
    format: "wide-portrait",
    cols: 3,
    rows: 1,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ019r2GcVfsd94tVr8ru4YT-aGSuZCwDj1g&s",
    format: "landscape",
    cols: 2,
    rows: 1,
  },
  {
    src: "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
    format: "square",
    cols: 1,
    rows: 1,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    format: "landscape",
    cols: 2,
    rows: 1,
  },
  {
    src: "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
    format: "square",
    cols: 1,
    rows: 1,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFv1LJuW59sR1KW6BDD5ietN8eJlEZLk7eA&s",
    format: "square",
    cols: 1,
    rows: 1,
  },
];

// Split images into pages of 6 images each
const imagesPerPage = 7;
const paginatedImages = galleryImages.reduce((acc, image, index) => {
  const pageIndex = Math.floor(index / imagesPerPage);
  if (!acc[pageIndex]) {
    acc[pageIndex] = [];
  }
  acc[pageIndex].push(image);
  return acc;
}, []);

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("next");

  const totalPages = paginatedImages.length;
  const currentImages = paginatedImages[currentPage] || [];

  const handlePrevPage = () => {
    if (currentPage > 0 && !isAnimating) {
      setAnimationDirection("prev");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
      }, 300);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1 && !isAnimating) {
      setAnimationDirection("next");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
      }, 300);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const openModal = (image) => {
    setSelectedImage(image.src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full max-w-[70%] mx-auto p-4 md:p-8 bg-neutral-900">
      <div
        className={`grid grid-cols-3 gap-3 md:gap-4 relative transition-all duration-500 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: isAnimating
            ? `translateX(${animationDirection === "next" ? "-20px" : "20px"})`
            : "translateX(0)",
          transition:
            "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {currentImages.map((image, index) => {
          // Calculate grid span based on image format
          const colSpan = image.cols || 1;
          const rowSpan = image.rows || 1;

          return (
            <div
              key={index}
              className={`relative cursor-pointer transition-transform hover:scale-[1.02] ${
                colSpan === 2 ? "col-span-2" : colSpan === 3 ? "col-span-3" : ""
              } ${rowSpan === 2 ? "row-span-2" : ""}`}
              onClick={() => openModal(image)}
              style={{
                gridColumn: `span ${colSpan}`,
                gridRow: `span ${rowSpan}`,
              }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  aspectRatio:
                    image.format === "portrait"
                      ? "2/3"
                      : image.format === "landscape"
                        ? "3/2"
                        : image.format === "wide-portrait"
                          ? "16/6"
                          : image.format === "wide"
                            ? "16/9"
                            : "1/1",
                }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Pagination */}
      <div className="flex items-center justify-center mt-8 md:mt-10">
        <div className="flex items-center bg-gray-100 rounded-full p-1 shadow-sm">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0 || isAnimating}
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentPage === 0 || isAnimating
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-white hover:shadow-md"
            } transition-all duration-300`}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center px-2 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && currentPage !== index) {
                    setAnimationDirection(
                      index > currentPage ? "next" : "prev"
                    );
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentPage(index);
                    }, 300);
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "bg-black scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1 || isAnimating}
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentPage === totalPages - 1 || isAnimating
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-white hover:shadow-md"
            } transition-all duration-300`}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <span className="text-sm text-gray-500 ml-3 font-medium">
          {currentPage + 1} / {totalPages}
        </span>
      </div>

      {/* Image Modal */}
      <GalleryModal
        open={modalOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
      />
    </div>
  );
}
