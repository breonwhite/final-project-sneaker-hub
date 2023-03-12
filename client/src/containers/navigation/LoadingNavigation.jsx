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
import LinearProgress from '@mui/material/LinearProgress';



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
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }} 
                >
                    <Icon icon="fa6-solid:shoe-prints" color="white" /> SNEAKERHUB
                </Typography>
                <Box sx={{ width: '70%' }}>
                    <LinearProgress color="inherit" />
                </Box>
            </Toolbar>
  )
}

export default LoadingNavigation