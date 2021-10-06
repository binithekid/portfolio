import React, { forwardRef, useImperativeHandle, useState } from "react";
//CSS
import "./Modal.css";
//Framer-Motion
import { motion, AnimatePresence } from "framer-motion";
//Modal-Image
import NoteBookImage from "../../../../images/notebook.png";
//Material-UI
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
//Material-UI-Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import CancelIcon from "@mui/icons-material/Cancel";

const NotesAppModal = forwardRef((props, ref) => {
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
                  src={NoteBookImage}
                  className='ModalImage'
                  alt='ModalImage'
                />
              </div>
              <div className='modalTitle'>
                <h1>Note Book App</h1>
              </div>
              <div className='modalText'>
                <p>
                  A simple note app which allows the user to create and store
                  new notes which can be deleted once the task has been
                  completed. This app makes use of local storage to store the
                  data that's been input
                </p>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    target='_blank'
                    href='https://github.com/binithekid/notes-app/tree/master'
                    variant='contained'
                    startIcon={<GitHubIcon />}
                    className='leftIcon'
                    size='small'>
                    GitHub
                  </Button>
                  <Button
                    target='_blank'
                    href='https://relaxed-franklin-5c2872.netlify.app/'
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

export default NotesAppModal;
