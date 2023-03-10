import React from "react";
import Divider from "@mui/material/Divider";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import TodayIcon from "@mui/icons-material/Today";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const PurchaseDialog = ({ user, l, handleClose, handlePurchase }) => {
  const price = parseFloat(l.price);
  const shippingFee = 14.95;
  const tax = price * 0.1;
  const processingFee = price * 0.06;
  const total = (price + shippingFee + tax + processingFee).toFixed(2);

  return (
    <div>
      <DialogTitle id="confirm-purchase-title">
        <ShoppingCartCheckoutIcon
          fontSize="medium"
          style={{ verticalAlign: "middle" }}
        />{" "}
        Express Checkout
      </DialogTitle>
      <DialogContent>
        <Card sx={{ display: "flex", width: "100%" }} elevation={0}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
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
          <LocalShippingIcon
            fontSize="small"
            style={{ verticalAlign: "middle" }}
          />{" "}
          Your item will ship from {l.seller.city}, {l.seller.state} <br />
          <TodayIcon
            fontSize="small"
            style={{ verticalAlign: "middle" }}
          />{" "}
          Most shipments are recieved between 5 to 10 business days <br />
          <ContactSupportIcon
            fontSize="small"
            style={{ verticalAlign: "middle" }}
          />{" "}
          For shipping inquiries, please contact the seller directly at{" "}
          {l.seller.email}
        </Typography>
        <br />
        <Divider>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
            gutterBottom
          >
            <b>SHIPPING DETAILS</b>
          </Typography>
        </Divider>
        <br />
        <Typography variant="overline">NAME</Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="overline">ADDRESS</Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {user.address}, {user.city}, {user.state} {user.zipcode}
        </Typography>
        <br />
        <Divider>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
            gutterBottom
          >
            <b>CONTACT INFORMATION</b>
          </Typography>
        </Divider>
        <Typography variant="overline">PHONE NUMBER</Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {user.phone_number}
        </Typography>
        <Typography variant="overline">EMAIL</Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {user.email}
        </Typography>
        <Divider>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
            gutterBottom
          >
            <b>PAYMENT</b>
          </Typography>
        </Divider>
        <TableContainer>
          <Table sx={{ width: "100%" }}>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Your Purchase Price
                </TableCell>
                <TableCell align="right">${price.toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Sales Tax
                </TableCell>
                <TableCell align="right">${tax.toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Processing Fee
                </TableCell>
                <TableCell align="right">${processingFee.toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Shipping
                </TableCell>
                <TableCell align="right">${shippingFee.toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" align="right">
                  <b>TOTAL</b>
                </TableCell>
                <TableCell align="right">
                  <b>${total}</b>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            handlePurchase(l);
          }}
          variant="contained"
          color="success"
          autoFocus
        >
          Purchase for ${total}
        </Button>
      </DialogActions>
    </div>
  );
};

export default PurchaseDialog;
