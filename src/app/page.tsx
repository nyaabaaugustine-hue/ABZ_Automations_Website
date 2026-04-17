
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { ProductTicker } from "@/components/home/ProductTicker";
import { About } from "@/components/home/About";
import { Comparison } from "@/components/home/Comparison";
import { Products } from "@/components/home/Products";
import { Services } from "@/components/home/Services";
import { Brochure } from "@/components/home/Brochure";
import { News } from "@/components/home/News";
import { Team } from "@/components/home/Team";
import { Reviews } from "@/components/home/Reviews";
import { Map } from "@/components/home/Map";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <ProductTicker />
        <About />
        <Comparison />
        <Products />
        <Services />
        <Brochure />
        <News />
        <Team />
        <Reviews />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
