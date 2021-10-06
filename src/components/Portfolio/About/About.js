import React from "react";
//Material UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
//CSS
import "./About.css";
//React-Spring
import { useSpring, animated } from "react-spring";

function About() {
  const styles = useSpring({
    loop: true,
    to: [{ opacity: 1, transform: "translate(20%,0)" }, { opacity: 0 }],
    from: { opacity: 0, transform: "translate(-20%,0)" },
  });

  return (
    <Container maxWidth='lg'>
      <div className='divider' style={{ height: "2rem" }} id='about' />

      <div className='aboutIntro'>
        <p className='aboutTitle'>About Me 👋</p>
        <hr className='hrline' />
      </div>
      <div className=''>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12} sm={12}>
            <p className='aboutText'>
              I am a front end developer with a passion for design! I have over
              5 years of hands-on experience, efficiently coding websites and
              applications using modern HTML, CSS, and JavaScript/React.
              Building state-of-the-art, easy to use, user-friendly websites and
              applications is truly a passion of mine. In addition to my
              knowledge base, I actively seek out new technologies and industry
              trends and advancements. This has allowed me to keep up to date
              with the ever changing world of code and deliver consistently
              exceptional work.
            </p>
          </Grid>
          <Grid item md={6} xs={12} sm={12}></Grid>
        </Grid>
        <div style={{ height: "2rem" }} />
        <Grid container spacing={0} className='datesGrid'>
          <Grid item md={3} xs={6} sm={6}>
            <p className='gridItem'>
              <Grid container spacing={0}>
                <Grid item md={6}>
                  2016
                </Grid>
                <Grid item md={6}>
                  <animated.div style={styles}>
                    <KeyboardArrowRightIcon className='iconArrow' />
                  </animated.div>
                </Grid>
              </Grid>
            </p>
            <p className='gridDescription'>Started my journey! </p>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <p className='gridItem'>
              <Grid container spacing={0}>
                <Grid item md={6}>
                  2017
                </Grid>
                <Grid item md={6}>
                  <animated.div style={styles}>
                    <KeyboardArrowRightIcon className='iconArrow' />
                  </animated.div>
                </Grid>
              </Grid>
            </p>
            <p className='gridDescription'>Deployed first HTML site </p>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <p className='gridItem'>
              <Grid container spacing={0}>
                <Grid item md={6}>
                  2020
                </Grid>
                <Grid item md={6}>
                  <animated.div style={styles}>
                    <KeyboardArrowRightIcon className='iconArrow' />
                  </animated.div>
                </Grid>
              </Grid>
            </p>
            <p className='gridDescription'>Mastered React JS! </p>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <p className='gridItem'>
              <Grid container spacing={0}>
                <Grid item md={6}>
                  2021
                </Grid>
                <Grid item md={6}>
                  <animated.div style={styles}>
                    <KeyboardArrowRightIcon className='iconArrow' />
                  </animated.div>
                </Grid>
              </Grid>
            </p>
            <p className='gridDescription'>Worked on real life projects </p>
          </Grid>
        </Grid>
      </div>
      <div className='divider' style={{ height: "5rem" }} />
      {/* <div className='aboutIntroo'>
        <p className='personalTitle'>Personal Achievements </p>
        <hr className='hrline' />
      </div>
      <div className='dividertwo' style={{ height: "1rem" }} />
      <div className='cardGroupTwo'>
        <CardGroup />
      </div> */}
    </Container>
  );
}

export default About;
