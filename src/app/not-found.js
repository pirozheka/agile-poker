
import { Button } from "../components/ui/button";
import Link from 'next/link'
import React from "react"; 
import './notf.css';


export default function NotFound() {
    return (
        <div id="container object-center">

            <div className=" tablet:hidden bg-white">
            <div><img src="/img/404short2.gif" alt=""></img>
            <div class="submenu3_2 text-4xl">
            <Link href="/" passHref><Button className="text-main tracking-wide dark:text-darkThemeText text-sm pl-2 laptop:ml-2 tablet:text-base laptop:text-2xl hover:underline laptop:hover:text-decoration-solid">Вернуться на главную страницу</Button></Link>
            </div></div>
            </div>
            <div className='relative hidden tablet:block'>
            <div class="im_er_0"><img src="/img/веревка.svg" alt=""></img></div>
            <div class="im_er_1"><img src="/img/карта_лицо_4.svg" alt=""></img></div>
            <div class="im_er_2"><img src="/img/карта_лицо_0.svg" alt=""></img></div>
            <div class="im_er_3"><img src="/img/прищепка_ор.svg" alt=""></img></div>
            <div class="im_er_4"><img src="/img/прищепка_сер.svg" alt=""></img></div>
            <div class="im_er_5"><img src="/img/прищепка_сер.svg" alt=""></img></div>
            <div class="im_er_6"><img src="/img/прищепка_ор.svg" alt=""></img></div>
            <div class="im_er_7"><img src="/img/карта_лицо_4.svg" alt=""></img></div>
            <div class="submenu3_1 text-4xl"><h1>Ой-ой, страница не нашлась, <br />наверное в другой колоде</h1>
            <Link href="/" passHref><Button className="text-main tracking-wide dark:text-darkThemeText text-sm pl-0 laptop:ml-2 tablet:text-base laptop:text-2xl hover:underline laptop:hover:text-decoration-solid">Вернуться на главную страницу</Button></Link>
            </div></div>

        </div>
    )
}