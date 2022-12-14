import { Autocomplete, TextField, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

const FIRST_POSITION = 0;
const LENGTH_ONE = 1;

export const Select = (props) => {

  const {
    label,
    name,
    options,
    value,
    handleChange,
    touched,
    errors
  } = props;

  const defaultValue = options.length === LENGTH_ONE
    ? options[FIRST_POSITION]
    : null;

  const { palette: { primary } } = useTheme();

  useEffect(() => {

    if (defaultValue) {

      handleChange({target: {
        name,
        value: defaultValue.id
      }});

    }

  }, []);

  return (
    <Autocomplete
      defaultValue={defaultValue}
      disablePortal
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={
        (option, valueToCompare) => option.id === valueToCompare.id
      }
      name={name}
      onChange={(event, newValue) => {

        const newValueForm = {target: {
          name,
          value: ""
        }};

        if (newValue) {

          newValueForm.target.value = newValue.id;

        }

        handleChange(newValueForm);

      }}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          InputLabelProps={{
            style: { color: primary.contrastText }
          }}
          error={touched[name] && Boolean(errors[name])}
          helperText={touched[name] && errors[name]}
          label={label}
          value={value}
        />
      )}
    />
  );

};

Select.propTypes = {
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  touched: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};
