
import PokerCards from "./PokerCards";

const HeroContainer = () => {
  return (
    <div className="bg-main -mt-10 dark:bg-darkThemebgmain1 text-white ml-0 z-10" 
      style={{width: 100 + 'vw'} 
    }>
        <h2 className="text-center text-2xl tablet:text-3xl laptop:text-4xl tracking-wider mt-9 tablet:mt-16 laptop:mt-28 font-semibold ">Только planning poker <br/>ничего лишнего</h2>
        <PokerCards />

    </div>

  );
};

export default HeroContainer;