import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { fadeIn } from "../variant";
import Image from "../assets/asset2.png";

function Banner() {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div>
              <h1 className="font-secondary text-[36px] uppercase">
                Enes <span>Ulusal</span>
              </h1>
              <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
                <TypeAnimation
                  sequence={["360° Çekim", 2000, "Fotoğraf", 2000]}
                  speed={50}
                  className="text-white"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="hidden lg:flex flex-1 max-w-[380px] float-right"
            >
              <img src={Image} alt="" />
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Banner;
