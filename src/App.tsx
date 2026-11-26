import { MotionConfig } from "framer-motion";
import { LangProvider } from "./i18n/LangContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Work from "./components/Work";
import Offers from "./components/Offers";
import Process from "./components/Process";
import TechProjects from "./components/TechProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

export default function App() {
  return (
    <LangProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-[#0a0f1e] text-white">
          <Navbar />
          <main>
            <Hero />
            <Why />
            <Work />
            <Offers />
            <Process />
            <TechProjects />
            <Contact />
          </main>
          <Footer />
          <WhatsAppFab />
        </div>
      </MotionConfig>
    </LangProvider>
  );
}
