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
import CardActions from "@mui/material/CardActions";
import AccountEdit from "../containers/account/AccountEdit";
import AccountView from "../containers/account/AccountView";
import Unauthorized from "../containers/Unauthorized";
import Loading from "../containers/Loading";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Snackbar from '@mui/material/Snackbar';


const Account = () => {
  const { user, editProfile, loggedIn, loading } = useContext(UserContext); // Login context from User.jsx
  const [successAlert, setSuccessAlert] = React.useState(false);
  const [ form, setForm ] = useState(false)

  const showForm = () => {
    setForm(true)
  }

  const handleAlertClose = () => {
    setSuccessAlert(false)
  }

  const updateUser = async (update) => {
    try {
      const data = await editProfile(update);
      console.log(data);
      setForm(false)
      setSuccessAlert(true)
    } catch (error) {
      console.error(error);
    }
  }

  if (loading && loggedIn) {
    return <Loading />;
  } else if (!loggedIn) {
    return <Unauthorized />;
  } else {
  return (
    <Box
      style={{
        // backgroundImage: `url(${mountainimage})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <Snackbar
        open={successAlert}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000}
        message={<React.Fragment><AutoAwesomeIcon style={{ verticalAlign: "middle" }}/> Your profile has been updated!</React.Fragment>}
      />
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh", width: "70%", margin: "auto" }}
      >
        <Grid item xs={3}>
          {
            form? <AccountEdit user={user} updateUser={updateUser} /> : <AccountView user={user} showForm={showForm} />
          }
         
        </Grid>
      </Grid>
    </Box>
  )}
};

export default Account;
