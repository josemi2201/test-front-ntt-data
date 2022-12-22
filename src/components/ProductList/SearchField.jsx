import { TextField, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { showToast } from "../../helpers/toast";
import { checkIncludes } from "../../helpers/validations";
import { useProducts } from "../../hooks/useProducts";

export const SearchField = ({isFirstRender, setProducts}) => {

  const { palette: { background, primary } } = useTheme();
  const { getProducts } = useProducts();

  const [search, setSearch] = useState("");

  useEffect(() => {

    if (!isFirstRender) {

      getProducts().
        then((products) => {

          const filteredProducts = products.filter(
            ({brand, model}) => (
              (brand && checkIncludes(brand, search)) ||
              (model && checkIncludes(model, search))
            )
          );
          setProducts(filteredProducts);

        }).
        catch((error) => showToast(error.message, "error"));

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
  isFirstRender: PropTypes.bool.isRequired,
  setProducts: PropTypes.func.isRequired
};
