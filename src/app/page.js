
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroContainer from "@/components/HeroContainer";
import Submenu from "@/components/Submenu";

export default function Home() {
  return (
    <main className="flex flex-col justify-between mx-auto">
      <Header/>
      <Hero />
      <Submenu />
      <HeroContainer />
    </main>
  );
}
