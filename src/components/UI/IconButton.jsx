import { Icon } from '@mdi/react'
import { Badge, Box, Tooltip, useTheme } from '@mui/material'
import MuiIconButton from '@mui/material/IconButton'
import PropTypes from 'prop-types'
import React from 'react'

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

  return (
    <Tooltip
      title={tooltip}
    >
      <Box>
        <MuiIconButton
          onClick={(e) => onClick && onClick(e)}
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
  onClick: PropTypes.func,
}