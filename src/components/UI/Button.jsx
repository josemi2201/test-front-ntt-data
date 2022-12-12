import { Icon } from '@mdi/react';
import MuiButton from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';

export const Button = (props) => {

  const {
    type = "button",
    variant = 'contained',
    color = 'primary',
    icon = "",
    text = "",
    onClick,
  } = props
  
  return (
    <MuiButton 
      type={type}
      variant={variant}
      color={color}
      startIcon={
        <Icon path={icon} size={1} />
      }
      onClick={(event) => onClick && onClick(event)}
      sx={{
        fontWeight: 'bold',
        boxShadow: 4,
        '&:hover': {
          backgroundColor: 'secondary.main',
          color: 'secondary.contrastText',
        }
      }}
    >
      {text}
    </MuiButton>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning', 'inherit']),
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
