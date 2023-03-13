import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

const CurrentListingItem = ({ listing, confirmEdit }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    confirmEdit(listing);
  };

  return (
    <ListItem
      secondaryAction={
        <Button
          variant="contained"
          startIcon={<SettingsIcon />}
          onClick={handleEdit}
        >
          MANAGE LISTING
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
            <Typography variant="subtitle2" gutterBottom>
              {listing.sneaker.colorway}
            </Typography>
            <Typography variant="subtitle1">
              Size: {listing.size}
              <br />
              Listing Price: ${listing.price}
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
              {`This item usually sells for $${listing.sneaker.retail_price}`}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default CurrentListingItem;
