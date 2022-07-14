import * as React from "react";
import { Container } from "@mui/material";
import { Grid, CssBaseline } from "@mui/material";

const MUIContainer = ({ children }) => {
  return (
    <Container>
      <Grid container direction="row" spacing={6}>
        {children}
      </Grid>
    </Container>
  );
};

export default MUIContainer;
