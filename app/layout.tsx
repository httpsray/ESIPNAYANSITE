import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-SIPNAYAN - Download",
  description: "Download E-SIPNAYAN - Learn geometry through traditional Filipino games. Master area and surface area concepts with Mathpiko, Tumbang Preso, and Luksong Baka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
