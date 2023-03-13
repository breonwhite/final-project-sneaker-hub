import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import PaidIcon from "@mui/icons-material/Paid";

const PurchaseCard = ({ purchase }) => {
  const listing = purchase.listing;
  const sneaker = listing.sneaker;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const purchaseDate = new Date(purchase.purchased_at).toLocaleString(
    "en-US",
    options
  );

  return (
    <Grid item width="90%">
      <Card sx={{ width: "900", height: 220, display: "flex" }} elevation={24}>
        <CardMedia
          component="img"
          sx={{ width: "40%", height: "100%", objectFit: "cover" }}
          image={sneaker.image}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {sneaker.name}
            </Typography>
            <Typography component="div" variant="caption">
              {sneaker.colorway}
            </Typography>
            <Typography component="div" variant="caption">
              Size {listing.size}
              <br />
              <br />
            </Typography>
            <Chip
              icon={<PaidIcon />}
              label={`Purchased for $${listing.price}`}
              color="success"
            />
            <br />
            <br />
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {`Purchased from ${listing.seller.username} on ${purchaseDate}`}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default PurchaseCard;
