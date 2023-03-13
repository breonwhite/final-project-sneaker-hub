import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/User";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const ListingDialog = ({ l, handleClose, updateListing, deleteListing }) => {
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

  const handleDelete = () => {
    console.log("hitting handle delete");
    deleteListing(l);
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
        <Button size="small" onClick={handleDelete}>
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
