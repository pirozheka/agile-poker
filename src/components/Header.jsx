'use client'
import Link from 'next/link';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);


  return (
    <header className='container border-b-2 rounded-2xl border-mainText tablet:border-none'> 
        <nav className='flex justify-between items-center mt-3 tablet:mt-6 laptop:mt-8'>
          <Link href="/">
            <img
              src="/img/zt-poker-logo-3.svg" 
              width={64}
              height={64}
              className='ml-0 block dark:hidden' 
            />
            <img
              src="/img/dark-poker-logo.svg" 
              width={64}
              height={64}
              className='ml-0 hidden dark:block' 
            />
          </Link>
          <div className='flex justify-between items-center gap-3'>
            <Switch className="dark:bg-darkThemeText" id="dark-mode" checked={isDarkMode} onClick={toggleDarkMode}/>
            <Label htmlFor="dark-mode" className="hidden tablet:block">Темная тема</Label>
            <Label htmlFor="dark-mode" className="tablet:hidden"><img src="/img/carbon_moon.svg" alt="" /></Label>
          </div>
        </nav>
    </header>
  );
};

export default Header;