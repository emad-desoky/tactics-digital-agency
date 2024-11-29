import "./globals.css";

export const metadata = {
  title: "Tactics Digital Agency",
  description: "ALL-DIGITAL SERVICES.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
