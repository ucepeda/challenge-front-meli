import React from "react";
import { Container, LinearProgress } from '@mui/material'


const Loading = () => {
  return (
    <Container sx={{ width: "100%", height: "100%" }}>
     <LinearProgress />
    </Container> 
  );
};

export default Loading;
