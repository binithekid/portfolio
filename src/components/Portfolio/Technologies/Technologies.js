import React from "react";
//CSS
import "./Technologies.css";
//Material-UI
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
//React-Icons
import { DiReact, DiPhotoshop, DiGithub, DiCodeigniter } from "react-icons/di";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
//Framer-Motion
import { motion } from "framer-motion";
//Logos
import ReactLogo from "../../../images/reactlogo.svg.png";
import GitLogo from "../../../images/gitng.png";
import MagicWand from "../../../images/magicwand.jpeg";
import Photoshop from "../../../images/photoshoplogo.png";

function Technologies() {
  return (
    <Container maxWidth='lg' id='technologies'>
      <div className='divider' style={{ height: "3rem" }} />
      <div style={{ marginBottom: "-4rem" }} />
      <div className='aboutIntro'>
        <p className='techTitle'>Technologies 👾</p>
        <hr className='hrline' />
      </div>
      <div className=''>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12} sm={12}>
            <p className='aboutText'>
              I am a front end developer first and foremost, and I use ReactJS
              mainly, but I also use a number of other technologies and
              frameworks that benefit my working process
            </p>
          </Grid>
          <Grid item md={6} xs={12} sm={12}></Grid>
        </Grid>
      </div>
      <Grid container spacing={15}>
        <Grid item xs={6} sm={3}>
          <motion.img
            src={ReactLogo}
            style={{ width: "3rem" }}
            className='gridIcon'
            whileHover={{ rotate: 90, scale: 1.2 }}
          />

          <h4 className='gridTitle'>Front End</h4>
          <p className='gridPara'>JavaScript</p>
          <p className='gridPara2'>ReactJs</p>
          <p className='gridPara2'>HTML/CSS</p>
        </Grid>
        <Grid item xs={6} sm={3}>
          <motion.img
            src={GitLogo}
            style={{ width: "3rem" }}
            className='gridIcon'
            whileHover={{ rotate: 180, scale: 1.2 }}
          />
          <h4 className='gridTitle'>Libraries</h4>
          <p className='gridPara2'>Redux</p>
          <p className='gridPara'>Material-UI</p>
          <p className='gridPara2'>StyledComp</p>
        </Grid>

        <Grid item xs={6} sm={3}>
          <motion.img
            src={Photoshop}
            style={{ width: "3rem" }}
            className='gridIcon'
            whileHover={{ rotate: 180, scale: 1.2 }}
          />
          <h4 className='gridTitle'>Design</h4>
          <p className='gridPara2'>Photoshop</p>
          <p className='gridPara'>Adobe XD</p>
          <p className='gridPara2'>Figma</p>
        </Grid>
        <Grid item xs={6} sm={3}>
          <motion.img
            src={MagicWand}
            style={{ width: "4rem" }}
            className='gridIcon'
            whileHover={{ rotate: 360, scale: 1.2 }}
          />
          <h4 className='gridTitle' style={{ marginTop: "0.7rem" }}>
            Animation
          </h4>
          <p className='gridPara2'>GSAP</p>
          <p className='gridPara'>Framer</p>
          <p className='gridPara2'>React-Spring</p>
        </Grid>
      </Grid>
      <br /> <br /> <br />
      <hr />
    </Container>
  );
}

export default Technologies;
