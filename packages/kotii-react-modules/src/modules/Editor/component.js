/* eslint-disable react/display-name */
import { Grid } from "@mui/material";
import React from "react";
import { SplitView } from "UI";

export default () => {
  return (
    <SplitView>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}></Grid>
    </SplitView>
  );
};
