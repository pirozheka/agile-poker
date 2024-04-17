'use client'
import { useState } from "react";



const Tabbar = () => {

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="tablet:hidden flex fixed z-10 bottom-0 h-[90px] w-screen border-y-[2px] text-mainText border-t-mainText dark:border-t-darkBtnHover bg-background dark:bg-darkThemeBg dark:text-darkBtnHover">
      <button
        className={`flex relative  ${activeTab === 1 ? 'before:block before:absolute before:left-[1px] before:bg-mainText dark:before:bg-darkBtnHover before:w-full before:h-[8px] before:-inset-[8px] before:rounded-t-lg' : ''} w-1/4 h-full`}
        onClick={() => setActiveTab(1)}
      >
        <span className={`absolute flex flex-col inset-x-0 top-[8px] justify-center items-center ${activeTab === 1 ? 'opacity-100' : 'opacity-50'}`}>
          <img src="/img/icon_home.svg" className="w-[22.5] h-[19.5] dark:hidden" alt="" ></img>
          <img src="/img/home.svg" className="w-[22.5] h-[19.5] hidden dark:block" alt="" ></img>
          <span className='text-xs mt-1'>Главная</span>
        </span>

      </button>

      <button
        className={`flex relative  ${activeTab === 2 ? 'before:block before:absolute before:left-[1px] before:bg-mainText dark:before:bg-darkBtnHover before:w-full before:h-[8px] before:-inset-[8px] before:rounded-t-lg' : ''} w-1/4 h-full`}
        onClick={() => setActiveTab(2)}
      >
        <span className={`absolute flex flex-col inset-x-0 top-[8px] justify-center items-center ${activeTab === 2 ? 'opacity-100' : 'opacity-50'}`}>
          <img src="/img/icon_game.svg" className="w-[22.5] h-[19.5] dark:hidden" alt="" ></img>
          <img src="/img/game.svg" className="w-[22.5] h-[19.5] hidden dark:block" alt="" ></img>
          <span className='text-xs mt-1'>Игра</span>
        </span>
      </button>

      <button
        className={`flex relative  ${activeTab === 3 ? 'before:block before:absolute before:left-[0.5px] before:bg-mainText dark:before:bg-darkBtnHover before:w-full before:h-[8px] before:-inset-[8px] before:rounded-t-lg' : ''} w-1/4 h-full`}
        onClick={() => setActiveTab(3)}
      >
        <span className={`absolute flex flex-col inset-x-0 top-[8px] justify-center items-center ${activeTab === 3 ? 'opacity-100' : 'opacity-50'}`}>
          <img src="/img/icon_story.svg" className="w-[22.5] h-[19.5] dark:hidden" alt="" ></img>
          <img src="/img/story.svg" className="w-[22.5] h-[19.5] hidden dark:block" alt="" ></img>
          <span className='text-xs mt-1'>Комнаты</span>
        </span>
      </button>

      <button
        className={`flex relative  ${activeTab === 4 ? 'before:block before:absolute before:left-[0.5px] before:bg-mainText dark:before:bg-darkBtnHover before:w-full before:h-[8px] before:-inset-[8px] before:rounded-t-lg' : ''} w-1/4 h-full`}
        onClick={() => setActiveTab(4)}
      >
        <span className={`absolute flex flex-col inset-x-0 top-[8px] justify-center items-center ${activeTab === 4 ? 'opacity-100' : 'opacity-50'}`}>
          <img src="/img/icon_profile.svg" className="w-[22.5] h-[19.5] dark:hidden" alt="" ></img>
          <img src="/img/profile.svg" className="w-[22.5] h-[19.5] hidden dark:block" alt="" ></img>
          <span className='text-xs mt-1'>Профиль</span>
        </span>
      </button>
    </div>
  );
};

export default Tabbar;