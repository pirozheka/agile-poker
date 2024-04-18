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
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Agile Poker" />
      <meta property="og:description" content="Покер-планирование для Agile команд" />
      <meta property="og:url" content="https://agile-poker-ten.vercel.app/" />
      <meta property="og:image" content="https://agile-poker-ten.vercel.app/img/badge.png" />
      <meta property="og:site_name" content="Agile Poker" />
      <meta property="og:locale" content="ru_RU" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
