import { Box, Typography } from "@mui/material";
import React from "react";

export const NotFound = () => {

  return (
    <Box
      sx={sx.cont}
    >
      <Typography
        variant="h1"
      >
        Not Found
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


