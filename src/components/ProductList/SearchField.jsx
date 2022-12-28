import { TextField, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { checkIncludes } from "../../helpers/validations";

export const SearchField = ({isFirstRender, getProducts}) => {

  const { palette: { background, primary } } = useTheme();

  const [search, setSearch] = useState("");

  useEffect(() => {

    if (!isFirstRender) {

      getProducts(({brand, model}) => (
        (brand && checkIncludes(brand, search)) ||
        (model && checkIncludes(model, search))
      ));

    }

  }, [search]);

  const handleChangeSearch = (event) => {

    setSearch(event.target.value);

  };

  return (
    <TextField
      fullWidth
      label="Search"
      onChange={handleChangeSearch}
      sx={{
        "& label.Mui-focused": {
          color: primary.contrastText
        },
        background: background.paper
      }}
      value={search}
    />
  );

};

SearchField.propTypes = {
  getProducts: PropTypes.func.isRequired,
  isFirstRender: PropTypes.bool.isRequired
};
