import React, { useState, useContext } from "react";
import { UserContext } from "../context/User";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountEdit from "../containers/account/AccountEdit";
import AccountView from "../containers/account/AccountView";
import Unauthorized from "../containers/Unauthorized";
import Loading from "../containers/Loading";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


const Account = () => {
  const { user, editProfile, setUser, loggedIn, loading } = useContext(UserContext); // Login context from User.jsx
  const [successAlert, setSuccessAlert] = React.useState(false);
  const [form, setForm] = useState(false);
  const [errorsList, setErrorsList] = useState();

  const showForm = () => {
    setForm(true);
  };

  const handleAlertClose = () => {
    setSuccessAlert(false);
  };

  const cancelEdit = () => {
    setForm(false);
  };

  const updateUser = (update) => {
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(update),
    })
    .then((response) => response.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data)
          setUser(data);
          setForm(false);
          setSuccessAlert(true);
        } else {
          const errorsLi = data.errors.map((e) => (
            <Alert key={e} severity="error">
              {e}
            </Alert>
          ));
          setErrorsList(errorsLi);
        }
      });
  };

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
        }}
      >
        <Snackbar
          open={successAlert}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={3000}
          message={
            <React.Fragment>
              <AutoAwesomeIcon style={{ verticalAlign: "middle" }} /> Your
              profile has been updated!
            </React.Fragment>
          }
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
            {form ? (
              <AccountEdit
                user={user}
                errorsList={errorsList}
                updateUser={updateUser}
                cancelEdit={cancelEdit}
              />
            ) : (
              <AccountView user={user} showForm={showForm} />
            )}
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default Account;
