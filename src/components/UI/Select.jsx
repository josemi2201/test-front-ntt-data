import { Autocomplete, TextField, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

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

  const defaultValue = options.length === 1 ? options[0] : null

  const { palette: { primary } } = useTheme()

  useEffect(() => {

    defaultValue && handleChange({
        target: { name, value: defaultValue.id }
    })
    
  }, [])
  
  return (
    <Autocomplete
        disablePortal
        name={name}
        options={options}
        defaultValue={defaultValue}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.id === value.id}
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
                error={ touched[name] && Boolean(errors[name]) }
                helperText={ touched[name] && errors[name] }
                InputLabelProps={{
                  style: { color: primary.contrastText },
                }}
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
