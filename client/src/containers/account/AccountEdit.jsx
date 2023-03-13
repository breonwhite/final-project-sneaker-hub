import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import CardActions from "@mui/material/CardActions";

const AccountEdit = ({ user, updateUser, cancelEdit }) => {
  const [update, setUpdate] = useState({
    username: user.username,
    first_name: user.first_name,
    last_name: user.last_name,
    phone_number: user.phone_number,
    address: user.address,
    city: user.city,
    zipcode: user.zipcode,
    state: user.state,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hitting hit submit");
    updateUser(update);
  };

  const handleChange = (e) => {
    setUpdate((update) => ({
      ...update,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    cancelEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h2" gutterBottom>
        Your Account
      </Typography>
      <Card
        sx={{ width: "100%", padding: "10px", backgroundColor: "#eeeeee" }}
        elevation={24}
      >
        <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
          <Stack direction="row" spacing={2}>
            <TextField
              focused
              sx={{ width: "100%" }}
              name="first_name"
              label="FIRST NAME"
              defaultValue={user.first_name}
              onChange={handleChange}
            />
            <TextField
              focused
              sx={{ width: "100%" }}
              name="last_name"
              label="LAST NAME"
              defaultValue={user.last_name}
              onChange={handleChange}
            />
          </Stack>
        </FormControl>
        <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
          <TextField
            focused
            fullWidth
            name="username"
            label="USERNAME"
            defaultValue={user.username}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
          <TextField
            focused
            sx={{ width: "100%" }}
            name="address"
            label="ADDRESS"
            defaultValue={user.address}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
          <TextField
            focused
            sx={{ width: "100%" }}
            name="city"
            label="CITY"
            defaultValue={user.city}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
          <Stack direction="row" spacing={2}>
            <TextField
              focused
              sx={{ width: "100%" }}
              name="state"
              label="STATE"
              defaultValue={user.state}
              onChange={handleChange}
            />
            <TextField
              focused
              sx={{ width: "100%" }}
              type="number"
              name="zipcode"
              label="ZIPCODE"
              defaultValue={user.zipcode}
              onChange={handleChange}
            />
          </Stack>
        </FormControl>
        <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
          <TextField
            fullWidth
            focused
            name="phone_number"
            label="PHONE NUMBER"
            defaultValue={user.phone_number}
            onChange={handleChange}
          />
        </FormControl>
        <CardActions>
          <Button
            variant="contained"
            type="submit"
            size="normal"
            color="success"
            style={{
              fontSize: "15px",
            }}
          >
            Save Changes
          </Button>
          <Button
            variant="contained"
            size="normal"
            onClick={handleCancel}
            style={{
              backgroundColor: "#9e9e9e",
              fontSize: "15px",
            }}
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default AccountEdit;
