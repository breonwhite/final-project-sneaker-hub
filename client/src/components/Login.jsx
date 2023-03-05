import React, { useState, useContext } from 'react'
import { UserContext } from '../context/User';
import TextField from '@mui/material/TextField';


import Autocomplete from '@mui/material/Autocomplete';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ errorsList, setErrorsList ] = useState();

  const {login} = useContext(UserContext); // Login context from User.jsx

  const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => {
            if (response.ok) {
                response.json()
                .then(user => {
                    login(user)
                    navigate('/')
                })
            } else {
                response.json()
                .then(json => {
                    const errLi = <Alert severity="error">{json.error}</Alert>
                    setErrorsList(errLi)
                })
            }
        })
    }
  

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <label>
        Email:
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
      
        <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Submit" />

      </form>
      <FormControl fullWidth sx={{ width: '100%', mt: 1, mr: 1 }}>
        <Stack sx={{ width: '100%' }} spacing={1}>
          { errorsList }
        </Stack>
      </FormControl>
    </div>
  )
}

export default Login