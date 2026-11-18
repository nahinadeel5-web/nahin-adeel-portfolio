import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nahin Adeel | Developer Portfolio",
  description:
    "Portfolio of Nahin Adeel — an IT student and developer building useful web applications and digital tools.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
