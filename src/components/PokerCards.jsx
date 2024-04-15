import PokerCard from "./poker-cards/PokerCard";
const PokerCards = () => {
    
    return (
      <div className="flex justify-around tracking-wide container place-content-center mt-20 pb-28">
          <div className='ml-0 block dark:hidden'>
            <PokerCard 
            key='1'
            img = '/img/slide_01.svg'
            title='Начни игру'
            descr={`либо зарегистрируйся,\n чтобы сохранить оценки`}
            width={234}
            height={200}          
        /></div>
        <div className='ml-0 hidden dark:block'>
        <PokerCard 
            key='1'
            img = '/img/slide01_dark.svg'
            title='Начни игру'
            descr={`либо зарегистрируйся,\n чтобы сохранить оценки`}
            width={234}
            height={200}          
        />
        </div>
        <div className='ml-0 block dark:hidden'>
        <PokerCard 
            key='2'
            img = '/img/slide02.svg'
            title='Пригласи команду'
            descr={`удобным способом \n в одно нажатие`}   
            width={234}
            height={200}       
        /></div>
        <div className='ml-0 hidden dark:block'>
        <PokerCard 
            key='2'
            img = '/img/slide02_dark.svg'
            title='Пригласи команду'
            descr={`удобным способом \n в одно нажатие`}   
            width={234}
            height={200}       
        />
        </div>
        <div className='ml-0 block dark:hidden'>
        <PokerCard 
            key='3'
            img = '/img/slide03.svg'
            title='Голосуй'
            descr={`будь продуктивным,\n обсуждай`}   
            width={234}
            height={200}       
        /></div>
        <div className='ml-0 hidden dark:block'>
        <PokerCard 
            key='3'
            img = '/img/slide03_dark.svg'
            title='Голосуй'
            descr={`будь продуктивным,\n обсуждай`}   
            width={234}
            height={200}       
        />
        </div>
      </div>
    );
  };
  
  export default PokerCards;