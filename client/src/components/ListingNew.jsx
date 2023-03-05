import React, { useState, useContext } from 'react'
import { UserContext } from '../context/User';
import noimageavailble from '../images/no-image-available.png';

const ListingNew = () => {
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
    sold: false,
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
    <div>
      <h1>ListingNew</h1>
      <br />
      <form onSubmit={handleSubmit}>
      <img src={imagePreview} alt="" />
      {/* create sneaker */}
      <label>
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
      </label><br/>


      {/* create listing */}

      <label>
        Size
        <input type="text" name="size" value={listing.size} onChange={handleListingChange} />
      </label><br />

      <label>
        Price
        <input type="number" name="price" value={listing.price} onChange={handleListingChange} />
      </label><br />


      
      
      
      
      <input type="submit" value="Submit" />
      </form>



    </div>
  )
}

export default ListingNew