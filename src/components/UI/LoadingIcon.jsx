import { mdiLoading } from "@mdi/js";
import { Icon } from "@mdi/react";
import { Box, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const DEFAULT_SPIN = 0.7;
const DEFAULT_SIZE = 1;

export const LoadingIcon = ({spin = DEFAULT_SPIN, size = DEFAULT_SIZE}) => {

  const { palette: {secondary}} = useTheme();

  return (
    <Box
      sx={sx.cont}
    >
      <Icon
        path={mdiLoading}
        size={size}
        color={secondary.main}
        spin={spin}

      />
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

LoadingIcon.propTypes = {
  size: PropTypes.number,
  spin: PropTypes.number
};
