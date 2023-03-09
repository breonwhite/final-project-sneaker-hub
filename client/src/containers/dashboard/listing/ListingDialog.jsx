import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/User";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import InputAdornment from "@mui/material/InputAdornment";
import Chip from "@mui/material/Chip";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Divider from "@mui/material/Divider";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ListingDialog = ({ l, handleClose, updateListing }) => {
    const { listings, editListing, setListings } = useContext(UserContext); // Login context from User.jsx

  const [listing, setListing] = useState({
    price: l.price,
    size: l.size,
  });

  const handleListingChange = (e) => {
    setListing((listing) => ({
      ...listing,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hitting hadle submit");
    updateListing(l, listing);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogTitle>Edit Listing for {l.sneaker.name}</DialogTitle>
      <DialogContent dividers>
        <Card sx={{ display: "flex", width: "100%" }} elevation={0}>
          <CardMedia
            component="img"
            sx={{ width: 300 }}
            image={l.sneaker.image}
            alt={l.sneaker.name}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5" gutterBottom>
                <b>{l.sneaker.name}</b>
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
                gutterBottom
              >
                {l.sneaker.colorway}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                component="div"
              >
                Released on {l.sneaker.release_date}
                <br />
                This item usually sells for ${l.sneaker.retail_price}
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Typography variant="caption" display="block" gutterBottom>
          {l.sneaker.description}
        </Typography>
        <br />
        <Divider>
          <Chip label="LISTING DETAILS" />
        </Divider>
        <TextField
          margin="dense"
          id="size"
          defaultValue={l.size}
          label="Size"
          name="size"
          type="text"
          fullWidth
          variant="filled"
          onChange={handleListingChange}
        />
        <TextField
          margin="dense"
          id="price"
          defaultValue={l.price}
          variant="filled"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          label="Listing Price"
          name="price"
          type="number"
          onChange={handleListingChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button size="small" onClick={handleClose}>
          Cancel
        </Button>
        <Button size="small" onClick={handleClose}>
          Delete Listing
        </Button>
        <Button type="submit" size="large" variant="contained" color="success">
          Save Changes
        </Button>
      </DialogActions>
    </form>
  );
};

export default ListingDialog;
