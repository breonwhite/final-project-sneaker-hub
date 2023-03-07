import React, { useState, useContext } from 'react'
import { UserContext } from '../context/User';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListingsItem from '../containers/listings/ListingsItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import TodayIcon from '@mui/icons-material/Today';
import MapIcon from '@mui/icons-material/Map';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Paper from '@mui/material/Paper';



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



const Listings = () => {
  const { user, listings } = useContext(UserContext); // Listing context from User.jsx
  

  


  const [scroll, setScroll] = React.useState('paper');

  const currentUserListings = listings.filter(l => l.seller_id === user.id && l.sold === false);
  const otherListings = listings.filter(l => l.seller_id !== user.id && l.sold === false);

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [openDialogIndex, setOpenDialogIndex] = React.useState(-1);


  const viewSeller = (seller) => {
    console.log(seller.first_name)
  }

  const confirmPurchase = (listing, index) => {
    console.log(listing.id)
    setIsDialogOpen(true);
    setOpenDialogIndex(index);
  }

  const handleClose = () => {
    setIsDialogOpen(false);
    setOpenDialogIndex(-1);
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
  
  return (
    <div>
      <h1>Listings</h1><br/>
      <h2>My Current Listings</h2><br/>
      <ul>
      { currentUserListings.map((l, index) => 
        <li key={ index }>{l.price}, {l.size}, {l.sneaker.name}</li> 
      )}
      </ul>
      <br/>
      <h2>Current Listings</h2><br/>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          { otherListings.map((l, index) => 
          <div key={ index }>
            <ListingsItem listing={l} viewSeller={viewSeller} confirmPurchase={() => confirmPurchase(l, index)} />
            <Divider />
              <Dialog
                open={isDialogOpen && openDialogIndex === index}
                onClose={handleClose}
                aria-labelledby="confirm-purchase-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="confirm-purchase-title">
                  <ShoppingCartCheckoutIcon fontSize='medium' style={{verticalAlign:"middle"}} /> Express Checkout
                </DialogTitle>
                <DialogContent>
                <Card sx={{ display: 'flex', width: '100%' }} elevation={0}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5" gutterBottom>
                        <b>{l.sneaker.name}</b>
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary" component="div" gutterBottom>
                        {l.sneaker.colorway}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary" component="div">
                        SIZE: {l.size}
                      </Typography>
                    </CardContent>
                  </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 300 }}
                  image={l.sneaker.image}
                  alt={l.sneaker.name}
                />
    </Card>
    <Typography component="div" variant="caption" gutterBottom>
                        <LocalShippingIcon fontSize='small' style={{verticalAlign:"middle"}} /> Your item will ship from {l.seller.city}, {l.seller.state} <br/>
                        <TodayIcon fontSize='small' style={{verticalAlign:"middle"}} /> Most shipments are recieved between 5 to 10 business days <br/>
                        <ContactSupportIcon fontSize='small' style={{verticalAlign:"middle"}} /> For shipping inquiries, please contact the seller directly at {l.seller.email}
                      </Typography><br />
                      <Divider>
                      <Typography variant="subtitle2" color="text.secondary" component="div" gutterBottom>
                        <b>SHIPPING DETAILS</b>
                      </Typography>
                      </Divider><br />
                      <Typography variant="overline">
                        NAME
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {user.first_name} {user.last_name}
                      </Typography>
                      <Typography variant="overline">
                        ADDRESS
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {user.address}, {user.city}, {user.state} {user.zipcode}
                      </Typography><br />
                      <Divider>
                      <Typography variant="subtitle2" color="text.secondary" component="div" gutterBottom>
                        <b>CONTACT INFORMATION</b>
                      </Typography>
                      </Divider>
                      <Typography variant="overline">
                        PHONE NUMBER
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {user.phone_number}
                      </Typography>
                      <Typography variant="overline">
                        EMAIL
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {user.email}
                      </Typography>
                      <Divider>
                      <Typography variant="subtitle2" color="text.secondary" component="div" gutterBottom>
                          <b>PAYMENT</b>
                      </Typography>
                      </Divider>
                      <TableContainer>
                      <Table sx={{ width: '100%' }}>

                        <TableBody>
                          <TableRow>
                          <TableCell component="th" scope="row" >
                            Your Purchase Price
                            </TableCell>
                            <TableCell align="right">${l.price}</TableCell>
                    </TableRow>
                    <TableRow>
                          <TableCell component="th" scope="row" >
                            Sales Tax
                            </TableCell>
                            <TableCell align="right">${l.price}</TableCell>
                    </TableRow>
                    <TableRow>
                          <TableCell component="th" scope="row" >
                              Processing Fee
                            </TableCell>
                            <TableCell align="right">${l.price}</TableCell>
                    </TableRow>
                    <TableRow>
                          <TableCell component="th" scope="row" >
                              Shipping
                            </TableCell>
                            <TableCell align="right">${l.price}</TableCell>
                    </TableRow>
                    <TableRow>
                          <TableCell component="th" scope="row" align="right">
                              <b>TOTAL</b>
                            </TableCell>
                            <TableCell align="right"><b>${l.price}</b></TableCell>
                    </TableRow>
                    </TableBody>
                    </Table>
                  </TableContainer>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose} autoFocus>
                    Confirm Purchase
                  </Button>
                </DialogActions>
      </Dialog>
            </div>
          )}
        </List>
      {/* <ul>
        { otherListings.map((l, index) => 
          <li key={ index }>{l.price}, {l.size}, {l.sneaker.name}</li> 
        )}
        </ul> */}


      



    </div>
  )
}

export default Listings