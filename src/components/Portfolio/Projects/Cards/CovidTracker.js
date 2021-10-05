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
import CovidTrackerImage from "../../../../images/covidtracker.png";

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

function CovidTracker() {
  const classes = useStyles();
  return (
    <div>
      <Card className='cardStyle' elevation={0}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='240'
          image={CovidTrackerImage}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h1'
            component='div'
            className={classes.fontTitile}>
            Covid-19 Tracker
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            className={classes.font}>
            This web app that I created makes use of an API that keeps track of
            the amount of Covid-19 cases worldwide. I fetched this data before
            displaying it in user-friendly graphs.
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

export default CovidTracker;
