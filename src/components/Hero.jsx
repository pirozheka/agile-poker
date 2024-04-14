import { Button } from "./ui/button";
import Cards from "./header-cards/Cards";

const Hero = () => {
  return (
    <div  className="mt-28 flex justify-between relative container" >
      <div>
        <h2 className="text-6xl font-semibold text-mainText dark:text-darkThemeText">Покер планирование <br/>для Agile-команд</h2>
        <ul className="mt-10 pl-8">
            <li className="text-lg mt-10 pl-5 list-disc text-mainText dark:text-darkThemeText">Быстро и просто</li>
            <li className="text-lg mt-5 pl-5 list-disc text-mainText dark:text-darkThemeText">Без разногласий в команде</li>
        </ul>
        <div className="flex flex-col max-w-md mt-20">
            <Button className="bg-secondary text-xl text-white w-421 h-14 rounded-xl hover:bg-btnHover">Быстрая игра</Button>
            <div className="flex justify-around mt-9 w-421">
                <Button className="text-main dark:text-darkThemeText  text-lg mlhover:underline hover:text-decoration-solid">Зарегистрироваться</Button>
                <Button className="text-main dark:text-darkThemeText before:content-['|'] before:absolute before: -left-8 text-lg pr-0 hover:underline relative hover:text-decoration-solid">Войти</Button>
            </div>
        </div>  
      </div >
        <Cards />
    </div>
  );
};

export default Hero;