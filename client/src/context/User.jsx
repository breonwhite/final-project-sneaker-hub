import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [listings, setListings] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [statistics, setStatistics] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("/me")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        if (data.error) {
          console.log(data.error);
          setLoggedIn(false);
        } else {
          setLoggedIn(true)
          fetchListings();
          fetchPurchases();
          getStatistics();
          setLoading(false)
        }
    });
  }, []);

  const fetchListings = () => {
    fetch("/listings")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setListings(data);
          console.log(data)
          setLoading(false);
        }
      });
  };

  const getStatistics = () => {
    fetch("/statistics")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setStatistics(data);
          console.log(data);
        }
      });
  };

  const fetchPurchases = () => {
    fetch("/purchases")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(`purchases:`, data);
          setPurchases(data);
          setLoading(false);
        }
      });
  };

  async function createListing(sneaker, listing) {
    const response = await fetch("/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sneaker: sneaker,
        listing: listing,
      }),
    });
    if (!response.ok) {
      const errors = await response.json();
      throw new Error(errors);
    }
    const data = await response.json();
    setListings([...listings, data]);
    return data;
  }

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
      setPurchases([...purchases, data.purchase]);
      fetchListings();
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

  async function editProfile(userUpdates) {
    const response = await fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userUpdates),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setUser(data);
      return data;
    } else {
      const errors = await response.json();
      console.log(errors);
    }
  }

  function destroyListing(listing) {
    fetch(`/listings/${listing.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setListings(listings.filter((l) => l.id !== listing.id));
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  const signup = (user) => {
    setLoading(true)
    console.log("Signing up user: ", user);
    setUser(user);
    console.log("User state updated: ", user);
    fetchListings();
    console.log("Listings state loaded:", listings)
    setLoggedIn(true);
    setLoading(false)
  };

  const login = (user) => {
    setLoading(true);
    console.log("Logging in user: ", user);
    setUser(user);
    console.log("User state: ", user);
    fetchListings();
    console.log("Listings state loaded:", listings)
    setLoggedIn(true);
    setLoading(false);
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
        purchases,
        fetchListings,
        statistics,
        setListings,
        getStatistics,
        createListing,
        setLoading,
        purchaseListing,
        editListing,
        editProfile,
        destroyListing,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
