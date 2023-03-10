import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [listings, setListings] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function purchaseListing(listing) {
    const response = await fetch("/purchases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listing_id: listing.id,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      setListings(data.listings)
      console.log(data);
      return data;
    } else {
      const errors = await response.json();
      console.log(errors);
    }
  }

  useEffect(() => {
    async function fetchCurrentUser() {
      const resp = await fetch("/me");
      const data = await resp.json();
      if (data.error) {
        console.log(data.error);
        setLoggedIn(false);
      } else {
        setUser(data);
        fetchListings();
        setLoggedIn(true);
      }
    }
    fetchCurrentUser();
  }, []);

  const fetchListings = () => {
    fetch("/listings")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setListings(data);
          setLoading(false);
        }
      });
  };

  async function purchaseListing(listing) {
    const response = await fetch("/purchases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listing_id: listing.id,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      // Fetch the updated listings data
      const listingsResponse = await fetch("/listings");
      const listingsData = await listingsResponse.json();
      setListings(listingsData);
      console.log(data);
      return data;
    } else {
      const errors = await response.json();
      console.log(errors);
    }
  }
  

  async function editListing(listing, updatedListing) {
    console.log(listing);
    const response = await fetch(`/listings/${listing.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedListing),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setListings(
        listings.map((l) => (l.id === listing.id ? data.listing : l))
      );
      return data;
    } else {
      const errors = await response.json();
      console.log(errors);
    }
  }

  function destroyListing(listing) {
    fetch(`/listings/${listing.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setListings(listings.filter((l) => l.id !== listing.id));
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }

  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser({});
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        loading,
        listings,
        loggedIn,
        fetchListings,
        setListings,
        purchaseListing,
        editListing,
        destroyListing,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
