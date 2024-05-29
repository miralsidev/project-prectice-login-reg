import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar'
import { Box, Button, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import backgroundImage from '../Images/background.jpeg';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Stack from '@mui/material/Stack';
function Home() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <NavBar />
      <div style={{
        width: '100%',
        height: '60vh', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        zIndex: 0
      }}>
        <div className='' style={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{
            width: 'auto',
            height: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',

            borderRadius: 3,
            position: 'absolute',
            top: '15%',
            // display:'flex',
            zIndex: 1,
            // justifyContent:'center',
            padding: 2,


          }}>
            <Stack sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography textAlign={"center"} variant='h4' sx={{
                color: 'white'
              }}>Start Your Journey</Typography>

              {/* <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, width: '100%', mt: 3 }}> */}
              <Stack sx={{ display: 'flex', flexDirection: 'row', gap: 4, width: '100%', mt: 3, justifyContent: 'center' }}>
                <Stack>
                  <Stack sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography textAlign={"center"} sx={{
                      color: 'white'
                    }}>Start Date</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: 1
                      }} />
                    </LocalizationProvider>
                  </Stack>
                  <Stack sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography textAlign={"center"} sx={{
                      color: 'white'
                    }}>Start Time</Typography>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedValue}
                        label="Age"
                        onChange={handleChange}
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1
                        }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>
                <Stack>
                  <Stack sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography textAlign={"center"} sx={{
                      color: 'white'

                    }}>End Date</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: 1
                      }} />
                    </LocalizationProvider>
                  </Stack>
                  <Stack sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography textAlign={"center"} sx={{
                      color: 'white'
                    }}>End Time</Typography>
                    <FormControl fullWidth >
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedValue}
                        label="Age"
                        onChange={handleChange}
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1,

                        }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>

              </Stack>
            </Stack>
            {/* </Box> */}
          </Box>
        </div>
      </div>



    </>
  )
}

export default Home
