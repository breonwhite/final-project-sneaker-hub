import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/User';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './containers/Navbar';
import './App.css';

function App() {

  const Home = React.lazy(() => import('./components/Home'));
  const Dashboard = React.lazy(() => import('./components/Dashboard'));
  const Account = React.lazy(() => import('./components/Account'));
  const Listings = React.lazy(() => import('./components/Listings'));
  const ListingNew = React.lazy(() => import('./components/ListingNew'));

  return (
    <div className="App">
    <UserProvider>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}> 
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/signup" element={ <Signup /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/listings/view" element={ <Listings /> } />
        <Route exact path="/listings/new" element={ <ListingNew /> } />
        <Route exact path="/dashboard" element={ <Dashboard /> } />
        <Route exact path="/account" element={ <Account /> } /> 
      </Routes>
      </Suspense>
    </UserProvider>
    </div>
  );
}

export default App;