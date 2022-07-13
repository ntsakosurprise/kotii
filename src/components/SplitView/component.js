import React from "react";
import { Grid, Grid } from "@mui/material";

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
