import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/User";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CurrentListingItem from "../containers/dashboard/CurrentListingItem";
import List from "@mui/material/List";
import ListingDialog from "../containers/dashboard/listing/ListingDialog";
import Snackbar from "@mui/material/Snackbar";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Analytics from "../containers/dashboard/analytics/Analytics";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import PurchaseCard from "../containers/dashboard/purchases/PurchaseCard";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Unauthorized from "../containers/Unauthorized";
import Loading from "../containers/Loading";

const Dashboard = () => {
  const {
    user,
    loggedIn,
    loading,
    listings,
    purchases,
    getStatistics,
    editListing,
    destroyListing,
  } = useContext(UserContext); // Listing context from User.jsx
  const [currentListings, setCurrentListings] = useState(
    listings.filter((l) => l.seller_id === user.id && l.sold === false)
  );
  const [successAlert, setSuccessAlert] = React.useState(false);
  const [deleteAlert, setDeleteAlert] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [openDialogIndex, setOpenDialogIndex] = React.useState(-1);
  const theme = useTheme();
  const maxSteps = purchases.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    // Update currentListings whenever listings change
    setCurrentListings(
      listings.filter((l) => l.seller_id === user.id && l.sold === false)
    );
    getStatistics();
  }, [listings]);

  const confirmEdit = (listing, index) => {
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
    setDeleteAlert(false);
  };

  const updateListing = async (currentListing, updatedListing) => {
    try {
      const data = await editListing(currentListing, updatedListing);
      console.log(`Listing Updated: ${data}`);
      handleClose();
      setSuccessAlert(true);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteListing = (listing) => {
    destroyListing(listing);
    handleClose();
    setDeleteAlert(true);
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
      <Box sx={{ flexGrow: 1 }}>
        <Snackbar
          open={successAlert}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={3000}
          message={
            <React.Fragment>
              <AutoAwesomeIcon style={{ verticalAlign: "middle" }} /> Your
              listing has been updated!
            </React.Fragment>
          }
        />
        <Snackbar
          open={deleteAlert}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={3000}
          message={
            <React.Fragment>
              <DeleteIcon style={{ verticalAlign: "middle" }} /> Your listing
              has been sucessfully deleted
            </React.Fragment>
          }
        />
        <Grid
          container
          spacing={3}
          style={{ width: "90%", height: "100%", margin: "auto" }}
        >
          <Grid item xs={12} sm={4} sx={{ height: "100%" }}>
            <Paper>
              <Analytics />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              <Grid
                item
                id="active listing"
                xs={12}
                sm={12}
                sx={{ height: "50%" }}
              >
                <Typography align="left" variant="h4" gutterBottom>
                  Your Active Listings ({currentListings.length})
                </Typography>
                <Paper>
                  <Box sx={{ maxHeight: 450, overflow: "auto" }}>
                    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                      {currentListings.map((l, index) => {
                        return (
                          <div key={index}>
                            <CurrentListingItem
                              listing={l}
                              confirmEdit={() => confirmEdit(l, index)}
                            />
                            <Divider />
                            <Dialog
                              fullWidth
                              open={isDialogOpen && openDialogIndex === index}
                              onClose={handleClose}
                              aria-labelledby="confirm-purchase-title"
                              aria-describedby="alert-dialog-description"
                            >
                              <ListingDialog
                                l={l}
                                updateListing={updateListing}
                                handleClose={handleClose}
                                deleteListing={deleteListing}
                              />
                            </Dialog>
                          </div>
                        );
                      })}
                    </List>
                  </Box>
                </Paper>
              </Grid>
              <Grid
                item
                id="new listing"
                xs={12}
                sm={12}
                sx={{ height: "37%" }}
              >
                <Typography align="left" variant="h4" gutterBottom>
                  Your Purchases ({purchases.length})
                </Typography>
                <br />
                <Paper>
                  <Box
                    sx={{
                      flexGrow: 1,
                      height: 270,
                      backgroundColor: "#e0e0e0",
                    }}
                  >
                    <Grid
                      container
                      justifyContent="center"
                      rowSpacing={{ xs: 1, sm: 1, md: 2 }}
                      sx={{ width: "100%" }}
                    >
                      {purchases.map((p, index) =>
                        Math.abs(activeStep - index) <= 0 ? (
                          <PurchaseCard key={p.id} purchase={p} />
                        ) : null
                      )}
                    </Grid>
                  </Box>
                  <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1 || maxSteps === 0}
                      >
                        Next
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0 || maxSteps === 0}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                        Back
                      </Button>
                    }
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default Dashboard;
