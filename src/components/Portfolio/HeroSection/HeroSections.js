import React from "react";
//CSS
import "./HeroSection.css";
//Material UI
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
//React-Scroll
import { Link } from "react-scroll";
//Framer-Motion
import { motion } from "framer-motion";

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const products = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 1,
    },
  },
};

function HeroSection() {
  let data = localStorage.getItem("name");
  return (
    <Container maxWidth='lg'>
      <div className='titleGroup'>
        <motion.p variants={title} className='HeroTitle'>
          Hello <em>{data},</em>
        </motion.p>
        <motion.p variants={products} className='HeroTitle'>
          {"&"} Welcome To My Portfolio!
        </motion.p>
      </div>
      <br />
      <Link to='about' smooth={true} duration={1000}>
        <Button className='buttonInputTwo' variant='outlined'>
          Learn More
        </Button>
      </Link>
    </Container>
  );
}

export default HeroSection;
