/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Grid } from "@mui/material";
import React from "react";

const splitContainerStyles = {
  width: "20%",
};
export default () => {
  // const getWindows = () => {};

  return (
    <Container>
      <Grid container direction="row" spacing={6}>
        {children}
      </Grid>
    </Container>
  );
};
