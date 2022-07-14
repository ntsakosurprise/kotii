import React from "react";
import { Grid } from "@mui/material";
import SplitView from "../SplitView";

export default () => {
  return (
    <SplitView>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}></Grid>
    </SplitView>
  );
};
