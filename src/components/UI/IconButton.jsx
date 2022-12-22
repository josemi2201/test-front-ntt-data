import { Icon } from "@mdi/react";
import { Badge, Box, Tooltip, useTheme } from "@mui/material";
import MuiIconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import React from "react";

const DEFAULT_SIZE = 1;
const DEFAULT_BADGE = 0;

export const IconButton = (props) => {

  const {
    badgeContent = DEFAULT_BADGE,
    color,
    colorBadge,
    haveBadge = false,
    icon,
    onClick,
    size = DEFAULT_SIZE,
    tooltip = ""
  } = props;

  const { palette: { primary } } = useTheme();

  const iconColor = color
    ? color
    : primary.contrastText;

  const newColorBadge = colorBadge
    ? colorBadge
    : "secondary";

  return (
    <Tooltip
      title={tooltip}
    >
      <Box>
        <MuiIconButton
          onClick={(event) => onClick && onClick(event)}
          disabled={!onClick}
        >
          <Badge
            invisible={!haveBadge}
            badgeContent={badgeContent}
            color={newColorBadge}
            showZero
          >
            <Icon
              path={icon}
              size={size}
              color={iconColor}
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
