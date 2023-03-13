import React, { useState, useContext } from "react";
import { UserContext } from "../context/User";
import noimageavailble from "../images/no-image-available.png";
import sneakerboxes from "../images/sneaker-boxes-2.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Snackbar from "@mui/material/Snackbar";
import Unauthorized from "../containers/Unauthorized";
import Loading from "../containers/Loading";

const ListingNew = () => {
  const { createListing, loggedIn, loading } = useContext(UserContext); // Listing context from User.jsx
  const [imagePreview, setImagePreview] = useState(sneakerboxes);
  const [successAlert, setSuccessAlert] = React.useState(false);
  const [sneaker, setSneaker] = useState({
    name: "",
    colorway: "",
    description: "",
    release_date: "",
    image: "",
    retail_price: "",
  });

  const [listing, setListing] = useState({
    price: "",
    size: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await createListing(sneaker, listing);
      console.log(data);
      setSuccessAlert(true);
      resetForm();
    } catch (error) {
      console.error(error);
      alert(`Error: ${error.message}`);
    }
  };

  const handleSneakerChange = (e) => {
    setSneaker((sneaker) => ({
      ...sneaker,
      [e.target.name]: e.target.value,
    }));
  };

  const handleListingChange = (e) => {
    setListing((listing) => ({
      ...listing,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setImagePreview(e.target.value);
    handleSneakerChange(e);
  };

  const handleAlertClose = () => {
    setSuccessAlert(false);
  };

  const resetForm = () => {
    setSneaker({
      name: "",
      colorway: "",
      description: "",
      release_date: "",
      image: "",
      retail_price: "",
    });

    setListing({
      price: "",
      size: "",
    });
  };

  if (loading && loggedIn) {
    return <Loading />;
  } else if (!loggedIn) {
    return <Unauthorized />;
  } else {
    return (
      <Box
        style={{
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Snackbar
          open={successAlert}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={3000}
          message={
            <React.Fragment>
              <AutoAwesomeIcon style={{ verticalAlign: "middle" }} /> Your
              listing has been created! You can view all your listings in your
              dashboard.
            </React.Fragment>
          }
        />
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh", width: "100%", margin: "auto" }}
        >
          <Grid item xs={3}>
            <Typography variant="h2" gutterBottom color={"black"}>
              Create A New Listing
            </Typography>
            <Card sx={{ display: "flex", width: "100%" }} elevation={24}>
              <CardMedia
                component="img"
                sx={{ width: "40%", height: "80%", objectFit: "cover" }}
                image={sneaker.image ? imagePreview : sneakerboxes}
                alt="Live from space album cover"
              />
              <CardContent sx={{ flex: "1 0 auto", maxWidth: 900 }}>
                <form onSubmit={handleSubmit}>
                  <FormControl
                    sx={{ m: 1, mt: 3, width: "95%", padding: "10px" }}
                  >
                    <Typography variant="overline" gutterBottom align="left">
                      Sneaker Details
                    </Typography>
                    <TextField
                      type="text"
                      name="name"
                      value={sneaker.name}
                      onChange={handleSneakerChange}
                      label="Sneaker Name"
                      size="small"
                    />
                    <br />
                    <TextField
                      type="text"
                      name="colorway"
                      value={sneaker.colorway}
                      onChange={handleSneakerChange}
                      label="Colorway"
                      size="small"
                    />
                    <br />
                    <TextField
                      type="text"
                      name="description"
                      multiline
                      maxRows={3}
                      value={sneaker.description}
                      onChange={handleSneakerChange}
                      label="Description"
                      size="small"
                    />
                    <br />
                    <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
                      <Stack direction="row" spacing={2}>
                        <TextField
                          required
                          type="date"
                          name="release_date"
                          size="normal"
                          helperText="Product's Release Date"
                          value={sneaker.release_date}
                          sx={{ width: "100%", height: "100%" }}
                          onChange={handleSneakerChange}
                        />
                        <TextField
                          label="Retail Price"
                          type="number"
                          name="retail_price"
                          value={sneaker.retail_price}
                          sx={{ width: "100%" }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                $
                              </InputAdornment>
                            ),
                          }}
                          onChange={handleSneakerChange}
                        />
                      </Stack>
                    </FormControl>
                    <br />
                    <TextField
                      label="Sneaker Image URL"
                      type="text"
                      size="small"
                      name="image"
                      value={sneaker.image}
                      onChange={handleImageChange}
                    />
                    <br />
                    <Typography variant="overline" align="left">
                      Listing Details
                    </Typography>
                    <TextField
                      label="Size"
                      type="text"
                      name="size"
                      value={listing.size}
                      size="small"
                      onChange={handleListingChange}
                    />
                    <br />
                    <TextField
                      label="Listing Price"
                      type="number"
                      name="price"
                      value={listing.price}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                      size="small"
                      onChange={handleListingChange}
                    />
                    <br />
                  </FormControl>
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    style={{
                      borderRadius: 35,
                      backgroundColor: "#212121",
                      padding: "18px 36px",
                      fontSize: "18px",
                    }}
                  >
                    Post Listing
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>
    );
  }
};

export default ListingNew;
