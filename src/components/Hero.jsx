import { Button } from "./ui/button";
import Cards from "./header-cards/Cards";

const Hero = () => {
  return (
    <div className="mt-8 laptop:mt-28 flex justify-between relative container" >
      <div>
        <h2 className="text-3xl tablet:text-4xl laptop:text-[56px] tracking-wide leading-9 tablet:leading-[46px] laptop:leading-[68px] font-semibold text-mainText dark:text-darkThemeText">Покер планирование <br />для Agile-команд</h2>
        <ul className="mt-2.5 laptop:mt-10 pl-4 laptop:pl-8">
          <li className="text-lg laptop:text-[28px] tracking-wide laptop:mt-10 list-disc text-mainText dark:text-darkThemeText">Быстро и просто</li>
          <li className="text-lg laptop:text-[28px] tracking-wide list-disc text-mainText dark:text-darkThemeText">Без разногласий в команде</li>
        </ul>
        <div className='w-screen mt-9 h-64 overflow-hidden tablet:hidden'>
          <img src="/img/comp_screen_1_mob_light.svg" alt="" className="w-full h-full transform translate-x-14 translate-y-4 scale-125" />
        </div>
        <div className="flex flex-col w-80 content-center justify-between laptop:max-w-md mt-12 laptop:mt-20 pb-20 tablet:pb-0">
          <Button className="bg-secondary dark:bg-darkbutton text-sm w-full laptop:text-[28px] font-medium text-white m-auto laptop:w-421 h-12 laptop:h-24 rounded-lg laptop:rounded-3xl hover:bg-btnHover dark:hover:bg-darkBtnHover dark:text-darkButtonText ">Быстрая игра</Button>
          <div className="flex flex-row justify-between laptop:gap-2 -ml-3 tablet:ml-0 mt-6 laptop:mt-9">
            <Button className="text-main tracking-wide dark:text-darkThemeText text-sm laptop:text-2xl hover:underline hover:text-decoration-solid">Зарегистрироваться</Button>
            <div className="hidden tablet:block h-10 w-0.5 bg-divider dark:bg-darkThemeText"></div>
            <Button className="text-main tracking-wide dark:text-darkThemeText text-sm laptop:text-2xl pr-0 hover:underline relative hover:text-decoration-solid">Войти</Button>
          </div>
        </div>
      </div >
      <Cards />
    </div>
  );
};

export default Hero;