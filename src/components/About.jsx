import { Button } from "./ui/button";
import AboutCards from "./about-cards/AboutCards";

const About = () => {
  return (
    <div className="overflow-hidden">
      <h2 className="text-center text-mainText font-semibold text-4xl mt-24 dark:text-darkThemeText">О наc</h2>
      <div className="flex relative container mt-20" >
        <div className="w-80">
          <AboutCards />
        </div>
        <div className=" pl-24 ml-20 text-mainText font-normal text-xl dark:text-darkThemeText">
          <p>Привет! Мы надеемся, вам понравится наш продукт!</p>
          <p className="mt-4">Мы хотели сделать что-то удобное, так как сами работаем в командах <br /> и понимаем, с какими противоречиями можно столкнуться </p>
          <p className="mt-4">Скоро мы добавим много новых фич и возможность подписки </p>
          <p className="mt-4">Будем рады услышать ваши впечатления и пожелания в нашем ТГ))) </p>
          <div className="flex gap-14 pb-24 mt-16">
            <Button className="text-main text-lg pl-0 hover:underline hover:text-decoration-solid dark:text-darkThemeText">Почитать о нашей команде</Button>
            <div className="h-10 w-0.5 bg-divider dark:bg-darkThemeText"></div>
            {/* Здесь нужно добавить белый самолет для темной темы */ }
            <Button className="text-main text-lg pr-0 hover:underline hover:text-decoration-solid dark:text-darkThemeText">Написать нам <img className="ml-5" src="/icons/send.svg"></img></Button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;