import React from "react";
import { Grid, Typography } from '@mui/material'
import PropTypes from "prop-types";

const Message = ({ message }) => {
  return (
      <Grid container direction="row">
        <Typography alignItems="center">{message}</Typography>
      </Grid>
  );
};

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;