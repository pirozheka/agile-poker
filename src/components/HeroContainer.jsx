
import PokerCards from "./PokerCards";

const HeroContainer = () => {
  return (
    <div className="bg-main -mt-10 dark:bg-darkThemebgmain1 text-white ml-0" style={{width: 100 + 'vw'}}>
        <h2 className="text-center text-4xl tracking-wider mt-28 font-semibold ">Только planning poker <br/>ничего лишнего</h2>
        <PokerCards />

    </div>

  );
};

export default HeroContainer;