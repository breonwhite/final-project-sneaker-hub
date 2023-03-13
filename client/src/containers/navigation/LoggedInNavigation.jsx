import React, { useContext } from "react";
import { UserContext } from "../../context/User";
import { NavLink } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";

const LoggedInNavigation = () => {
  const { logout } = useContext(UserContext);

  const logoutUser = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      logout();
    });
  };

  return (
    <Toolbar>
      <Typography
        variant="h6"
        component={NavLink}
        exact="true"
        to="/"
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
      <Button color="inherit" component={NavLink} exact="true" to="/dashboard">
        Dashboard
      </Button>
      <Button color="inherit" component={NavLink} exact="true" to="/listings/view">
        Products
      </Button>
      <Button
        color="inherit"
        component={NavLink}
        exact="true"
        to="/listings/new"
      >
        SELL
      </Button>
      <Button color="inherit" component={NavLink} exact="true" to="/account">
        Account
      </Button>
      <Button color="inherit" onClick={logoutUser}>
        Logout
      </Button>
    </Toolbar>
  );
};

export default LoggedInNavigation;
