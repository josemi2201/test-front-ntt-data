import { Breadcrumbs, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";

const FIRST_INDEX = 0;
const SECOND_INDEX = 1;
const AUX_LENGTH = 1;

export const HeaderBreadcrumbs = () => {

  const { palette: { primary, secondary} } = useTheme();
  const location = useLocation();
  const { getProduct } = useProduct();

  const [paths, setPaths] = useState([]);
  const [pathsDescriptions, setPathsDescriptions] = useState([]);

  useEffect(() => {

    const newpaths = location.pathname.split("/").filter((path) => path !== "");
    setPaths(newpaths);
    getDescriptions([...newpaths]);

  }, [location]);

  const getDescriptions = async (pathsList) => {

    if (pathsList[FIRST_INDEX] === "product" && pathsList[SECOND_INDEX]) {

      try {

        const { description } = await getProduct(pathsList[SECOND_INDEX]);
        pathsList[SECOND_INDEX] = description;

      } catch (error) {

        pathsList[SECOND_INDEX] = "Not-found";

      }

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
        paths.map((path, index) => <Box
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
            to={getPathBreadcrumbs(index)}
            style={{
              pointerEvents: pathsDescriptions[index] === "Not-found"
                ? "none"
                : "auto"
            }}
          >
            {pathsDescriptions[index]}
          </Link>
        </Box>
        )
      }
    </Breadcrumbs>
  );

};

