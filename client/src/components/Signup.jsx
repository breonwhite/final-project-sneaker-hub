import React, { useState, useContext } from "react";
import { UserContext } from "../context/User";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import concrete4 from "../images/concrete-4.jpg";

const Signup = () => {
  const [errorsList, setErrorsList] = useState();
  const { signup } = useContext(UserContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      user: {
        email: user.email,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: user.phone_number,
        address: user.address,
        city: user.city,
        state: user.state,
        zipcode: user.zipcode,
        password: user.password,
        password_confirmation: user.password_confirmation,
      },
    };
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data);
          console.log(newUser);
          signup(data);
        } else {
          setUser({
            email: "",
            username: "",
            first_name: "",
            last_name: "",
            phone_number: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
            password: "",
            password_confirmation: "",
          });
          const errorsLi = data.errors.map((e) => (
            <Alert key={e} severity="error">
              {e}
            </Alert>
          ));
          setErrorsList(errorsLi);
        }
      });
    console.log(user);
  };

  return (
    <Box
      style={{
        backgroundSize: "cover",
        height: "100vh",
        backgroundColor: "#3ccce5"
      }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh", width: "70%", margin: "auto" }}
      >
        <Grid item xs={3}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h4" gutterBottom>
              Join the #1 Sneaker Community
            </Typography>
            <Card
              sx={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#eeeeee",
              }}
              elevation={24}
            >
              <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
                <Stack direction="row" spacing={2}>
                  <TextField
                    sx={{ width: "100%" }}
                    name="first_name"
                    label="First Name"
                    value={user.first_name}
                    onChange={handleChange}
                  />
                  <TextField
                    sx={{ width: "100%" }}
                    name="last_name"
                    label="Last Name"
                    value={user.last_name}
                    onChange={handleChange}
                  />
                </Stack>
              </FormControl>
              <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
                <TextField
                  fullWidth
                  sx={{ mt: 2, mr: 1 }}
                  name="username"
                  label="Username"
                  value={user.username}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
                <TextField
                  fullWidth
                  name="password_confirmation"
                  label="Password Confirmation"
                  type="password"
                  value={user.password_confirmation}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
                <TextField
                  sx={{ width: "100%" }}
                  name="address"
                  label="Address"
                  value={user.address}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
                <TextField
                  sx={{ width: "100%" }}
                  name="city"
                  label="City"
                  value={user.city}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
                <Stack direction="row" spacing={2}>
                  <TextField
                    sx={{ width: "100%" }}
                    name="state"
                    label="State"
                    value={user.state}
                    onChange={handleChange}
                  />
                  <TextField
                    sx={{ width: "100%" }}
                    type="number"
                    name="zipcode"
                    label="Zipcode"
                    value={user.zipcode}
                    onChange={handleChange}
                  />
                </Stack>
              </FormControl>
              <FormControl fullWidth sx={{ width: "100%", mt: 2, mr: 1 }}>
                <TextField
                  fullWidth
                  name="phone_number"
                  label="Phone Number"
                  value={user.phone_number}
                  onChange={handleChange}
                />
              </FormControl>
              {errorsList ? (
                <FormControl fullWidth sx={{ width: "100%", mt: 1, mr: 1 }}>
                  <Stack sx={{ width: "100%" }} spacing={1}>
                    {errorsList}
                  </Stack>
                </FormControl>
              ) : (
                <FormControl
                  fullWidth
                  sx={{ width: "100%", mt: 2, mr: 1 }}
                  align="center"
                >
                  <Typography variant="caption" display="block" gutterBottom>
                    Already have an account?{" "}
                    <Link exact="true" to="/login">
                      Login here.
                    </Link>
                  </Typography>
                </FormControl>
              )}
            </Card><br/>
            <Button
              variant="contained"
              type="submit"
              size="normal"
              style={{
                fontSize: "15px",
                background: "#212121"
              }}
            >
              Create Your Account
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>

    // <div>
    //   <h1>Signup</h1>

    //   <form onSubmit={handleSubmit}>

    //   <label>
    //   First Name:
    //   <input type="text" name="first_name" value={user.first_name} onChange={handleChange} />
    //   </label>
    //   <br />

    //   <label>
    //   Last Name:
    //   <input type="text" name="last_name" value={user.last_name} onChange={handleChange} />
    //   </label>
    //   <br />

    //   <label>
    //   Address:
    //   <input type="text" name="address" value={user.address} onChange={handleChange} />
    //   </label>
    //   <br />

    //   <label>
    //   City:
    //   <input type="text" name="city" value={user.city} onChange={handleChange} />
    //   </label>
    //   <br />

    //   <label>
    //   State:
    //   <input type="text" name="state" value={user.state} onChange={handleChange} />
    //   </label>
    //   <br />

    //   <label>
    //   Zip Code:
    //   <input type="text" name="zipcode" value={user.zipcode} onChange={handleChange} />
    //   </label>
    //   <br />

    //   <label>
    //  Phone Number:
    //  <input type="text" name="phone_number" value={user.phone_number} onChange={handleChange} />
    //  </label>
    //   <br />

    //   <label>
    //     Email:
    //     <input type="text" name="email" value={user.email} onChange={handleChange} />
    //   </label>
    //   <br />

    //   <label>
    //     Username:
    //     <input type="text" name="username" value={user.username} onChange={handleChange} />
    //   </label>
    //   <br />

    //   <label>
    //     Password:
    //     <input type="text" name="password" value={user.password} onChange={handleChange} />
    //   </label>
    //   <br />

    //   <label>
    //     Password Confirmation:
    //     <input type="text" name="password_confirmation" value={user.password_confirmation} onChange={handleChange} />
    //   </label>
    //   <br />

    //   <input type="submit" value="Submit" />

    //   </form>
    //   { errorsList ?
    //     <FormControl fullWidth sx={{ width: '100%', mt: 1, mr: 1 }}>
    //       <Stack sx={{ width: '100%' }} spacing={1}>
    //         {errorsList}
    //       </Stack>
    //     </FormControl> :
    //     <FormControl fullWidth sx={{ width: '100%', mt: 2, mr: 1 }} align="center">
    //       <Typography variant="caption" display="block" gutterBottom>
    //         Already have an account? <Link exact="true" to="/login">Login here.</Link>
    //       </Typography>
    //     </FormControl>
    //   }
    //   </div>
  );
};

export default Signup;
