import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const ListingsItem = ({ listing, confirmPurchase }) => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    confirmPurchase(listing);
  };

  return (
    <ListItem
      alignItems="flex-start"
      secondaryAction={
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={handlePurchase}
        >
          Buy for ${listing.price}
        </Button>
      }
    >
      <ListItemAvatar sx={{ m: 1 }}>
        <Avatar
          alt={listing.sneaker.name}
          src={listing.sneaker.image}
          sx={{ width: 150, height: "100%" }}
          variant="rounded"
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography variant="h6">{listing.sneaker.name}</Typography>
            <Typography variant="subtitle1" gutterBottom>
                Colorway: {listing.sneaker.colorway}
            </Typography>
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {`Release Date: ${listing.sneaker.release_date} | Retail Price: ${listing.sneaker.retail_price}`}
            </Typography>
            <br />
            <Typography variant="caption">
              <b>Listed by {listing.seller.username}</b>
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default ListingsItem;
