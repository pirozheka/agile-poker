import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-8">
      <Header/>
      <Hero />
    </main>
  );
}
