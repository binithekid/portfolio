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
import ShoppingCart from "../../../../images/shoppingcart.png";

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
          image={ShoppingCart}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h1'
            component='div'
            className={classes.fontTitile}>
            Shopping Cart
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            className={classes.font}>
            A simple shopping cart app which allows the user to add and remove
            products from the cart. This app was made using TypeScript and React
            and is fully mobile responsive
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
