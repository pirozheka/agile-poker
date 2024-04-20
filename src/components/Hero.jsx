import { Button } from "./ui/button";
import Cards from "./header-cards/Cards";
import CardsMob from "./header-cards/CardsMob";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


const Hero = () => {


  return (
    <div className="mt-8 tablet:mt-14 laptop:mt-28 flex justify-between relative container" >
      <div>
        <h2 className="text-[28px] tablet:text-[38px] laptop:text-[56px] tracking-wide leading-9 tablet:leading-[46px] laptop:leading-[68px] font-semibold text-mainText dark:text-darkThemeText">Покер планирование <br />для Agile-команд</h2>
        <ul className="mt-2.5 tablet:mt-8 laptop:mt-10 pl-4 laptop:pl-8">
          <li className="text-lg laptop:text-[28px] font-light tablet:font-normal tracking-wide laptop:mt-10 list-disc text-mainText dark:text-darkThemeText">Быстро и просто</li>
          <li className="text-lg laptop:text-[28px] font-light tablet:font-normal tracking-wide list-disc text-mainText dark:text-darkThemeText">Без разногласий в команде</li>
        </ul>

        <img src="/img/comp_screen_1_mob_light.svg" alt="" className="w-screen mt-2 h-64 overflow-hidden tablet:hidden transform translate-x-20 translate-y-5 scale-150" />

        <div className="flex flex-col w-12/12 laptop:max-w-md mt-12 tablet:mt-16 laptop:mt-20 pb-20 tablet:pb-0">
          <Button className="bg-secondary dark:bg-darkbutton text-sm w-full tablet:w-80 tablet:text-[20px] laptop:text-[28px] font-medium text-white m-auto tablet:ml-0 laptop:m-auto laptop:w-421 h-12 tablet:h-14 laptop:h-24 rounded-xl tablet:rounded-2xl laptop:rounded-3xl hover:bg-btnHover dark:hover:bg-darkBtnHover dark:text-darkButtonText ">Быстрая игра</Button>

          <div className="flex flex-row w-full tablet:w-80 pt-0 justify-between gap-0 laptop:gap-2 mt-6 tablet:mt-4 laptop:mt-9 p-1">
            <Dialog className='p-[24px] w-80 '>
              <DialogTrigger>
                <Button className="text-main tracking-wide dark:text-darkThemeText text-sm pl-0 laptop:ml-3 tablet:text-base laptop:text-2xl hover:underline laptop:hover:text-decoration-solid">Зарегистрироваться</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className='text-lg text-mainText dark:text-diaOverlay'>Регистрация</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col mt-2 gap-2">
                  <div>
                    <Label htmlFor="name" className='text-sm text-mainText dark:text-diaOverlay'>
                      Имя
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ваше имя"
                      className='border-diaBorder dark:border-diaOverlay border-[1px] text-opacity-10 mt-1.5 dark:text-diaOverlay'
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className='text-sm text-mainText dark:text-diaOverlay'>
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      placeholder="example@mail.ru"
                      className='border-diaBorder dark:border-diaOverlay border-[1px] text-opacity-10 mt-1.5 dark:text-diaOverlay'
                    />
                  </div>
                  <div>
                    <Label htmlFor="pass" className='text-sm text-mainText dark:text-diaOverlay'>
                      Пароль
                    </Label>
                    <Input
                      id="pass"
                      type='password'
                      placeholder="Придумайте пароль"
                      className='border-diaBorder dark:border-diaOverlay border-[1px] text-opacity-10 mt-1.5 dark:text-diaOverlay'
                    />
                  </div>
                </div>
                <DialogFooter className='mt-6'>
                  <Button type="submit" className='text-sm h-10 text-white bg-main w-full hover:bg-opacity-80 dark:bg-darkThemebgmain1'>Зарегистрироваться</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            
            <Separator className="hidden tablet:block tablet:ml-8 tablet:h-7 w-0.5 mt-1 bg-divider dark:bg-darkThemeText" />
            
            <Dialog className='p-[24px] w-80 '>
              <DialogTrigger>
                <Button className="text-main tracking-wide dark:text-darkThemeText text-sm tablet:text-base laptop:text-2xl pr-0 hover:underline relative hover:text-decoration-solid">Войти</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className='text-lg text-mainText dark:text-diaOverlay'>Вход</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col mt-2 gap-2">
                  <div>
                  <Label htmlFor="email" className='text-sm text-mainText dark:text-diaOverlay'>
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      placeholder="example@mail.ru"
                      className='border-diaBorder dark:border-diaOverlay border-[1px] text-opacity-10 mt-1.5 dark:text-darkDiaOverlay'
                    />
                  </div>
                  <div>
                  <Label htmlFor="pass" className='text-sm text-mainText dark:text-diaOverlay'>
                      Пароль
                    </Label>
                    <Input
                      id="pass"
                      type='password'
                      placeholder="Введите пароль"
                      className='border-diaBorder dark:border-diaOverlay border-[1px] text-opacity-10 mt-1.5 dark:text-diaOverlay'
                    />
                  </div>
                </div>
                <DialogFooter className='mt-6'>
                  <Button type="submit" className='text-sm h-10 text-white bg-main w-full hover:bg-opacity-80 dark:bg-darkThemebgmain1'>Войти</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div >
      <Cards />
      <CardsMob />
    </div>
  );
};

export default Hero;