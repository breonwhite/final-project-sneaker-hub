import React, { useContext } from "react";
import sneakerpile from "../../images/home-page-design.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const HomeLoggedOut = () => {
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
            Find your sole mates.
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
              backgroundColor: "#f57c00",
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
};

export default HomeLoggedOut;
