
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroContainer from "@/components/HeroContainer";
import Submenu from "@/components/Submenu";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="dark:bg-darkThemebgmain2">
    <main className="flex flex-col justify-between mx-auto overflow-hidden dark:bg-darkThemeBg">
      <Header/>
      <Hero />
      <Submenu />
      <HeroContainer />
      <About />
      <Footer />
    </main>
    </div>
  );
}
