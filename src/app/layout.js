import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agile Poker",
  description: "Покер планирование для Agile-команд",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content='/img/badge.png' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
