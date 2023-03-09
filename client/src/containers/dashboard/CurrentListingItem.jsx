import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TimerIcon from "@mui/icons-material/Timer";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import SettingsIcon from '@mui/icons-material/Settings';

const CurrentListingItem = ({ listing, confirmEdit }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    confirmEdit(listing)
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
        </Button>}
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
              Size: {listing.size}<br/>
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
