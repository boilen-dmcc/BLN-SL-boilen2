import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { About } from "@/sections/About";
import { Capabilities } from "@/sections/Capabilities";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";

export const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Capabilities />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
