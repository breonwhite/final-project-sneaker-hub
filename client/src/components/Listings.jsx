import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/User";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListingsItem from "../containers/listings/ListingsItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import TodayIcon from "@mui/icons-material/Today";
import MapIcon from "@mui/icons-material/Map";
import PurchaseDialog from "../containers/listings/PurchaseDialog";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Paper from "@mui/material/Paper";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Unauthorized from "../containers/Unauthorized";
import Loading from "../containers/Loading";

const Listings = () => {
  const { user, listings, purchaseListing, fetchListings, loggedIn, loading } = useContext(UserContext); // Listing context from User.jsx
  const [ activeListings, setActiveListings ] = useState([]);


  useEffect(() => {
    const filteredListings = listings.filter((l) => l.seller_id !== user.id && l.sold === false);
    setActiveListings(filteredListings);
  }, [listings]);


  const handlePurchase = async (listing) => {
    try {
      const data = await purchaseListing(listing);
      console.log(data);
      handleClose();
      const newListing = activeListings.filter((i) => i.id !== listing.id);
      setActiveListings(newListing);
    } catch (error) {
      console.error(error);
    }
  };

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [openDialogIndex, setOpenDialogIndex] = React.useState(-1);

  const confirmPurchase = (listing, index) => {
    console.log(listing.id);

    setIsDialogOpen(true);
    setOpenDialogIndex(index);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setOpenDialogIndex(-1);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (isDialogOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isDialogOpen]);

  if (loading && loggedIn) {
    return <Loading />;
  } else if (!loggedIn) {
    return <Unauthorized />;
  } else {
  return (
    <div>
      <Container>
      <Typography variant="h3" align="left" gutterBottom>
        Soles for Sale { activeListings? `(${activeListings.length})` : ""}
      </Typography>
      <Box sx={{ width: '100%' }}>
      <Grid container sx={{ width: '100%' }}>
      <List sx={{ width: 5000, bgcolor: "background.paper" }}>
        {activeListings.map((l, index) => {
          return (
            <div key={index}>
              <ListingsItem
                listing={l}
                confirmPurchase={() => confirmPurchase(l, index)}
              />
              <Divider />
              <Dialog
                open={isDialogOpen && openDialogIndex === index}
                onClose={handleClose}
                aria-labelledby="confirm-purchase-title"
                aria-describedby="alert-dialog-description"
              >
                <PurchaseDialog user={user} l={l} handleClose={handleClose} handlePurchase={handlePurchase} />
                
              </Dialog>
            </div>
          );
        })}
      </List>
      {/* <ul>
        { otherListings.map((l, index) => 
          <li key={ index }>{l.price}, {l.size}, {l.sneaker.name}</li> 
        )}
        </ul> */}
        </Grid>
        </Box>
        </Container>
    </div>
  )};
};

export default Listings;
