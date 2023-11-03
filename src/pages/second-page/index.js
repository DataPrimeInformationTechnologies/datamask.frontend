// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'

const SecondPage = () => {
  const [dbType, setDbType] = useState("postgresql");

  const handleChange = (event) => {
    setDbType(event.target.value);
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Create Database Configuration'></CardHeader>
          <CardContent>
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">DB Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dbType}
          label="DB Type"
          onChange={handleChange}
        >
          <MenuItem value="postgresql">PostgreSQL</MenuItem>
          <MenuItem value="oracle">Oracle</MenuItem>
          <MenuItem value="mssql">MS SQL</MenuItem>
        </Select>
      </FormControl>
    </Box>
            <Typography sx={{ mb: 2 }}>Please Select Database Type</Typography>
            <Typography>
              In progress
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SecondPage
