import * as React from "react";
import Container from "@mui/material";
import Grid from "@mui/material";

const MUIContainer = () => {
  return (
    <Container container spacing={2}>
      <Grid>{children}</Grid>
    </Container>
  );
};

export default MUIContainer;
