import React, { useState, useContext } from "react";
import { UserContext } from "../context/User";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import concrete3 from "../images/concrete-3.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import Loading from "../containers/Loading";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.h3,
  backgroundColor: "backdropBackground",
  padding: theme.spacing(1),
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorsList, setErrorsList] = useState();

  const { login } = useContext(UserContext); // Login context from User.jsx

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        response
          .json()
          .then((user) => {
            login(user);
          })
          .then(navigate("/"));
      } else {
        response.json().then((json) => {
          const errLi = <Alert severity="error">{json.error}</Alert>;
          setErrorsList(errLi);
        });
      }
    });
  };

  return (
    <Box
      style={{
        backgroundImage: `url(${concrete3})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <Grid
        container
        direction="column"
        justify="center"
        spacing={2}
        style={{ minHeight: "100vh", width: "50%", margin: "auto" }}
      >
        <Grid item xs={3}>
          <Div align="left">WELCOME BACK .</Div>
          <br />
          <form onSubmit={handleSubmit}>
            <Card sx={{ width: "100%", padding: "10px" }} elevation={24}>
              <FormControl fullWidth sx={{ width: "100%", mt: 1, mr: 1 }}>
                <Stack direction="column" spacing={2}>
                  <TextField
                    sx={{ width: "100%" }}
                    type="email"
                    name="email"
                    label="Email Adress"
                    value={email}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    sx={{ width: "100%" }}
                    type="password"
                    name="password"
                    label="Password"
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>
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
                    New around here?{" "}
                    <Link exact="true" to="/signup">
                      Create an account
                    </Link>
                  </Typography>
                </FormControl>
              )}
            </Card>
            <br />
            <Button
              variant="contained"
              type="submit"
              size="large"
              style={{
                borderRadius: 35,
                backgroundColor: "#f57c00",
                padding: "18px 36px",
                fontSize: "18px",
              }}
            >
              Log into your account
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
