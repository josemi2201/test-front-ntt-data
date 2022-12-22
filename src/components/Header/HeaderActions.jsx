import { mdiCart } from "@mdi/js";
import { Box } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IconButton } from "../UI/IconButton";

export const HeaderActions = () => {

  const { cartNumber } = useContext(CartContext);

  return (
    <Box
      sx={sx.headerActions}
    >
      <IconButton
        badgeContent={cartNumber}
        haveBadge
        icon={mdiCart}
        tooltip={`Total items in cart: ${cartNumber}`}
      />
    </Box>
  );

};

const sx = {
  headerActions: {
    marginRight: 2
  }
};
