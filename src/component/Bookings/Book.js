import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Paper, TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BookingServices } from "../../Servicer/Booking";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const Book = () => {
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [duration, setDuration] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decoding JWT token
        setUserName(decodedToken.userId || "");
      } catch (e) {
        console.error("Failed to decode token", e);
      }
    }
  }, []);

  const carData = location.state.car;
  console.log("car-- data ===", carData);

  useEffect(() => {
    if (pickupDate && returnDate) {
      const days = dayjs(returnDate).diff(dayjs(pickupDate), "day");
      setDuration(days);
    } else {
      setDuration(null);
    }
  }, [pickupDate, returnDate]);

  let price = carData?.price * duration;

  const hasFormSubmit = async (values, { resetForm }) => {
    try {
      const res = await BookingServices({
        user_id: userName,
        car_id: carData?._id,
        pickup_Location: values.pickup_Location,
        dropoff_Location: values.dropoff_Location,
        pickup_date: dayjs(pickupDate).format("YYYY-MM-DD"),
        return_date: dayjs(returnDate).format("YYYY-MM-DD"),
        pickup_time: values.pickup_time,
        return_time: values.return_time,
        price: price,
      });
      const data = res.data;
      console.log("-[-res--", res);

      if (data.status === 400) {
        toast.error(data.message || "Something Went Wrong");
      } else if (data.status === 500) {
        toast.error(data.message || "Internal server error.");
      } else if (data.status === 200) {
        // toast.success(data.message || 'Booking Successfully..!!');
        notify(() =>
          navigate("/payment", {
            state: {
              carData,
              price,
              pickupDate: dayjs(pickupDate).format("YYYY-MM-DD"),
              returnDate: dayjs(returnDate).format("YYYY-MM-DD"),
              bookingId: res.data.data._id,
            },
          })
        );
      } else {
        toast.error("An unexpected error occurred.");
      }
      resetForm();
      setPickupDate(null);
      setReturnDate(null);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };
  function notify(callback) {
    toast.success("Booking Successfully..!!", { onClose: callback });
  }
  return (
    <>
      <Formik
        initialValues={{
          pickup_Location: "",
          dropoff_Location: "",
          pickup_time: "",
          return_time: "",
        }}
        onSubmit={hasFormSubmit}
      >
        <div className="mt-5 main-container-reg">
          <div className="justify-content-center d-flex">
            <Paper
              elevation={2}
              className="col-sm-10 col-md-8 col-lg-6 col-xl-3 "
            >
              <p className="d-flex justify-content-center fs-4 pt-3">
                Drop Us A Message
              </p>
              <Form className="main-form-div ">
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="gap-3 p-3"
                >
                  <Field
                    as={TextField}
                    name="pickup_Location"
                    label="Pickup Location"
                    sx={{ marginBottom: "5px" }}
                  />
                  <ErrorMessage name="pickup_Location" />
                  <Field
                    as={TextField}
                    name="dropoff_Location"
                    label="Dropoff Location"
                    sx={{ marginBottom: "5px" }}
                  />
                  <ErrorMessage name="dropoff_Location" />
                  <Stack
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Typography textAlign={"center"} sx={{ color: "Black" }}>
                      Start Date
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={pickupDate}
                        onChange={setPickupDate}
                        minDate={dayjs()}
                        sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          borderRadius: 1,
                        }}
                      />
                    </LocalizationProvider>
                  </Stack>
                  <ErrorMessage name="pickup_date" />
                  <Stack
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Typography textAlign={"center"} sx={{ color: "Black" }}>
                      End Date
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={returnDate}
                        onChange={setReturnDate}
                        minDate={dayjs()}
                        sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          borderRadius: 1,
                        }}
                      />
                    </LocalizationProvider>
                  </Stack>
                  <ErrorMessage name="return_date" />
                  {duration !== null && (
                    <Typography textAlign={"center"} sx={{ color: "Black" }}>
                      {duration} day{duration !== 1 && "s"} selected Total
                      Payment {price}
                    </Typography>
                  )}
                  <Field
                    as={TextField}
                    name="pickup_time"
                    label="Pickup Time"
                    sx={{ marginBottom: "5px" }}
                  />
                  <ErrorMessage name="pickup_time" />
                  <Field
                    as={TextField}
                    name="return_time"
                    label="Return Time"
                    sx={{ marginBottom: "5px" }}
                  />
                  <ErrorMessage name="return_time" />
                  <Button
                    type="submit"
                    style={{ background: "#6D4A56", color: "white" }}
                  >
                    Booking Now
                  </Button>
                  <ToastContainer />
                </div>
              </Form>
            </Paper>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default Book;
