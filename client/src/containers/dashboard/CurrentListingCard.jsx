import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const CurrentListingCard = ({ listing }) => {
  return (
    // <Grid item width='90%'>
    <Card sx={{ width: '900', display: 'flex' }} elevation={24}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={listing.sneaker.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {listing.sneaker.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
                {`${listing.sneaker.colorway}`} 
            </Typography>
        </CardContent>
      </Box>
    </Card>
    // </Grid>
  )
}

export default CurrentListingCard