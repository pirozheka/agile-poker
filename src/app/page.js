
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-8 mx-auto max-w-screen-2xl">
      <Header/>
      <Hero />
    </main>
  );
}
