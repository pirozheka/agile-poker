'use client'
import Link from 'next/link';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true' // преобразуем строку в булево значение
  );

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('isDarkMode', newDarkMode);
  };

 

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);


  return (
    <header className='container fixed tablet:relative top-0 z-50 border-b-2 rounded-b-xl bg-background border-mainText tablet:border-none border-solid dark:bg-darkThemeBg'> 
        <nav className='flex justify-between items-center mt-3 tablet:mt-6 laptop:mt-8  '>
          <Link href="/">
            <img
              src="/img/zt-poker-logo-3.svg" 
              className='ml-0 block dark:hidden w-12 tablet:w-14 laptop:w-16' 
            ></img>
            <img
              src="/img/dark-poker-logo.svg" 
              className='ml-0 hidden dark:block w-12 tablet:w-14 laptop:w-16' 
            />
          </Link>
          <div className='flex justify-between items-center gap-3'>
            <Switch className="dark:bg-darkThemeText" id="dark-mode" checked={isDarkMode} onClick={toggleDarkMode}/>
            <Label htmlFor="dark-mode" className="hidden tablet:block">Темная тема</Label>
            <Label htmlFor="dark-mode" className="tablet:hidden dark:hidden"><img src="/img/carbon_moon.svg" alt="" /></Label>
            <Label htmlFor="dark-mode" className="hidden tablet:hidden dark:block tablet:dark:hidden"><img src="/img/dark_moon.svg" alt="" /></Label>
          </div>
        </nav>
    </header>
  );
};

export default Header;