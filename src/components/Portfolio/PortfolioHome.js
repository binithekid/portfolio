import React from "react";
//Components
import NavBar from "./NavBar/NavBar";
import HeroSection from "./HeroSection/HeroSections";
import About from "./About/About";
import Technologies from "./Technologies/Technologies";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
//CSS
import "./PortfolioHome.css";
//Framer-Motion
import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

function PortfolioHome() {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      <motion.div
        className='relative z-50 w-full bg-black'
        initial='initial'
        animate='animate'
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      />

      <div>
        <NavBar />
        <HeroSection />
        <div className='divider' style={{ height: "13rem" }} />
        <About />
        <Projects />
        <div className='divider' style={{ height: "10rem" }} />
        <Technologies />
        <div className='divider' style={{ height: "2rem" }} />
        <Footer />
      </div>
    </div>
  );
}

export default PortfolioHome;
