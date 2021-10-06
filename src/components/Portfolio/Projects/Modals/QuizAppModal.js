import React, { forwardRef, useImperativeHandle, useState } from "react";
//CSS
import "./Modal.css";
//Framer-Motion
import { motion, AnimatePresence } from "framer-motion";
//Modal-Image
import QuizImageModal from "../../../../images/quiz.png";
//Material-UI
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
//Material-UI-Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import CancelIcon from "@mui/icons-material/Cancel";

const QuizAppModal = forwardRef((props, ref) => {
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
                  src={QuizImageModal}
                  className='ModalImage'
                  alt='ModalImage'
                />
              </div>
              <div className='modalTitle'>
                <h1>General Knowledge Quiz</h1>
              </div>
              <div className='modalText'>
                <p>
                  A quiz app I created that fetches questions from an API before
                  displaying the questions to the user. The user can keep track
                  of their score also, which is stored in local storage
                </p>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    target='_blank'
                    href='https://github.com/binithekid/typescriptquiz/tree/master'
                    variant='contained'
                    startIcon={<GitHubIcon />}
                    className='leftIcon'
                    size='small'>
                    GitHub
                  </Button>
                  <Button
                    target='_blank'
                    href='https://eloquent-mcnulty-e223a6.netlify.app/'
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

export default QuizAppModal;
