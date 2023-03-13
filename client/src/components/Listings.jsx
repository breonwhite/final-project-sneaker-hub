import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/User";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListingsItem from "../containers/listings/ListingsItem";
import Dialog from "@mui/material/Dialog";
import PurchaseDialog from "../containers/listings/PurchaseDialog";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Unauthorized from "../containers/Unauthorized";
import Loading from "../containers/Loading";
import Snackbar from "@mui/material/Snackbar";
import SellIcon from "@mui/icons-material/Sell";

const Listings = () => {
  const { user, listings, purchaseListing, loggedIn, loading } =
    useContext(UserContext); // Listing context from User.jsx
  const [activeListings, setActiveListings] = useState([]);
  const [successAlert, setSuccessAlert] = React.useState(false);

  useEffect(() => {
    const filteredListings = listings.filter(
      (l) => l.seller_id !== user.id && l.sold === false
    );
    setActiveListings(filteredListings);
  }, [listings]);

  const handlePurchase = async (listing) => {
    try {
      const data = await purchaseListing(listing);
      console.log(data);
      handleClose();
      const newListing = activeListings.filter((i) => i.id !== listing.id);
      setActiveListings(newListing);
      setSuccessAlert(true);
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

  const handleAlertClose = () => {
    setSuccessAlert(false);
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
      <Box
        style={{
          backgroundSize: "cover",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Snackbar
          open={successAlert}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={3000}
          message={
            <React.Fragment>
              <SellIcon style={{ verticalAlign: "middle" }} /> Enjoy your new
              sneakers!
            </React.Fragment>
          }
        />
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ width: "80%", margin: "auto" }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Soles for Sale ({activeListings ? `${activeListings.length}` : ""})
          </Typography>
          <Grid container style={{ width: "100%", margin: "auto" }}>
            {activeListings.length == 0 ? (
              "Looks like there are no active listings right now. Check back later."
            ) : (
              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
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
                        <PurchaseDialog
                          user={user}
                          l={l}
                          handleClose={handleClose}
                          handlePurchase={handlePurchase}
                        />
                      </Dialog>
                    </div>
                  );
                })}
              </List>
            )}
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default Listings;
