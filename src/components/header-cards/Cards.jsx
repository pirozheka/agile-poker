'use client'
import { useRef } from "react";

import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

import './cards.css';
import Image from 'next/image';

gsap.registerPlugin(useGSAP);


const Cards = () => {
  const container = useRef();

  //Анимация карточки синей
  useGSAP(() => {
    
    gsap.fromTo(".im3", {
      y: -580,
      visibility: 'hidden',
    },
      {
        y: 0,
        visibility: 'visible',
        duration: 1.5,
        delay: 1.5
      })
      ;
  }, { scope: container });

  //Анимация карточки желтой
  useGSAP(() => {
  
    gsap.fromTo(".im4", {
      visibility: 'hidden',
      x: 800,
    },
      {
        x: 0,
        visibility: 'visible',
        duration: 1.5,
      })
      ;
  }, { scope: container })

  
//Анимация руки синей
useGSAP(() => {
  // Создаем временную шкалу
  const tl = gsap.timeline({
    onStart: function() {
      // Делаем элемент видимым в начале анимации
      gsap.set(".hand-01", { visibility: "visible" });
    }
  });

  // Анимация появления
  tl.from(".hand-01", {
    x: 800,
    opacity: 1,
    duration: 1.5,
  });

  // Анимация возвращения в исходное положение
  tl.to(".hand-01", {
    x: 700,
    opacity: 1,
    duration: 1.4
  });
}, { scope: container });

//Анимация руки желтой
  useGSAP(() => {
    // Создаем временную шкалу
    const tl = gsap.timeline({
      onStart: function() {
        // Делаем элемент видимым в начале анимации
        gsap.set(".hand-02", { visibility: "visible", top: '-700px'});
      }
    });

    // Анимация появления
    tl.from(".hand-02", {
      y: -700,
      opacity: 1,
      duration: 1.5,
      delay: 1.3
    });
  
    // Анимация возвращения в исходное положение
    tl.to(".hand-02", {
      y: -700,
      opacity: 1,
      duration: 1.6,
      visibility: 'visible',

    });
  }, { scope: container });

  return (
    <div ref={container} className=''>
      <div className='ml-0 block dark:hidden'><Image src="/img/card-off.svg" alt="" className='im1 rotate9' width={184} height={276} /></div>
      <div className='ml-0 hidden dark:block'><Image src="/img/карта_рубашка_dark.svg" alt="" className='im1 rotate9' width={184} height={276} /></div>
      <div className='ml-0 block dark:hidden'><Image src="/img/card-off.svg" alt="" className="im2 rotate7" width={184} height={276} /></div>
      <div className='ml-0 hidden dark:block'><Image src="/img/карта_рубашка_dark.svg" alt="" className="im2 rotate7" width={184} height={276} /></div>
      <div className='ml-0 block dark:hidden'><Image src="/img/card02.svg" alt="" width={184} height={276} className='im3' /></div>
      <div className='ml-0 hidden dark:block'><Image src="/img/карта_лицо1_dark.svg" alt="" width={184} height={276} className='im3' /></div>
      <div className='ml-0 block dark:hidden'><Image src="/img/card01.svg" alt="" className="im4" width={184} height={100} /></div>
      <div className='ml-0 hidden dark:block'><Image src="/img/карта_лицо2_dark.svg" alt="" className="im4" width={184} height={100} /></div>
      <Image src="/img/hand-frame01.svg" alt="" className="hand-01" width={134} height={528} />
      <Image src="/img/hand-frame02.svg" alt="" className="hand-02" width={118} height={505} />
    </div>
  );
};

export default Cards;