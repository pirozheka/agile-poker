import { Button } from "./ui/button";
import Cards from "./header-cards/Cards";

const Hero = () => {
  return (
    <div  className="mt-24 flex justify-between relative" >
      <div>
        <h2 className="text-2xl font-semibold">Покер планирование для Agile-команд</h2>
        <ul className="mt-10 pl-8">
            <li className="text-lg mt-5 pl-5 before:block relative before:w-2 before:h-2 before:rounded-lg before:bg-main before:absolute before:inset-y-0 before:left-0 before:top-2">Быстро и просто</li>
            <li className="text-lg mt-5 pl-5 before:block relative before:w-2 before:h-2 before:rounded-lg before:bg-main before:absolute before:inset-y-0 before:left-0 before:top-2">Без разногласий в команде</li>
        </ul>
        <div className="flex flex-col max-w-md mt-16">
            <Button className="bg-secondary text-xl text-white max-w-62 h-14 rounded-xl">Быстрая игра</Button>
            <div className="flex justify-between">
                <Button className="text-main text-lg pl-0">Зарегистрироваться</Button>
                <Button className="text-main text-lg pr-0">Войти</Button>
            </div>
        </div>  
      </div >
        <Cards />
    </div>
  );
};

export default Hero;