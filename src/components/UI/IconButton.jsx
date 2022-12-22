import { Icon } from "@mdi/react";
import { Badge, Box, Tooltip, useTheme } from "@mui/material";
import MuiIconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import React from "react";

const DEFAULT_SIZE = 1;
const DEFAULT_BADGE = 0;

export const IconButton = (props) => {

  const {
    badgeContent,
    color,
    colorBadge,
    haveBadge,
    icon,
    onClick,
    size,
    tooltip = ""
  } = props;

  const { palette: { primary } } = useTheme();

  const iconColor = color
    ? color
    : primary.contrastText;

  return (
    <Tooltip
      title={tooltip}
    >
      <Box>
        <MuiIconButton
          disabled={!onClick}
          onClick={(event) => onClick && onClick(event)}
        >
          <Badge
            badgeContent={badgeContent}
            color={colorBadge}
            invisible={!haveBadge}
            showZero
          >
            <Icon
              color={iconColor}
              path={icon}
              size={size}
            />
          </Badge>
        </MuiIconButton>
      </Box>
    </Tooltip>
  );

};

IconButton.propTypes = {
  badgeContent: PropTypes.number,
  color: PropTypes.string,
  colorBadge: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning"
  ]),
  haveBadge: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number,
  tooltip: PropTypes.string
};

IconButton.defaultProps = {
  badgeContent: DEFAULT_BADGE,
  color: "",
  colorBadge: "secondary",
  haveBadge: false,
  onClick: null,
  size: DEFAULT_SIZE,
  tooltip: ""
};
