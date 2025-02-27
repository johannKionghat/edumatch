import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduMatch",
  description: "La plateforme qui connecte les étudiants et les professionnels",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
