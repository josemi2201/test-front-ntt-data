import { Box, Typography } from "@mui/material";
import React from "react";

const DEFAULT_MESSAGE = "Not Found";

export const NotFound = () => {

  return (
    <Box
      sx={sx.cont}
    >
      <Typography
        variant="h1"
      >
        {DEFAULT_MESSAGE}
      </Typography>
    </Box>
  );

};


const sx = {
  cont: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center"
  }
};


