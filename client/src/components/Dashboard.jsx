import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Paper>
          Profile
        </Paper>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper>
              Breakdown Report
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              Current Listings
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper>
              Recent Purchases
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper>
          Oldest Listing
        </Paper>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Dashboard