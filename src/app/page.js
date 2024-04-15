'use client'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroContainer from "@/components/HeroContainer";
import Submenu from "@/components/Submenu";
import About from "@/components/About";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from 'react';
import Loader from "./loader";



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Логика загрузки данных или других действий
    // Здесь можно использовать, например, setTimeout для имитации загрузки
    setTimeout(() => {
      setLoading(false); // Устанавливаем loading в false, когда загрузка завершена
    }, 2000); // Имитация загрузки в течение 2 секунд
  }, []);

  return (
    <div>
      {loading ? <Loader /> : (
      <main className="flex flex-col justify-between mx-auto overflow-hidden dark:bg-darkThemeBg">
        <Header />
        <Hero />
        <Submenu />
        <HeroContainer />
        <About />
        <Footer />
      </main>
      )}
    </div>
  );
}
