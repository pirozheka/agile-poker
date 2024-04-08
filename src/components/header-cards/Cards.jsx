
import './cards.css';
import Image from 'next/image';

const Cards = () => {
  return (
    <div className=''>
        <Image src="/img/Card_01.svg" alt="" className='im1 rotate9'  width ={100} height ={100} />
        <Image src="/img/Card_01.svg" alt="" className="im2 rotate7" width ={100} height ={100}/>
        <Image src="/img/Card_02.svg" alt="" width ={100} height ={100} className="im3"/>
        <Image src="/img/Card_03.svg" alt="" className="rotate7 im4" width ={100} height ={100}/>
        <Image src="/img/hand1.svg" alt="" className="hand-01" width ={100} height ={100}/>
        <Image src="/img/hand2.svg" alt="" className="hand-02" width ={100} height ={100}/>
    </div>
  );
};

export default Cards;