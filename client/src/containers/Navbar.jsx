import React, { useState, useContext } from "react";
import { UserContext } from "../context/User";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LoadingNavigation from "./navigation/LoadingNavigation";
import LoggedInNavigation from "./navigation/LoggedInNavigation";
import LoggedOutNavigation from "./navigation/LoggedOutNavigation";

const Navbar = () => {
  const { loading, loggedIn } = useContext(UserContext);

  if (loggedIn) {
    return (
      <Box sx={{ flexGrow: 1 }} style={{ margin: 0 }}>
        <AppBar position="static" style={{ margin: 0, background: "#212121" }}>
          {loading ? <LoadingNavigation /> : <LoggedInNavigation />}
        </AppBar>
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 1 }} style={{ margin: 0 }}>
        <AppBar position="static" style={{ margin: 0, background: "#212121" }}>
          <LoggedOutNavigation />
        </AppBar>
      </Box>
    );
  }
};

export default Navbar;
