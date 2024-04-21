import { Button } from "./ui/button";
import AboutCards from "./about-cards/AboutCards";
import ScrollSlider from "./ScrollSlider";


const About = () => {
  return (<div>
    {/* блок для ПК */}
<div className="relative hidden tablet:block"> {/* Отключение блока при мобильном отображении */}
<div className="overflow-hidden"> {/* Скрытие контента за краем блока */}
<div className="flex relative container mt-10 laptop:mt-32" > {/* Контейнер используется для ПК*/}
<div className="w-80">
 <AboutCards />{/* анимация карт О нас */}
</div>
<div className="tablet:pl-28 pl-0 tablet:ml-32 max-w-80 tablet:max-w-full  text-mainText tracking-wide font-normal text-xl  tablet:text-lg  mobile:font-thin dark:text-darkThemeText">
<h2 className="text-mainText tracking-wider font-semibold text-xl text-[30px] lg:text-[40px] dark:text-darkThemeText">О наc</h2>
<p className='mt-6'>Привет! Мы надеемся, вам понравится наш продукт.</p>
<p>Мы хотели сделать что-то удобное, так как сами работаем <br />в командах и понимаем, с какими противоречиями можно </p> 
<p>столкнуться. Скоро мы добавим много новых фич <br /> и возможность подписки. </p>
<div className="flex tablet:gap-10 pb-24 mt-8"> {/* Форматирование положение кнопок, кнопки*/}
<Button className="hidden tablet:block text-main text-xl tracking-wide pl-0 hover:underline hover:text-decoration-solid dark:text-darkThemeText">Почитать о нашей команде</Button>
<div className="h-10 w-0.5 bg-divider dark:bg-darkThemeText"></div>
<Button className="text-main tablet:text-xl mobile:text-sm pr-0 tracking-wide hover:underline hover:text-decoration-solid dark:text-darkThemeText">Написать нам 
<div className='hidden tablet:block ml-0 '><img className="ml-5 dark:hidden" src="/icons/send.svg"></img><img className="ml-5 hidden dark:block" src="/icons/send_dark.svg"></img></div>
</Button></div>
</div>
</div>
</div>
</div>
{/* блок для мобильного */}
<div className="text-sm tablet:hidden"> {/* Отключение блока при ПК отображении */}
<div className="tablet:pl-28 pl-8 tablet:ml-64 mt-12 max-w-80 tablet:max-w-full  text-mainText tracking-wide font-normal text-sm  tablet:text-lg  mobile:font-thin dark:text-darkThemeText">
<h2 className="text-mainText tracking-wider font-semibold text-xl dark:text-darkThemeText">О наc</h2>
<p className='mt-6'>Привет! Мы надеемся, вам понравится наш продукт!
Мы хотели сделать что-то удобное, так как сами работаем в командах и понимаем, с какими противоречиями можно столкнуться 
Скоро мы добавим много новых фич и возможность подписки. </p></div>
<ScrollSlider /> {/* Скроллер карт О нас*/}
<div className="flex tablet:gap-10 mobile:gap-2 pb-24 mt-4 ml-8">  {/* Форматирование положение кнопок, кнопки*/}
<Button className="text-main text-sm tracking-wide pl-0 hover:underline hover:text-decoration-solid dark:text-darkThemeText">Подробнее о команде</Button>
<Button className="text-main tablet:text-xl text-sm pr-0 tracking-wide hover:underline hover:text-decoration-solid dark:text-darkThemeText">Написать нам 
</Button>
</div>
</div>
</div>
  );
};

export default About;