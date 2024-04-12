import { Button } from "./ui/button";
import PokerCards from "./PokerCards";

const HeroContainer = () => {
  return (
    <div className="bg-main -mt-10 text-white ml-0" style={{width: 100 + 'vw'}}>
        <h2 className="text-center text-4xl mt-28 font-semibold">Только planning poker <br/>ничего лишнего</h2>
        <PokerCards />

    </div>

  );
};

export default HeroContainer;