import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/User";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import BadgeIcon from "@mui/icons-material/Badge";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

const Analytics = () => {
  const [openAccount, setOpenAccount] = useState(true);
  const [openPurchases, setOpenPurchases] = useState(true);
  const [open, setOpen] = React.useState(true);
  const {
    user,

    statistics,
    purchases,
  } = useContext(UserContext);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const membership = new Date(user.created_at).toLocaleString("en-US", options);

  const totalSpent = purchases.reduce((accumulator, purchase) => {
    return accumulator + parseFloat(purchase.listing.price);
  }, 0);

  const data = [
    {
      icon: <BadgeIcon />,
      label: "Name",
      details: `${user.first_name} ${user.last_name}`,
    },
    {
      icon: <HomeIcon />,
      label: "Address",
      details: `${user.address}, ${user.city}, ${user.state} ${user.zipcode}`,
    },
    { icon: <AlternateEmailIcon />, label: "Email", details: `${user.email}` },
    {
      icon: <LocalPhoneIcon />,
      label: "Phone Number",
      details: `${user.phone_number}`,
    },
    {
      icon: <CardMembershipIcon />,
      label: "Member Since",
      details: `${membership}`,
    },
  ];

  const listingData = [
    { label: "Total Listings", details: `${statistics.total_listings}` },
    { label: "Active Listings", details: `${statistics.active_listings}` },
    {
      label: "Purchased Listings",
      details: `${statistics.purchased_listings}`,
    },
    { label: "Gross Sales", details: `$ ${statistics.gross_sales}` },
    { label: "Total Income", details: `$ ${statistics.total_income}` },
  ];

  const purchaseData = [
    { label: "Total Purchases", details: `${purchases.length}` },
    { label: "Money Spent", details: `$${totalSpent}` },
  ];

  return (
    <Box sx={{ width: "100%", height: 900 }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "rgb(102, 157, 246)" },
            background: { paper: "rgb(5, 30, 52)" },
          },
        })}
      >
        <Paper elevation={0} sx={{ width: "100%", height: "100%" }}>
          <FireNav component="nav" disablePadding>
            <ListItem>
              <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary={`Welcome, ${user.username} !`}
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: openAccount ? "rgba(71, 98, 130, 0.2)" : null,
                pb: openAccount ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpenAccount(!openAccount)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: openAccount ? 0 : 2.5,
                  "&:hover, &:focus": {
                    "& svg": { opacity: openAccount ? 1 : 0 },
                  },
                }}
              >
                <ListItemText
                  primary={`Account Details`}
                  primaryTypographyProps={{
                    color: "primary",
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                  secondary="Name, Address, Email, Phone Number, Membership Details..."
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: openAccount
                      ? "rgba(0,0,0,0)"
                      : "rgba(255,255,255,0.5)",
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: openAccount ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
              {openAccount &&
                data.map((item) => (
                  <ListItem
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      secondary={item.details}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItem>
                ))}
            </Box>

            <Divider />
            <Box
              sx={{
                bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Listings"
                  primaryTypographyProps={{
                    color: "primary",
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                  secondary="Total Listings, Active Listings, Purchased Listings, Gross Sales, Total Income..."
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
              {open &&
                listingData.map((item) => (
                  <ListItem
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                    secondaryAction={
                      <Chip label={item.details} color="primary" size="small" />
                    }
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItem>
                ))}
            </Box>

            <Divider />
            <Box
              sx={{
                bgcolor: openPurchases ? "rgba(71, 98, 130, 0.2)" : null,
                pb: openPurchases ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpenPurchases(!openPurchases)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: openPurchases ? 0 : 2.5,
                  "&:hover, &:focus": {
                    "& svg": { opacity: openPurchases ? 1 : 0 },
                  },
                }}
              >
                <ListItemText
                  primary="Purchases"
                  primaryTypographyProps={{
                    color: "primary",
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                  secondary="Total Purchases, Money Spent..."
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: openPurchases
                      ? "rgba(0,0,0,0)"
                      : "rgba(255,255,255,0.5)",
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
              {openPurchases &&
                purchaseData.map((item) => (
                  <ListItem
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                    secondaryAction={
                      <Chip label={item.details} color="primary" size="small" />
                    }
                  >
                    {/* <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon> */}
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItem>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
};

export default Analytics;
