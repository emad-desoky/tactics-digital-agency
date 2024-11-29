import "./globals.css";

export const metadata = {
  title: "Tactics Digital Agency",
  description: "ALL-DIGITAL SERVICES.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
