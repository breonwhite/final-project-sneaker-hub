import React, { useState, useContext } from 'react'
import { UserContext } from '../context/User';
import { useTheme } from '@mui/material/styles';
import noimageavailble from '../images/no-image-available.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';



const ListingNew = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const form = () => {
    if (activeStep = 0) {
      return (
        `<label>
        Name
        <input type="text" name="name" value={sneaker.name} onChange={handleSneakerChange} />
      </label><br/>
      <label>
        Colorway
        <input type="text" name="colorway" value={sneaker.colorway} onChange={handleSneakerChange} />
      </label><br/>
      <label>
        Description
        <input type="text" name="description" value={sneaker.description} onChange={handleSneakerChange} />
      </label><br/>
      <label>
        Release Date
        <input type="date" name="release_date" value={sneaker.release_date} onChange={handleSneakerChange} />
      </label><br/>
      <label>
        Image
        <input type="text" name="image" value={sneaker.image} onChange={handleImageChange}  />
      </label><br/>
      <label>
        Retail Price
        <input type="text" name="retail_price" value={sneaker.retail_price} onChange={handleSneakerChange} />
      </label><br/>`
      )
    } else if (activeStep = 1) {
      return (
        `Return code`
      )
    }
  }


  const [imagePreview, setImagePreview] = useState(noimageavailble);
  const [sneaker, setSneaker] = useState({
    name: '',
    colorway: '',
    description: '',
    release_date: '',
    image: '',
    retail_price: '',
  });
  const [listing, setListing] = useState({
    price: '',
    size: '',
  });

  async function createListing(sneaker, listing) {
    const response = await fetch('/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
    return data;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await createListing(sneaker, listing);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };




  
  // const handleSubmit = (e) => {
    
    
    
    
  //   e.preventDefault()
  //   console.log(imageFile)
  //   const formData = new FormData();
  //   formData.append("image", imageFile);
  //   console.log(formData.url)
  //   console.log(sneaker)
  //   console.log(listing)
  // }

  const handleSneakerChange = (e) => {
    setSneaker(sneaker => ({
      ...sneaker,
      [e.target.name] : e.target.value
    }));
  };

  const handleListingChange = (e) => {
    setListing(listing => ({
      ...listing,
      [e.target.name] : e.target.value
    }));
  };

  const handleImageChange = (e) => {
    setImagePreview(e.target.value)
    handleSneakerChange(e)
  }
  

  return (
    <Box style={{ backgroundSize: "cover", height: "100%", color: "#f5f5f5"}}>
      <Grid container direction="column" justify="center" spacing={2} style={{ minHeight: '100vh', width: '90%', margin: 'auto', padding: '10px' }}>
          <Grid item xs={3}>
          <Card sx={{ display: 'flex', width: '100%' }}>
            <CardMedia
              component="img"
              sx={{ width: 250 }}
              image={ sneaker.image? imagePreview : noimageavailble}
              alt="Live from space album cover"
            />
              <Box sx={{ width: '100%' }}>
                <form onSubmit={handleSubmit}>
                
                  <FormControl sx={{ m: 1, mt: 3, width: '95%', padding: '10px' }}>
                  <Typography variant="overline" gutterBottom align="left">
        Sneaker Details
      </Typography>
                <TextField
                  type="text"
                  name="name"
                  value={sneaker.name}
                  onChange={handleSneakerChange}
                  label="Sneaker Name"
                /><br/>
                <TextField
                  type="text"
                  name="colorway" 
                  value={sneaker.colorway} 
                  onChange={handleSneakerChange}
                  label="Colorway"
                /><br/>
                <TextField
                  type="text"
                  name="description"
                  value={sneaker.description}
                  onChange={handleSneakerChange}
                  label="Description"
                /><br/>
                <Typography variant="caption" gutterBottom align="left">
                  Release Date
                </Typography>

                <TextField required type="date" name="release_date" value={sneaker.release_date} onChange={handleSneakerChange}/>
                <br/>
                <TextField label="Sneaker Image URL" type="text" name="image" value={sneaker.image} onChange={handleImageChange}/>
                <br/>
                <TextField label="Retail Price" type="number" name="retail_price" value={sneaker.retail_price} onChange={handleSneakerChange} />
                <br/>
                <TextField label="Size" type="text" name="size" value={listing.size} onChange={handleListingChange} />
                <br/>
                <TextField label="Listing Price" type="number" name="price" value={listing.price} onChange={handleListingChange} />
                <br/>
                <input type="submit" value="Submit" />
                </FormControl>






                </form>
              </Box>
          </Card>
          </Grid>
        </Grid>
    </Box>
    // <div>
    //   <h1>ListingNew</h1>
    //   <br />
    //   <form onSubmit={handleSubmit}>
    //   <img src={imagePreview} alt="" />
    //   {/* create sneaker */}
      


    //   {/* create listing */}

    //   <label>
    //     Size
    //     <input type="text" name="size" value={listing.size} onChange={handleListingChange} />
    //   </label><br />

    //   <label>
    //     Price
    //     <input type="number" name="price" value={listing.price} onChange={handleListingChange} />
    //   </label><br />


      
      
      
      
    //   <input type="submit" value="Submit" />
    //   </form>



    // </div>
  )
}

export default ListingNew