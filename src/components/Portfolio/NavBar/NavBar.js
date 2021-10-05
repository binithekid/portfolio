import React from "react";
//Material UI
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import { useMediaQuery, useTheme } from "@material-ui/core";
//CSS
import "./NavBar.css";
//Images
import ReactLogo from "../../../images/reactlogo.svg.png";
//Scroll
import { Link } from "react-scroll";

function NavBar() {
  const theme = useTheme();
  const xtraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth='lg'>
      <AppBar
        position='static'
        style={{
          background: "transparent",
          boxShadow: "none",
          marginTop: "1rem",
        }}>
        <Toolbar>
          {xtraSmall ? (
            <Drawer />
          ) : (
            <>
              <div className='holder' style={{ flexGrow: "1" }}>
                {small ? (
                  <a href='/'>
                    <img
                      src={ReactLogo}
                      alt='weblogo'
                      style={{
                        marginTop: "45px",
                        marginLeft: "-2px",
                        maxWidth: "20%",
                        height: "auto",
                        display: "block",
                      }}
                      edge='start'
                      color='inherit'
                      aria-label='menu'
                    />
                  </a>
                ) : (
                  <a href='/'>
                    <img
                      src={ReactLogo}
                      alt='weblogo'
                      style={{
                        marginTop: "1.5rem",
                        marginLeft: "-15px",
                        maxWidth: "6%",
                        height: "auto",
                        display: "block",
                      }}
                      edge='start'
                      color='inherit'
                      ari
                      a-label='menu'
                    />
                  </a>
                )}
              </div>
              <Link
                to='about'
                style={{ textDecoration: "none" }}
                className='menuHover'
                smooth={true}
                duration={1000}>
                <Typography style={{ color: "black" }} className='menuItems'>
                  about
                </Typography>
              </Link>
              <Link
                to='projects'
                style={{ textDecoration: "none" }}
                className='menuHover'
                smooth={true}
                duration={1000}>
                <Typography style={{ color: "black" }} className='menuItems'>
                  projects
                </Typography>
              </Link>
              <Link
                to='technologies'
                style={{ textDecoration: "none" }}
                className='menuHover'
                smooth={true}
                duration={2000}>
                <Typography style={{ color: "black" }} className='menuItems'>
                  technologies
                </Typography>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default NavBar;
