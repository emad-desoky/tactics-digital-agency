"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { X } from "lucide-react";

export const HeroParallax = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const getItemsPerRow = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const itemsPerRow = getItemsPerRow();
  const rows = Array.from(
    { length: Math.ceil(products.length / itemsPerRow) },
    (_, i) => products.slice(i * itemsPerRow, i * itemsPerRow + itemsPerRow)
  );

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 400]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -400]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0 : 15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0 : 20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0 : -700, 300]),
    springConfig
  );

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px"; // Prevent layout shift
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [selectedProduct]);

  return (
    <div
      ref={ref}
      className="min-h-screen 3xl:h-[320vh] 2xl:h-[420vh] xl:h-[500vh] lg:h-[500vh] bg-[rgb(43,43,43)] py-10 md:py-20 overflow-hidden antialiased relative flex flex-col self-auto"
    >
      <Header />
      <motion.div
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateZ: isMobile ? 0 : rotateZ,
          translateY: isMobile ? 0 : translateY,
          opacity,
        }}
        className="flex flex-col gap-6 sm:gap-8 md:gap-20 px-4 sm:px-6 md:px-10 max-w-[2000px] mx-auto w-full"
      >
        {rows.map((row, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col ${
              isMobile
                ? ""
                : idx % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
            } gap-6 sm:gap-8 md:gap-10 lg:gap-20 items-center justify-center`}
          >
            {row.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                translate={
                  isMobile ? 0 : idx % 2 === 0 ? translateX : translateXReverse
                }
                onProductClick={() => setSelectedProduct(product)}
                isMobile={isMobile}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 sm:px-6 md:px-8 w-full">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-5xl md:text-7xl font-bold text-white"
      >
        Welcome To <br />
        <span className="text-[rgb(255,228,0)]">Our Services</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl text-base sm:text-lg md:text-xl mt-4 md:mt-8 text-white/80"
      >
        Reach Out To Us For Any Queries
      </motion.p>
    </div>
  );
};

const ProductCard = ({ product, translate, onProductClick, isMobile }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={
        isMobile
          ? {}
          : {
              y: -20,
              scale: 1.02,
              transition: { duration: 0.4, ease: "easeOut" },
            }
      }
      key={product.title}
      onClick={() => onProductClick(product)}
      className="group/product w-full sm:w-[400px] md:w-[350px] lg:w-[400px] xl:w-[500px] relative flex-shrink-0 aspect-[4/3] cursor-pointer"
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          alt={product.title}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-500" />
        <motion.div
          initial={false}
          animate={{ y: 0 }}
          className="absolute inset-x-0 bottom-0 p-4"
        >
          <h2
            className="text-white font-semibold text-lg sm:text-xl 
                     opacity-0 group-hover/product:opacity-100 
                     transform translate-y-4 group-hover/product:translate-y-0 
                     transition-all duration-500 ease-out"
          >
            {product.title}
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProductModal = ({ product, onClose }) => {
  const [portalContainer, setPortalContainer] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.zIndex = "50";
    document.body.appendChild(container);
    setPortalContainer(container);

    return () => {
      if (container && container.parentElement) {
        container.parentElement.removeChild(container);
      }
    };
  }, []);

  if (!portalContainer) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto overscroll-none touch-none"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[rgb(43,43,43)] rounded-xl shadow-2xl overflow-y-auto max-h-[90vh] max-w-4xl w-full mx-auto my-8 p-6 sm:p-8"
      >
        <div className="sticky top-0 bg-[rgb(43,43,43)] pt-2 pb-4 mb-4 border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[rgb(255,228,0)] pr-12">
            {product.title}
          </h2>
        </div>
        <div className="space-y-6">
          {!isMobile && (
            <div className="relative h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={product.thumbnail}
                fill
                className="object-cover"
                alt={product.title}
              />
            </div>
          )}
          <ul className="space-y-4">
            {product.description.map((item, index) => (
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="flex items-start text-white/90 hover:text-white transition-colors"
              >
                <span className="text-[rgb(255,228,0)] mr-3 mt-1.5">•</span>
                <span className="flex-1">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>,
    portalContainer
  );
};
