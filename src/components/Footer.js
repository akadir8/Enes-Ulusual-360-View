import React from "react";
import { Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid container className="font-nunito ms-3 text-white" style={{ width: "100%" }}>
      <Typography variant="body2" fontWeight="bold" align="left">
        Copyright © 2023 Ubn-Jr. All Right Reserved
      </Typography>
    </Grid>
  );
}
export default Footer;
