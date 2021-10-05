import React from "react";
//CSS
import "./Cards.css";
//Material-UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
//Image
import NoteBookImage from "../../../../images/notebook.png";

const useStyles = makeStyles({
  fontTitile: {
    fontFamily: "Quicksand",
    fontSize: "1.3rem",
    fontWeight: "600",
  },
  font: {
    fontFamily: "Quicksand",
  },
});

function NotesApp() {
  const classes = useStyles();
  return (
    <div>
      <Card className='cardStyle' elevation={0}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='240'
          image={NoteBookImage}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h1'
            component='div'
            className={classes.fontTitile}>
            Note Book App
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            className={classes.font}>
            A simple note app which allows the user to create and store new
            notes which can be deleted once the task has been completed. This
            app makes use of local storage to store the data that's been input
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' className='buttonCenter'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default NotesApp;
