import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [listings, setListings] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  async function deleteListing(listing) {
    console.log(`Listing to Delete: ${listing}`);
    const response = await fetch(`/listings/${listing.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setListings(listings.filter((l) => l.id !== listing.id));
      return data;
    } else {
      const errors = await response.json();
      console.log(errors);
    }
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
        setListings,
        purchaseListing,
        editListing,
        deleteListing,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
