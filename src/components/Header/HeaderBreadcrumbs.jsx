import { Breadcrumbs, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const FIRST_INDEX = 0;
const SECOND_INDEX = 1;
const AUX_LENGTH = 1;

export const HeaderBreadcrumbs = () => {

  const { product } = useContext(ProductContext);

  const { palette: { primary, secondary} } = useTheme();
  const location = useLocation();

  const [paths, setPaths] = useState([]);
  const [pathsDescriptions, setPathsDescriptions] = useState([]);

  useEffect(() => {

    const newPaths = location.pathname.split("/").filter((path) => path !== "");
    setPaths(newPaths);
    getDescriptions([...newPaths]);

  }, [location, product]);

  const getDescriptions = (pathsList) => {

    if (pathsList[FIRST_INDEX] === "product" && pathsList[SECOND_INDEX]) {

      pathsList[SECOND_INDEX] = product
        ? product.description
        : "Not-found";

    }

    setPathsDescriptions(pathsList);

  };

  const getPathBreadcrumbs = (index) => {

    const toIndex = index + AUX_LENGTH;
    return `/${paths.slice(FIRST_INDEX, toIndex).join("/")}`;

  };

  return (
    <Breadcrumbs color={primary.contrastText}>
      {
        paths.map((path, index) => (
          <Box
            key={index}
            sx={{
              "& > a": {
                color: primary.contrastText,
                textDecoration: "none"
              },
              "& > a:hover": {
                backgroundColor: secondary.main,
                color: secondary.contrastText,
                paddingBottom: "4px",
                paddingTop: "4px",
                textDecoration: "underline"
              }
            }}
          >
            <Link
              style={{
                pointerEvents: pathsDescriptions[index] === "Not-found"
                  ? "none"
                  : "auto"
              }}
              to={getPathBreadcrumbs(index)}
            >
              {pathsDescriptions[index]}
            </Link>
          </Box>
        ))
      }
    </Breadcrumbs>
  );

};

