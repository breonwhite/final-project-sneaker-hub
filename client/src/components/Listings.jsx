import React, { useState, useContext } from 'react'
import { UserContext } from '../context/User';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListingsItem from '../containers/listings/ListingsItem';


const Listings = () => {
  const { user, listings } = useContext(UserContext); // Listing context from User.jsx

  const currentUserListings = listings.filter(l => l.seller_id === user.id && l.sold === false);
  const otherListings = listings.filter(l => l.seller_id !== user.id && l.sold === false);
  
  
  return (
    <div>
      <h1>Listings</h1><br/>
      <h2>My Current Listings</h2><br/>
      <ul>
      { currentUserListings.map((l, index) => 
        <li key={ index }>{l.price}, {l.size}, {l.sneaker.name}</li> 
      )}
      </ul>
      <br/>
      <h2>Current Listings</h2><br/>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          { otherListings.map((l, index) => 
          <div key={ index }>
            <ListingsItem listing={l} />
            <Divider />
            </div>
          )}
        </List>
      {/* <ul>
        { otherListings.map((l, index) => 
          <li key={ index }>{l.price}, {l.size}, {l.sneaker.name}</li> 
        )}
        </ul> */}
      



    </div>
  )
}

export default Listings