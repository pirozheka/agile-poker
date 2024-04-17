import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";


const ScrollSlider = () => {
    return (
      <div className=" tablet:hidden">
        <ScrollArea className="w-96 whitespace-nowrap ">
            <div className="flex w-max space-x-2 mt-7 p-4"> 
                <Image src="/img/scrollcard1.svg" width={159} height={108}/>
                <Image src="/img/scrollcard2.svg" width={159} height={108}/>
                <Image src="/img/scrollcard3.svg" width={159} height={108}/>
                <Image src="/img/scrollcard4.svg" width={159} height={108}/>
                <Image src="/img/scrollcard5.svg" width={159} height={108}/>
                <Image src="/img/scrollcard6.svg" width={159} height={108}/>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    );
  };
  
  export default ScrollSlider;