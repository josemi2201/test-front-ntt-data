import { Autocomplete, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export const Select = (props) => {

  const {
    label,
    name,
    options,
    value,
    handleChange,
    touched,
    errors,
  } = props

  return (
    <Autocomplete
        disablePortal
        name={name}
        options={options}
        onChange={(event, newValue) => {
            const newValueForm = {
                target: { name, value: "" }
            };

            if(newValue){
                newValueForm.target.value = newValue.id
            }

            handleChange(newValueForm)
        }}
        renderInput={(params) => 
            <TextField 
                {...params} 
                label={label} 
                value={value}
                error={ touched[name] && Boolean(errors[errors]) }
                helperText={ touched[name] && errors[errors] }
            />
        }
    />
  )
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}
