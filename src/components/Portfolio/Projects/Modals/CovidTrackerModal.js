import React, { forwardRef, useImperativeHandle, useState } from "react";
//CSS
import "./Modal.css";
//Framer-Motion
import { motion, AnimatePresence } from "framer-motion";
//Modal-Image
import CovidModalImage from "../../../../images/covidtracker.png";
//Material-UI
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
//Material-UI-Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import CancelIcon from "@mui/icons-material/Cancel";

const CovidTrackerModal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  console.log(open);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className='modal-backdrop'
          />
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: "linear",
              type: "spring",
              stiffness: 100,
            }}
            exit={{ opacity: 0, y: 200 }}
            className='modal-content-wrapper'>
            <motion.div className='modal-content'>
              <div className='modalImage'>
                <img
                  src={CovidModalImage}
                  className='ModalImage'
                  alt='ModalImage'
                />
              </div>
              <div className='modalTitle'>
                <h1>Covid-19 Tracker</h1>
              </div>
              <div className='modalText'>
                <p>
                  This web app that I created makes use of an API that keeps
                  track of the amount of Covid-19 cases worldwide. I fetched
                  this data before displaying it in user-friendly graphs.
                </p>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    target='_blank'
                    href='https://github.com/binithekid/covidtracker/tree/master'
                    variant='contained'
                    startIcon={<GitHubIcon />}
                    className='leftIcon'
                    size='small'>
                    GitHub
                  </Button>
                  <Button
                    target='_blank'
                    href='https://cranky-benz-0d3592.netlify.app/'
                    variant='contained'
                    startIcon={<LanguageIcon />}
                    className='rightIconInside'
                    size='small'>
                    LINK
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant='contained'
                    startIcon={<CancelIcon />}
                    className='rightIcon'
                    size='small'
                    onClick={() => setOpen(false)}>
                    CLOSE
                  </Button>
                </Grid>
              </Grid>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default CovidTrackerModal;
