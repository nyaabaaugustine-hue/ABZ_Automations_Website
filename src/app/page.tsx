
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { About } from "@/components/home/About";
import { Products } from "@/components/home/Products";
import { Services } from "@/components/home/Services";
import { Team } from "@/components/home/Team";
import { Map } from "@/components/home/Map";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Products />
        <Services />
        <Team />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
