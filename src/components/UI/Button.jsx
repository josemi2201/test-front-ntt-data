import { Icon } from '@mdi/react';
import { useTheme } from '@mui/material';
import MuiButton from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { LoadingIcon } from './LoadingIcon';


export const Button = (props) => {

  const {
    type = "button",
    variant = 'contained',
    color = 'primary',
    icon = "",
    text = "",
    onClick,
    isLoading = false,
  } = props

  const { palette: { primary } } = useTheme();
  
  return (
    <MuiButton 
      type={type}
      variant={variant}
      color={color}
      startIcon={
        isLoading ? <LoadingIcon /> : <Icon path={icon} size={1} />
      }
      onClick={(event) => onClick && onClick(event)}
      sx={{
        fontWeight: 'bold',
        boxShadow: 4,
        '&:hover': {
          backgroundColor: 'secondary.main',
          color: 'secondary.contrastText',
          "& .MuiButton-startIcon path": {
            fill: `${primary.main} !important`,
          }
        }
      }}
      disabled={isLoading}
    >
      {text}
    </MuiButton>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning', 'inherit']),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
}
