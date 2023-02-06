import React from "react";
import { Grid } from '@mui/material'
import  { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <Grid container direction="row">
      <Grid item alignItems="center">
        <ThreeDots
          type="ThreeDots"
          color="black"
          height={100}
          width={100}
          timeout={3000}
        />
      </Grid>
    </Grid>
  );
};

export default Loading;
