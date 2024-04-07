import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div>
    <div className="mt-24">
        <h2>Покер планирование для Agile-команд</h2>
        <ul className="mt-10 pl-8">
            <li className="mt-5 pl-5 before:block relative before:w-2 before:h-2 before:rounded-lg before:bg-main before:absolute before:inset-y-0 before:left-0 before:top-2">Быстро и просто</li>
            <li className="mt-5 pl-5 before:block relative before:w-2 before:h-2 before:rounded-lg before:bg-main before:absolute before:inset-y-0 before:left-0 before:top-2">Без разногласий в команде</li>
        </ul>
        <div className="flex flex-col max-w-md mt-16">
            <Button className="bg-secondary text-white">Быстрая игра</Button>
            <div className="flex justify-between">
                <Button className="text-main pl-0">Зарегистрироваться</Button>
                <Button className="text-main pr-0">Войти</Button>
            </div>
        </div>
    </div>
    <div class="im2">
    
    </div>
</div>
  );
};

export default Hero;