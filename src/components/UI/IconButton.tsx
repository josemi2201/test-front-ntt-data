import React from 'react'
import MuiIconButton from '@mui/material/IconButton'
import { Badge, Tooltip, useTheme } from '@mui/material'
import Icon from '@mdi/react'
import PropTypes from 'prop-types'

export const IconButton = (props) => {

  const {
    icon, 
    size = 1, 
    color, 
    haveBadge = false, 
    badgeContent = 0, 
    colorBadge,
    tooltip = "",
    onClick,
  } = props

  const { palette: { primary } } = useTheme()

  const iconColor = color ? color : primary.contrastText
  const newColorBadge = colorBadge ? colorBadge : "secondary"

  console.log(newColorBadge);

  return (
    <Tooltip
      title={tooltip}
    >
      <MuiIconButton
        onClick={onClick} 
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
    </Tooltip>
  )
}


IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  haveBadge: PropTypes.bool,
  badgeContent: PropTypes.number,
  colorBadge: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
  tooltip: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}