import React from "react";
//CSS
import "./Footer.css";
//Material-UI
import Container from "@mui/material/Container";
//React-Icons
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <p className='footer'>Where to find me:</p>
      <div className='footerblock'>
        <span className='footerIcon'>
          <a href='mailto: bini.tek1@gmail.com'>
            <AiOutlineMail size='2rem' style={{ color: "black" }} />
          </a>
        </span>
        <span className='footerIcons'>
          <a href='https://github.com/binithekid'>
            <AiFillGithub size='2rem' style={{ color: "black" }} />
          </a>
        </span>
        <br /> <br />
        <br /> <br />
        <br />
      </div>
    </Container>
  );
};

export default Footer;
