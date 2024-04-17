import { Button } from "./ui/button";
import Cards from "./header-cards/Cards";
import CardsMob from "./header-cards/CardsMob";
import { Separator } from "@/components/ui/separator";


const Hero = () => {
  return (
    <div className="mt-8 laptop:mt-28 flex justify-between relative container" >
      <div>
        <h2 className="text-3xl tablet:text-4xl laptop:text-[56px] tracking-wide leading-9 tablet:leading-[46px] laptop:leading-[68px] font-semibold text-mainText dark:text-darkThemeText">Покер планирование <br />для Agile-команд</h2>
        <ul className="mt-2.5 laptop:mt-10 pl-4 laptop:pl-8">
          <li className="text-lg laptop:text-[28px] tracking-wide laptop:mt-10 list-disc text-mainText dark:text-darkThemeText">Быстро и просто</li>
          <li className="text-lg laptop:text-[28px] tracking-wide list-disc text-mainText dark:text-darkThemeText">Без разногласий в команде</li>
        </ul>
       
        <img src="/img/comp_screen_1_mob_light.svg" alt="" className="w-screen mt-2 h-64 overflow-hidden tablet:hidden transform translate-x-20 translate-y-5 scale-125" />
        
        <div className="flex flex-col w-12/12 laptop:max-w-md mt-12 laptop:mt-20 pb-20 tablet:pb-0">
          <Button className="bg-secondary dark:bg-darkbutton text-sm w-full tablet:w-72 laptop:text-[28px] font-medium text-white m-auto tablet:ml-0 laptop:m-auto laptop:w-421 h-12 laptop:h-24 rounded-lg laptop:rounded-3xl hover:bg-btnHover dark:hover:bg-darkBtnHover dark:text-darkButtonText ">Быстрая игра</Button>
          <div className="flex flex-row w-full tablet:w-72 justify-between gap-0 laptop:gap-2 mt-6 tablet:mt-5 laptop:mt-9">
            <Button className="text-main tracking-wide dark:text-darkThemeText text-sm pl-0 laptop:ml-4 laptop:text-2xl hover:underline laptop:hover:text-decoration-solid">Зарегистрироваться</Button>
            <Separator className="hidden tablet:block tablet:ml-8 tablet:h-7 w-0.5 mt-1 bg-divider dark:bg-darkThemeText"/>
            <Button className="text-main tracking-wide dark:text-darkThemeText text-sm laptop:text-2xl pr-0 hover:underline relative hover:text-decoration-solid">Войти</Button>
          </div>
        </div>
      </div >
      <Cards />
      <CardsMob/>
    </div>
  );
};

export default Hero;