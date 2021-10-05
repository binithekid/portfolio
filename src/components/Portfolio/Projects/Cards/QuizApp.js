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
import QuizImage from "../../../../images/quiz.png";

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

function QuizApp() {
  const classes = useStyles();
  return (
    <div>
      <Card className='cardStyle' elevation={0}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='240'
          image={QuizImage}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h1'
            component='div'
            className={classes.fontTitile}>
            General Knowledge Quiz
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            className={classes.font}>
            A quiz app I created that fetches questions from an API before
            displaying the questions to the user. The user can keep track of
            their score also, which is stored in local storage
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

export default QuizApp;
