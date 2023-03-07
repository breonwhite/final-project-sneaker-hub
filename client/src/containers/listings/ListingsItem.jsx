import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import TimerIcon from '@mui/icons-material/Timer';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';



const ListingsItem = ({ listing, viewSeller, confirmPurchase }) => {
    const sneaker = listing.sneaker
    const navigate = useNavigate();

    const handleProfile = () => {
        viewSeller(listing.seller)
    }

    const handlePurchase = () => {
        confirmPurchase(listing)
    }

    return (
      <ListItem 
          alignItems="flex-start"
          secondaryAction={
            <Button variant="contained" startIcon={<ShoppingCartIcon />} onClick={handlePurchase}>
                Buy for ${listing.price}
            </Button>
          }>
              <ListItemAvatar sx={{  m: 1 }}>
                  <Avatar alt={sneaker.name} src={sneaker.image} sx={{ width: 150, height: '100%' }} variant="rounded"/>
              </ListItemAvatar>
              <ListItemText
                  primary={
                    <React.Fragment>
                        <Typography variant="h6">
                            {sneaker.name}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Price: ${listing.price}
                        </Typography>
                    </React.Fragment>
                    }
                  secondary={
                      <React.Fragment>
                          <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                          >
                              { `Colorway: ${sneaker.colorway} mins | Release Date: ${sneaker.release_date} | Retail Price: ${sneaker.retail_price}` }
                          </Typography><br />
                          <Typography variant="caption">
                            Listed by <Button size="small" variant="text" onClick={handleProfile}>{listing.seller.username}</Button>
                          </Typography>
                      </React.Fragment>
              }
              />
      </ListItem>
    )
}

export default ListingsItem