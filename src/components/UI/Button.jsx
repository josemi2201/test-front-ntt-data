import { Icon } from "@mdi/react";
import { useTheme } from "@mui/material";
import MuiButton from "@mui/material/Button";
import PropTypes from "prop-types";
import React from "react";
import { LoadingIcon } from "./LoadingIcon";

export const Button = (props) => {

  const {
    color = "primary",
    icon = "",
    isLoading = false,
    onClick,
    text = "",
    type = "button",
    variant = "contained"
  } = props;

  const { palette: { primary } } = useTheme();

  return (
    <MuiButton
      type={type}
      variant={variant}
      color={color}
      startIcon={
        isLoading
          ? <LoadingIcon />
          : <Icon path={icon} size={1} />
      }
      onClick={(event) => onClick && onClick(event)}
      sx={{
        "&:hover": {
          "& .MuiButton-startIcon path": {
            fill: `${primary.main} !important`
          },
          backgroundColor: "secondary.main",
          color: "secondary.contrastText"
        },
        boxShadow: 4,
        fontWeight: "bold"
      }}
      disabled={isLoading}
    >
      {text}
    </MuiButton>
  );

};

Button.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
    "inherit"
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "button",
    "submit"
  ]),
  variant: PropTypes.oneOf([
    "contained",
    "outlined",
    "text"
  ])
};
