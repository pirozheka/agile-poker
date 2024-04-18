import { Button } from "./ui/button";
import AboutCards from "./about-cards/AboutCards";
import ScrollSlider from "./ScrollSlider";


const About = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex relative container mt-10 lg:mt-40" >
      <div className='relative hidden tablet:block' >
        <div className="w-80">
          <AboutCards />
        </div>
        </div>
        <div className="tablet:pl-28 pl-0 tablet:ml-32 max-w-80 tablet:max-w-full  text-mainText tracking-wide font-normal text-xl  tablet:text-lg  mobile:font-thin dark:text-darkThemeText">
        <h2 className="text-mainText tracking-wider font-semibold text-xl text-[30px] lg:text-[40px] dark:text-darkThemeText">О наc</h2>
          <div className="text-base tablet:text-lg mobile:text-sm">
          <p className='mt-10'>Привет! Мы надеемся, вам понравится наш продукт!</p>
          <p>Мы хотели сделать что-то удобное, так как сами работаем в командах <br /> и понимаем, с какими противоречиями можно столкнуться </p>
          <p>Скоро мы добавим много новых фич и возможность подписки. </p></div>
          <ScrollSlider />
          <div className="flex tablet:gap-10 mobile:gap-2 pb-24 mt-8">
            <Button className="block tablet:hidden text-main text-sm tracking-wide pl-0 hover:underline hover:text-decoration-solid dark:text-darkThemeText">Подробнее о команде</Button>
            <Button className="hidden tablet:block text-main text-xl tracking-wide pl-0 hover:underline hover:text-decoration-solid dark:text-darkThemeText">Почитать о нашей команде</Button>
            <div className="h-10 w-0.5 bg-divider dark:bg-darkThemeText"></div>
            <Button className="text-main tablet:text-xl mobile:text-sm pr-0 tracking-wide hover:underline hover:text-decoration-solid dark:text-darkThemeText">Написать нам 
            <div className='hidden tablet:block ml-0 '><img className="ml-5 dark:hidden" src="/icons/send.svg"></img><img className="ml-5 hidden dark:block" src="/icons/send_dark.svg"></img></div>
            </Button>
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default About;