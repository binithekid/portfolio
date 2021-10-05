import React from "react";
//CSS
import "./CardGroup.css";
//Material-UI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CardGroup() {
  return (
    <div className='cardGroup'>
      <Grid container spacing={3}>
        <Grid item xs={4} className='cardItem'>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                style={{ marginTop: "1rem", fontFamily: "Quicksand" }}
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom>
                Gunnersbury Sixth Form
              </Typography>
              <Typography
                variant='h5'
                component='div'
                style={{
                  marginTop: "1rem",
                  fontFamily: "Quicksand",
                  fontWeight: "500",
                }}>
                A-Levels, Including Computer Science
              </Typography>

              <Typography
                variant='body2'
                style={{ marginTop: "1rem", fontFamily: "Quicksand" }}>
                Completed: June 2011
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} className='cardItem'>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                style={{ marginTop: "1rem", fontFamily: "Quicksand" }}
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom>
                Royal Holloway, University of London
              </Typography>
              <Typography
                variant='h5'
                component='div'
                style={{
                  marginTop: "1rem",
                  fontFamily: "Quicksand",
                  fontWeight: "500",
                }}>
                Bsc Criminology {"&"} Sociology Degree
              </Typography>

              <Typography
                variant='body2'
                style={{ marginTop: "1rem", fontFamily: "Quicksand" }}>
                Completed: July 2015
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} className='cardItem'>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                style={{ marginTop: "1rem", fontFamily: "Quicksand" }}
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom>
                Founders and Coders
              </Typography>
              <Typography
                variant='h5'
                component='div'
                style={{
                  marginTop: "1rem",
                  fontFamily: "Quicksand",
                  fontWeight: "500",
                }}>
                JavaScript {"&"} React Bootcamp
              </Typography>

              <Typography
                variant='body2'
                style={{ marginTop: "1rem", fontFamily: "Quicksand" }}>
                Completed: December 2018
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div className='divider' style={{ height: "6rem" }} />
    </div>
  );
}

export default CardGroup;
