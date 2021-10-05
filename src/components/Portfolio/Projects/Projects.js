import React, { useRef } from "react";
//CSS
import "./Projects.css";
//Material-UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//Cards
import OneCloudMedia from "./Cards/OneCloudMedia";
import CovidTracker from "./Cards/CovidTracker";
import NotesApp from "./Cards/NotesApp";
import QuizApp from "./Cards/QuizApp";
//Modals
import OneCloudModal from "./Modals/OneCloudModal";
import CovidTrackerModal from "./Modals/CovidTrackerModal";
import NotesAppModal from "./Modals/NotesAppModal";
import QuizAppModal from "./Modals/QuizAppModal";

function Projects() {
  const modalRef = useRef();
  const modalRefTwo = useRef();
  const modalRefThree = useRef();
  const modalRefFour = useRef();

  return (
    <Container maxWidth='lg' id='projects'>
      <div className='divider' style={{ height: "1rem" }} />

      <div className='aboutIntro'>
        <p className='aboutTitle'>Projects 🚀</p>
        <hr className='hrline' />
      </div>
      <div className='projectGrid'>
        <Grid container spacing={8}>
          <Grid item md={6} xs={12} sm={12}>
            <p>
              <p className='aboutText'>
                Please find below a number of recent projects that I have been
                working on using React JS
              </p>
            </p>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        <br />
      </div>
      <div className='projectGrid'>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <div onClick={() => modalRef.current.open()}>
              <OneCloudMedia />
            </div>
            <OneCloudModal ref={modalRef} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div onClick={() => modalRefTwo.current.open()}>
              <CovidTracker />
            </div>
            <CovidTrackerModal ref={modalRefTwo} />
          </Grid>
        </Grid>
      </div>
      <div className='divider' style={{ height: "6rem" }} />
      <div className='projectGrid'>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <div onClick={() => modalRefThree.current.open()}>
              <NotesApp />
            </div>
            <NotesAppModal ref={modalRefThree} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div onClick={() => modalRefFour.current.open()}>
              <QuizApp />
            </div>
            <QuizAppModal ref={modalRefFour} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Projects;
