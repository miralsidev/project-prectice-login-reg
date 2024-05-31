import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar'
import { Box, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import backgroundImage from '../Images/background.jpeg';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Stack from '@mui/material/Stack';
import axios from "axios";
import Footer from '../Footer/Footer';
function Home() {
  const [selectedValue, setSelectedValue] = useState('');
  const [cars, setCars] = useState([]);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    console.log("----data--==", data);
    data();
  }, []);
  const data = () => {
    axios
      .get("http://localhost:5000/cars/GetData")
      .then((res) => {

        setCars(res.data.reverse()); //reverse ma print karva mate
        console.log("res.data -- get  ====", res.data);
      })
      .catch((error) => {
        console.error("fetching error = = ", error);
      });
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
        marginBottom: '5%',
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
            zIndex: 1,
            padding: 2,
          }}>
            <Stack sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography textAlign={"center"} variant='h4' sx={{
                color: 'white'
              }}>Start Your Journey</Typography>
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
          </Box>
        </div>
      </div>
      <div >
        {cars ? (
          <div className='row gap-4 w-100 d-flex justify-content-center col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-12'>
            {cars.map((cars, index) => (

              <div className="card " style={{ width: "18rem" }}>
                {/* rgb(224 201 206)   background:'#86535D'*/}
                {console.log(`http://localhost:5000/${cars?.path}`)}
                <img
                  src={`http://localhost:5000/${cars.path}`}
                  alt={`car-${index}`}
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">{cars.plate_number}</p>
                  <p>{cars.model}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
    
                </div>
              </div>
            ))}
          </div>


        ) : (
          <p>Loading users...</p>
        )}
      </div>
      <Footer/>



    </>
  )
}

export default Home
