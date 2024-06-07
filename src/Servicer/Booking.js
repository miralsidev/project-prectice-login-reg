// import axios from "axios";

// export const BookingServices = async (userData) => {
//     console.log("user data ",userData);
//     console.log("<-------------------api call -------------------->");
//     const booking = await axios.post('http://localhost:5000/Booking/addbookings', userData);
//     console.log("booking ====", booking);
//     return booking
// };
import axios from "axios";

export const BookingServices = async (userData) => {
    
    console.log("<-------------------api call -------------------->",userData);
    const token = localStorage.getItem('token');
    console.log("token",token);
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };
    const booking = await axios.post('http://localhost:5000/Booking/addbookings', userData, config);
    return booking;
};
