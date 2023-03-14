import React, { useContext } from 'react'
import { UserContext } from '../context/User';
import HomeLoggedIn from '../containers/home/HomeLoggedIn';
import HomeLoggedOut from '../containers/home/HomeLoggedOut';

const Home = () => {
  const { user, loading, loggedIn } = useContext(UserContext); // Login context from User.jsx

  if (loggedIn) {
    return (
      <HomeLoggedIn user={user} loading={loading} loggedIn={loggedIn} />
    )
  } else
  return (
    <HomeLoggedOut />
  )
}

export default Home