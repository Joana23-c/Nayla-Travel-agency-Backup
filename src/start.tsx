import { useState } from "react";

import Hero from "./Hero.tsx";
import Section1 from './Section1.tsx'
import Header from './Header.tsx';
import MobileMenu from './mobileMenu.tsx';
import Footer from './footer.tsx';
import Section2 from './section2.tsx';
import Section4 from './section4.tsx';
import CTA from './cta.tsx';
import "./start.css"

export default function Start() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <MobileMenu  
        isOpen={isOpen}
        closeMenu={() => setIsOpen(false)} />

        <Header openMenu={() => setIsOpen(true)}/>
        <Hero />
        <Section1 />
        <Section2 />
        <Section4 />
        <CTA />
        <Footer/>
      </div>
    </>
  );
}
