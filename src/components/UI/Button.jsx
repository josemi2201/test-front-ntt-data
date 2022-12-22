import { Icon } from "@mdi/react";
import { useTheme } from "@mui/material";
import MuiButton from "@mui/material/Button";
import PropTypes from "prop-types";
import React from "react";
import { LoadingIcon } from "./LoadingIcon";

export const Button = (props) => {

  const {
    color,
    icon,
    isLoading,
    onClick,
    text,
    type,
    variant
  } = props;

  const { palette: { primary } } = useTheme();

  return (
    <MuiButton
      color={color}
      disabled={isLoading}
      onClick={(event) => onClick && onClick(event)}
      startIcon={
        isLoading
          ? <LoadingIcon />
          : (
            <Icon
              path={icon}
              size={1}
            />
          )
      }
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
      type={type}
      variant={variant}
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

Button.defaultProps = {
  color: "primary",
  icon: "",
  isLoading: false,
  onClick: null,
  type: "button",
  variant: "contained"
};
