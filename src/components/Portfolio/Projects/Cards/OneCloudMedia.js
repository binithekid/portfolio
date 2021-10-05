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
import OneCloud from "../../../../images/onecloudlogo.png";

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

function OneCloudMedia() {
  const classes = useStyles();
  return (
    <div>
      <Card className='cardStyle' elevation={0}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='240'
          image={OneCloud}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h1'
            component='div'
            className={classes.fontTitile}>
            One Cloud Media
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            className={classes.font}>
            I designed and coded this mock up website using React Js. The
            website is fully mobile responsive and makes use of some fancy
            animations which I created using the GSAP animation library
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

export default OneCloudMedia;
