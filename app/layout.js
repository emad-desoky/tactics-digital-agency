import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "Tactics Digital Agency",
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
      },
      {
        url: "/opengraph-image.jpg",
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/twitter-image.jpg",
        width: 1200,
        height: 630,
      },
      {
        url: "/twitter-image.jpg",
        width: 400,
        height: 400,
      },
      {
        url: "/twitter-image.jpg",
        width: 1024,
        height: 1024,
      },
      {
        url: "/twitter-image.jpg",
        width: 512,
        height: 512,
      },
      {
        url: "/twitter-image.jpg",
        width: 256,
        height: 256,
      },
      {
        url: "/twitter-image.jpg",
        width: 128,
        height: 128,
      },
      {
        url: "/twitter-image.jpg",
        width: 64,
        height: 64,
      },
      {
        url: "/twitter-image.jpg",
        width: 32,
        height: 32,
      },
    ],
  },
  apple: {
    images: [
      {
        url: "/apple-image.jpg",
        width: 1200,
        height: 630,
      },
      {
        url: "/apple-image.jpg",
        width: 400,
        height: 400,
      },
      {
        url: "/twitter-image.jpg",
        width: 1024,
        height: 1024,
      },
      {
        url: "/twitter-image.jpg",
        width: 512,
        height: 512,
      },
      {
        url: "/twitter-image.jpg",
        width: 256,
        height: 256,
      },
      {
        url: "/twitter-image.jpg",
        width: 128,
        height: 128,
      },
      {
        url: "/twitter-image.jpg",
        width: 64,
        height: 64,
      },
      {
        url: "/twitter-image.jpg",
        width: 32,
        height: 32,
      },
    ],
  },
  description: "Welcome to TACTICS DIGITAL AGENCY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
