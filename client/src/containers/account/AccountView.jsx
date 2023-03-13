import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import CardActions from "@mui/material/CardActions";

const AccountView = ({ user, showForm }) => {
  return (
    <form>
      <Typography variant="h2" gutterBottom>
        Your Account
      </Typography>
      <Card sx={{ width: "100%", padding: "10px" }} elevation={24}>
        <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
          <Stack direction="row" spacing={2}>
            <TextField
              sx={{ width: "100%" }}
              disabled
              name="first_name"
              label="FIRST NAME"
              defaultValue={user.first_name}
            />
            <TextField
              sx={{ width: "100%" }}
              disabled
              name="last_name"
              label="LAST NAME"
              defaultValue={user.last_name}
            />
          </Stack>
        </FormControl>
        <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
          <TextField
            disabled
            fullWidth
            name="username"
            label="USERNAME"
            defaultValue={user.username}
          />
        </FormControl>
        <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
          <TextField
            sx={{ width: "100%" }}
            disabled
            name="address"
            label="ADDRESS"
            defaultValue={user.address}
          />
        </FormControl>
        <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
          <TextField
            sx={{ width: "100%" }}
            disabled
            name="city"
            label="CITY"
            defaultValue={user.city}
          />
        </FormControl>
        <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
          <Stack direction="row" spacing={2}>
            <TextField
              sx={{ width: "100%" }}
              disabled
              name="state"
              label="STATE"
              defaultValue={user.state}
            />
            <TextField
              sx={{ width: "100%" }}
              disabled
              type="number"
              name="zipcode"
              label="ZIPCODE"
              defaultValue={user.zipcode}
            />
          </Stack>
        </FormControl>
        <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
          <TextField
            disabled
            fullWidth
            name="phone_number"
            label="PHONE NUMBER"
            defaultValue={user.phone_number}
          />
        </FormControl>
        <CardActions>
          <Button
            onClick={() => showForm()}
            variant="contained"
            size="normal"
            style={{
              backgroundColor: "#212121",
              fontSize: "15px",
            }}
          >
            Edit Profile
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default AccountView;
