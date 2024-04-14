import { Button } from "./ui/button";
import Cards from "./header-cards/Cards";

const Hero = () => {
  return (
    <div className="mt-28 flex justify-between relative container" >
      <div>
        <h2 className="text-[56px] tracking-wide leading-[68px] font-semibold text-mainText dark:text-darkThemeText">Покер планирование <br />для Agile-команд</h2>
        <ul className="mt-10 pl-8">
          <li className="text-[28px] tracking-wide mt-10  list-disc text-mainText dark:text-darkThemeText">Быстро и просто</li>
          <li className="text-[28px] tracking-wide list-disc text-mainText dark:text-darkThemeText">Без разногласий в команде</li>
        </ul>
        <div className="flex flex-col max-w-md mt-20">
          <Button className="bg-secondary dark:bg-darkbutton text-[28px] font-medium text-white w-421 h-24 rounded-3xl hover:bg-btnHover dark:hover:bg-darkBtnHover dark:text-darkButtonText ">Быстрая игра</Button>
          <div className="flex gap-2 mt-9">
            <Button className="text-main tracking-wide dark:text-darkThemeText text-2xl hover:underline hover:text-decoration-solid">Зарегистрироваться</Button>
            <div className="h-10 w-0.5 bg-divider dark:bg-darkThemeText"></div>
            <Button className="text-main tracking-wide dark:text-darkThemeText text-2xl pr-0 hover:underline relative hover:text-decoration-solid">Войти</Button>
          </div>
        </div>
      </div >
      <Cards />
    </div>
  );
};

export default Hero;