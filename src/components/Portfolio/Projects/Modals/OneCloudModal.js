import React, { forwardRef, useImperativeHandle, useState } from "react";
//CSS
import "./Modal.css";
//Framer-Motion
import { motion, AnimatePresence } from "framer-motion";
//Modal-Image
import OneCloudModalImage from "../../../../images/onecloudlogo.png";
//Material-UI
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
//Material-UI-Icons
import LanguageIcon from "@mui/icons-material/Language";
import CancelIcon from "@mui/icons-material/Cancel";
import GitHubIcon from "@mui/icons-material/GitHub";

const OneCloudModal = forwardRef((props, ref) => {
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
                  src={OneCloudModalImage}
                  className='ModalImage'
                  alt='ModalImage'
                />
              </div>
              <div className='modalTitle'>
                <h1>One Cloud Media</h1>
              </div>
              <div className='modalText'>
                <p>
                  I designed and coded this mock up website using React Js. The
                  website is fully mobile responsive and makes use of some fancy
                  animations which I created using the GSAP animation library
                </p>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    target='_blank'
                    href='https://github.com/binithekid/onecloudmedia'
                    variant='contained'
                    startIcon={<GitHubIcon />}
                    className='leftIcon'
                    size='small'>
                    GitHub
                  </Button>
                  <Button
                    target='_blank'
                    href='https://vigilant-clarke-d73484.netlify.app/'
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

export default OneCloudModal;
