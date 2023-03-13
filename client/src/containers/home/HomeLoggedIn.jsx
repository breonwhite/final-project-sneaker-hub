import React, { useContext } from "react";
import sneakerpile from "../../images/sneaker-hanging.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Loading from "../Loading";
import { UserContext } from "../../context/User";

const HomeLoggedIn = () => {
  const { user, loggedIn, loading } = useContext(UserContext);

  if (loading && loggedIn) {
    return <Loading />;
  } else {
    return (
      <Box
        style={{
          backgroundImage: `url(${sneakerpile})`,
          backgroundSize: "cover",
          color: "#f5f5f5",
          height: "100vh",
        }}
      >
        <Grid
          container
          direction="column"
          justify="right"
          alignItems="right"
          spacing={2}
          style={{ minHeight: "100vh", width: "80%", margin: "auto" }}
        >
          <Grid item xs={3}>
            <Typography variant="h2" component="div" align="right" gutterBottom>
              Welcome, {user.first_name}!
            </Typography>
          </Grid>
          <Grid item xs={3} align="right">
            <br />
            <Button
              variant="contained"
              href="/signup"
              size="large"
              style={{
                borderRadius: 35,
                backgroundColor: "#039be5",
                padding: "18px 36px",
                fontSize: "25px",
                align: "center",
              }}
            >
              GET STARTED
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default HomeLoggedIn;
