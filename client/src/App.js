import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Account from './components/Account';
import Listing from './components/Listing';
import Listings from './components/Listings';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Purchases from './components/Purchases';
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/signup" element={ <Signup /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/listings" element={ <Listings /> } />
      <Route exact path="/listings/:id" element={ <Listing /> } />
      <Route exact path="/purchases" element={ <Purchases /> } />
      <Route exact path="/account/:id" element={ <Account /> } />
      <Route exact path="/profile/:id" element={ <Profile /> } />
      <Route exact path="/shop" element={ <Shop /> } />
     </Routes>
    </div>
  );
}

export default App;
