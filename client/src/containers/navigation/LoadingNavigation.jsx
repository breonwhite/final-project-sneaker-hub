import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Icon } from "@iconify/react";
import LinearProgress from "@mui/material/LinearProgress";

const LoadingNavigation = () => {
  return (
    <Toolbar>
      <Typography
        variant="h6"
        component="a"
        noWrap
        sx={{
          flexGrow: 1,
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <Icon icon="fa6-solid:shoe-prints" color="white" /> SNEAKERHUB
      </Typography>
      <Box sx={{ width: "70%" }}>
        <LinearProgress color="inherit" />
      </Box>
    </Toolbar>
  );
};

export default LoadingNavigation;
