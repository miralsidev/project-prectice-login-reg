

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { LuFuel } from "react-icons/lu";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { MdLuggage } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import axios from 'axios';

const Payment = () => {
    const location = useLocation();
    const { carData, price, pickupDate, returnDate,bookingId } = location.state;
    console.log("car data = ",carData._id);
    console.log("booking idbookingIdbookingIdbookingIdbookingId ",bookingId);
    const handlePayment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/payment/payment', {
                amount: price,
                currency: "INR",
            });
            const { data } = response;
            if (data && data.data) {
                const order = data.data;

                const options = {
                    key: "rzp_test_b844Ll4SjOeVcJ", // Replace with your Razorpay API Key
                    amount: order.amount,
                    currency: order.currency,
                    order_id: order.orderId,
                    name: "Acme Corp",
                    description: "Car Booking Payment",
                    // image: "https://example.com/your_logo.jpg",
                    handler: async function (response) {
                        try {
                            console.log("response.razorpay_payment_id",response.razorpay_payment_id);
                            const Response = await axios.post('http://localhost:5000/payment/capture_payment', {
                                paymentId: response.razorpay_payment_id,
                                orderId: response.razorpay_order_id,
                                booking_id: bookingId, // assuming carData has the booking ID
                            });
                            console.log("captureResponse.data.success",Response.data);
                            if (Response.data.status === 200) {
                                alert("Payment successful, booking confirmed!");
                            } else {
                                alert("Payment failed, please try again.");
                            }
                        } catch (error) {
                            console.error("Error capturing payment:", error);
                            alert("Payment failed, please try again.");
                        }
                    },

                    // prefill: {
                    //     name: "Gaurav Kumar",
                    //     email: "gaurav.kumar@example.com",
                    // },
                    theme: {
                        color: '#6D4A56',
                    },
                };
                const rzp = new window.Razorpay(options);
                rzp.open();
            }
        } catch (error) {
            console.error("Error initiating payment:", error);
        }
    };

    return (
        <div className='row justify-content-center d-flex pt-5'>
            <div className='col-4 border'>
                <img
                    src={`http://localhost:5000/${carData?.path}`}
                    alt={`car-${carData?.brand}`}
                    className="img-fluid"
                />
                <h3>{carData?.brand}</h3>
                <div className='justify-content-center d-flex'>
                    <div className='gap-5 d-flex'>
                    <p className='fs-3'><LuFuel size={24} /> {carData?.fuel}</p>
                        <p className='fs-3'><TbAirConditioningDisabled size={24} />AC: {carData?.Air_Conditioning_Availability}</p>
                        <p className='fs-3'><MdLuggage size={24} /> {carData?.luggage}</p>
                        <p className='fs-3'><FaUserLarge size={24} /> {carData?.seats}</p>
                    </div>
                </div>
                <p className='fs-3'>Cars Booking Date {pickupDate} to {returnDate}</p>
                <p className='fw-bold fs-3'>Total Amount: Rs.{price}</p>
                <Button type="button" onClick={handlePayment} style={{ background: '#6D4A56', color: 'white' }}>
                    Payment Now
                </Button>
            </div>
        </div>
    );
};

export default Payment;

