import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";
import { Container, Grid } from "@mui/material";

function Nav() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-10">
      <Container maxWidth="sm" className="mx-auto">
        <Grid container className="w-full bg-black/20 h-[86px] backdrop-blur-2xl rounded-full max-w-[350px] mx-auto px-5 text-2xl text-white/50" alignItems="center" justifyContent="space-between">
          <Grid item className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <Link to="home" activeClass="active" smooth={true} spy={true} offset={-200}>
              <BiHomeAlt />
            </Link>
          </Grid>
          <Grid item className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <Link to="about" activeClass="active" smooth={true} spy={true} offset={-200}>
              <BiUser />
            </Link>
          </Grid>
          <Grid item className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <Link to="contact" activeClass="active" smooth={true} spy={true} offset={-200}>
              <BsChatSquareText />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
}
export default Nav;
