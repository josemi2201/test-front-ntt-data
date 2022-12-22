import { AppBar, Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { HeaderActions } from "./HeaderActions";
import { HeaderNavigation } from "./HeaderNavigation";

export const Header = ({children}) => {

  return (
    <Box
      sx={sx.header}
    >
      <AppBar
        component="nav"
        position="static"
        sx={sx.appbar}
      >
        <HeaderNavigation />
        <HeaderActions />
      </AppBar>
      <Box
        component="main"
        sx={sx.main}
      >
        {children}
      </Box>
    </Box>
  );

};

const sx = {
  appbar: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 8px"
  },
  header: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  main: {
    backgroundColor: "background.default"
  }
};

Header.propTypes = {
  children: PropTypes.node.isRequired
};

