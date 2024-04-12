import PokerCard from "./poker-cards/PokerCard";
const PokerCards = () => {
    
    return (
      <div className="flex justify-around container place-content-center mt-20 pb-28">
          <PokerCard 
            key='1'
            img = '/img/slide01.svg'
            title='Начни игру'
            descr={`либо зарегистрируйся,\n чтобы сохранить оценки`}
            width={234}
            height={200}          
        />
        <PokerCard 
            key='2'
            img = '/img/slide02.svg'
            title='Пригласи команду'
            descr={`удобным способом \n в одно нажатие`}   
            width={234}
            height={200}       
        />
        <PokerCard 
            key='3'
            img = '/img/slide03.svg'
            title='Голосуй'
            descr={`будь продуктивным,\n обсуждай`}   
            width={234}
            height={200}       
        />
      </div>
    );
  };
  
  export default PokerCards;