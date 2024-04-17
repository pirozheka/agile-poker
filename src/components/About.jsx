import { Button } from "./ui/button";
import AboutCards from "./about-cards/AboutCards";
import ScrollSlider from "./ScrollSlider";


const About = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex relative container mt-44" >
        <div className="w-80">
          <AboutCards />
        </div>
        <div className="pl-28 ml-32 text-mainText tracking-wide font-normal text-xl dark:text-darkThemeText">
        <h2 className="text-mainText tracking-wider font-semibold text-[40px] dark:text-darkThemeText">О наc</h2>
          <p className='mt-10'>Привет! Мы надеемся, вам понравится наш продукт!</p>
          <p>Мы хотели сделать что-то удобное, так как сами работаем в командах <br /> и понимаем, с какими противоречиями можно столкнуться </p>
          <p>Скоро мы добавим много новых фич и возможность подписки. </p>
          <ScrollSlider />
          <div className="flex gap-14 pb-24 mt-12">
            <Button className="hidden tablet:block text-main text-xl tracking-wide pl-0 hover:underline hover:text-decoration-solid dark:text-darkThemeText">Подробнее о команде</Button>
            <Button className="block tablet:hidden text-main text-xl tracking-wide pl-0 hover:underline hover:text-decoration-solid dark:text-darkThemeText">Почитать о нашей команде</Button>
            <div className="h-10 w-0.5 bg-divider dark:bg-darkThemeText"></div>
            <Button className="text-main text-xl pr-0 tracking-wide hover:underline hover:text-decoration-solid dark:text-darkThemeText">Написать нам 
            <div className='hidden tablet:block ml-0 '><img className="ml-5 dark:hidden" src="/icons/send.svg"></img><img className="ml-5 hidden dark:block" src="/icons/send_dark.svg"></img></div>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;