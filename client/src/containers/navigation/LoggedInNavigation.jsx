import React, { useState, useContext } from "react";
import { UserContext } from "../../context/User";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Icon } from "@iconify/react";

const LoggedInNavigation = () => {
    const { user, logout, loggedIn } = useContext(UserContext);

    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json' }
        })
        .then(() => {
            logout()
        })
    }

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
          <Button
            color="inherit"
            component={NavLink}
            exact="true"
            to="/dashboard"
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            exact="true"
            to="/listings"
          >
            Products
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            exact="true"
            to="/listings/new"
          >
            Sale
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            exact="true"
            to="/account"
          >
            Account
          </Button>
          <Button color="inherit" onClick={logoutUser}>
            Logout
          </Button>
        </Toolbar>
  );
};

export default LoggedInNavigation;