import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

const UserProvider = (props) => {
  const [ user, setUser] = useState({})
  const [ loggedIn, setLoggedIn ] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/me')
    .then(response => response.json())
    .then(data => {
      setUser(data)
      if (data.error) {
        console.log(data.error)
        setLoggedIn(false)
      } else {
        setLoggedIn(true)
        console.log("fetching /me")
        console.log({user})
      }
    })
  }, [])

  const signup = (user) => {
      setUser(user)
      setLoggedIn(true)
  }

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
    navigate('/')
  }



  return (
    <UserContext.Provider value={{user, signup, login, logout, loggedIn}}>
        { props.children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider}