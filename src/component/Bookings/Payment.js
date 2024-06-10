import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LuFuel } from "react-icons/lu";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { Button, Modal, Box } from '@mui/material';
import { MdLuggage } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
const Payment = () => {
    const location = useLocation();
    const { carData, price, pickupDate, returnDate,bookingId } = location.state;
    const [invoiceData, setInvoiceData] = useState(null);
    const [showInvoice, setShowInvoice] = useState(false);
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
                    image: "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
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
                                toast.success("Payment successful, booking confirmed!");
                                // generateInvoice(carData, price, pickupDate, returnDate, bookingId);
                                setInvoiceData({ carData, price, pickupDate, returnDate, bookingId });
                                setShowInvoice(true);
                            } else {
                                alert("Payment failed, please try again.");
                            }
                        } catch (error) {
                            console.error("Error capturing payment:", error);
                            alert("Payment failed, please try again.");
                        }
                    },
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
    const generateInvoice = async () => {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 300]);
        const { width, height } = page.getSize();

        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

        page.drawText('Invoice', {
            x: 50,
            y: height -50,
            size: 24,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        });

        // page.drawText(`Booking ID: ${bookingId}`, { x: 50, y: height - 80, size: 12, font: timesRomanFont });
        // page.drawText(`Car: ${carData.brand}`, { x: 50, y: height - 100, size: 12, font: timesRomanFont });
        // page.drawText(`Fuel: ${carData.fuel}`, { x: 50, y: height - 120, size: 12, font: timesRomanFont });
        // page.drawText(`AC: ${carData.Air_Conditioning_Availability}`, { x: 50, y: height - 140, size: 12, font: timesRomanFont });
        // page.drawText(`Luggage: ${carData.luggage}`, { x: 50, y: height - 160, size: 12, font: timesRomanFont });
        // page.drawText(`Seats: ${carData.seats}`, { x: 50, y: height - 180, size: 12, font: timesRomanFont });
        // page.drawText(`Pickup Date: ${pickupDate}`, { x: 50, y: height - 200, size: 12, font: timesRomanFont });
        // page.drawText(`Return Date: ${returnDate}`, { x: 50, y: height - 220, size: 12, font: timesRomanFont });
        // page.drawText(`Total Amount: Rs.${price}`, { x: 50, y: height - 240, size: 12, font: timesRomanFont });
        page.drawText(`Booking ID: ${invoiceData.bookingId}`, { x: 50, y: height - 80, size: 12, font: timesRomanFont });
        page.drawText(`Car: ${invoiceData.carData.brand}`, { x: 50, y: height - 100, size: 12, font: timesRomanFont });
        page.drawText(`Fuel: ${invoiceData.carData.fuel}`, { x: 50, y: height - 120, size: 12, font: timesRomanFont });
        page.drawText(`AC: ${invoiceData.carData.Air_Conditioning_Availability}`, { x: 50, y: height - 140, size: 12, font: timesRomanFont });
        page.drawText(`Luggage: ${invoiceData.carData.luggage}`, { x: 50, y: height - 160, size: 12, font: timesRomanFont });
        page.drawText(`Seats: ${invoiceData.carData.seats}`, { x: 50, y: height - 180, size: 12, font: timesRomanFont });
        page.drawText(`Pickup Date: ${invoiceData.pickupDate}`, { x: 50, y: height - 200, size: 12, font: timesRomanFont });
        page.drawText(`Return Date: ${invoiceData.returnDate}`, { x: 50, y: height - 220, size: 12, font: timesRomanFont });
        page.drawText(`Total Amount: Rs.${invoiceData.price}`, { x: 50, y: height - 240, size: 12, font: timesRomanFont });
        const pdfBytes = await pdfDoc.save();

        // Create a blob from the PDF bytes and open it in a new window
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'invoice.pdf';
        link.click();
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
                    <p className=''><LuFuel size={24} /> {carData?.fuel}</p>
                        <p className=''><TbAirConditioningDisabled size={24} />AC: {carData?.Air_Conditioning_Availability}</p>
                        <p className=''><MdLuggage size={24} /> {carData?.luggage}</p>
                        <p className=''><FaUserLarge size={24} /> {carData?.seats}</p>
                    </div>
                </div>
                <p className=''>Cars Booking Date {pickupDate} to {returnDate}</p>
                <p className='fw-bold fs-3'>Total Amount: Rs.{price}</p>
                <Button type="button" onClick={handlePayment} style={{ background: '#6D4A56', color: 'white' }}>
                    Payment Now
                </Button>
                <ToastContainer />
            </div>

            <Modal open={showInvoice} onClose={() => setShowInvoice(false)}>
                <Box sx={{ width: '50%', margin: 'auto', marginTop: '10%', backgroundColor: 'white', padding: 4 }}>
                    {invoiceData && (
                        <>
                            <h2>Invoice</h2>
                            <p>Booking ID: {invoiceData.bookingId}</p>
                            <p>Car: {invoiceData.carData.brand}</p>
                            <p>Fuel: {invoiceData.carData.fuel}</p>
                            <p>AC: {invoiceData.carData.Air_Conditioning_Availability}</p>
                            <p>Luggage: {invoiceData.carData.luggage}</p>
                            <p>Seats: {invoiceData.carData.seats}</p>
                            <p>Pickup Date: {invoiceData.pickupDate}</p>
                            <p>Return Date: {invoiceData.returnDate}</p>
                            <p>Total Amount: Rs.{invoiceData.price}</p>
                            <Button type="button" onClick={generateInvoice} style={{ background: '#6D4A56', color: 'white' }}>
                                Download Invoice
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
        
    );
    
};

export default Payment;

