import React, { useState } from "react";
//CSS
import "./Input.css";
//Material UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//ReactRouter
import { Link } from "react-router-dom";
//Framer-Motion
import { motion } from "framer-motion";

function Input() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const nameSubmit = (event) => {
    event.stopPropagation();
    setSubmittedName(name);
    localStorage.setItem("name", name);
    setName("");
  };

  console.log(name);
  console.log(submittedName);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      <div className='input'>
        <h3 className='InputHeader'>Please Enter Your Name Below:</h3>
        <TextField
          fullWidth
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          id='standard-basic'
          variant='standard'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Link style={{ textDecoration: "none" }} to='/portfolio'>
          <Button
            className='buttonInput'
            variant='outlined'
            onClick={nameSubmit}>
            Submit
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Input;
