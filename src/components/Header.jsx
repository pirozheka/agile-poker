'use client'
import Image from 'next/image';
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
    <header className='container'> 
        <nav className='flex justify-between items-center'>
          <Link href="/">
            <img
              src="/icons/logo.png" 
              width={90}
              height={90}
              className='ml-0' 
            />
          </Link>
          <div className='flex justify-between items-center gap-3'>
            <Switch className="dark:bg-white" id="dark-mode"  checked={isDarkMode} onClick={toggleDarkMode}/>
            <Label htmlFor="dark-mode">Темная тема</Label>
          </div>
        </nav>
    </header>
  );
};

export default Header;