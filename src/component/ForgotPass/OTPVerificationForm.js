import axios from 'axios';
import { Paper, Button } from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';
function OTPVerificationForm() {
    const [timer, setTimer] = useState(60);
const [isResendDisabled, setIsResendDisabled] = useState(true);
    useEffect(() => {
        if (timer > 0) {
            const intervalId = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }
         else {
            setIsResendDisabled(false);
        }
    }, [timer]);
    const validationSchema = yup.object({
        OTP: yup.string()
            .length(4, 'OTP must be 4 digits')
            .required('OTP is required'),
    });

    const navigate = useNavigate()

    const email = localStorage.getItem('email') || '';

    if (!email) {
        console.error('No email found in local storage');

    }
    const hasFormSubmit = async (values) => {
        try {
            console.log("data  ====", values);
            const response = await axios.post('http://localhost:5000/api/userForgotPasswordOtp', {
                otp: values.OTP,
                email: values.email,
            });
            console.log("res==", response);
            navigate('/UpdatePassword');

        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    }
       const handleResendOtp = () => {
            setTimer(60);
            setIsResendDisabled(true);
          
          };
    return (
        <>
            <Formik validationSchema={validationSchema} initialValues={{
                OTP: '',
                email: email
            }}
                onSubmit={hasFormSubmit} >
                {({ values, setFieldValue }) => (
                    <div className=' main-container-reg'>
                        <div className="container-fluid d-flex justify-content-center login-form-main">
                            <Paper elevation={2} sx={{ width: '400px' }}  >
                                <Form action="" className='main-form-div d-flex justify-content-center'>
                                    <div style={{ display: 'flex', flexDirection: 'column' }} className='gap-3 p-3'>
                                        <p className='text-center fs-3'>Verification</p>
                                        <p className='text-center fs-8'>Enter Valid OTP</p>
                                        <OtpInput

                                            value={values.OTP}
                                            onChange={(otp) => setFieldValue('OTP', otp)}
                                            numInputs={4}
                                            inputStyle={{
                                                width: 50,
                                                height: 50,
                                            }}
                                            renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}

                                            renderInput={(props) => <input {...props} />}
                                        />
                                        <ErrorMessage name='OTP' />

                                        <Button variant="contained" color="primary" type="submit" >Verify</Button>
                                        <p>Resend OTP in = {timer}</p>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={handleResendOtp}
                                            disabled={isResendDisabled}
                                        >
                                            Resend OTP
                                        </Button>
                                    </div>
                                </Form>
                            </Paper>
                        </div>
                    </div>
                )}
            </Formik>

        </>
    )
}

export default OTPVerificationForm

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Paper, Button } from "@mui/material";
// import { Formik, Form, ErrorMessage } from "formik";
// import OtpInput from "react-otp-input";
// import { useNavigate } from "react-router-dom";
// import * as yup from "yup";

// function OTPVerificationForm() {
//   const [timer, setTimer] = useState(60);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);

//   useEffect(() => {
//     if (timer > 0) {
//       const intervalId = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);

//       return () => clearInterval(intervalId);
//     } else {
//       setIsResendDisabled(false);
//     }
//   }, [timer]);

//   const validationSchema = yup.object({
//     OTP: yup
//       .string()
//       .length(4, "OTP must be 4 digits")
//       .required("OTP is required"),
//   });

//   const navigate = useNavigate();

//   const email = localStorage.getItem("email") || "";

//   if (!email) {
//     console.error("No email found in local storage");
//   }

//   const handleFormSubmit = async (values) => {
//     try {
//       console.log("data  ====", values);
//       const response = await axios.post(
//         "http://localhost:5000/api/userForgotPasswordOtp",
//         {
//           otp: values.OTP,
//           email: values.email,
//         }
//       );
//       console.log("res==", response);
//       navigate("/UpdatePassword");
//     } catch (error) {
//       console.error("There was an error submitting the form!", error);
//     }
//   };

//   const handleResendOtp = () => {
//     setTimer(60);
//     setIsResendDisabled(true);
  
//   };

//   return (
//     <>
//       <Formik
//         validationSchema={validationSchema}
//         initialValues={{
//           OTP: "",
//           email: email,
//         }}
//         onSubmit={handleFormSubmit}
//       >
//         {({ values, setFieldValue }) => (
//           <div className="main-container-reg">
//             <div className="container-fluid d-flex justify-content-center login-form-main">
//               <Paper elevation={2} sx={{ width: "400px" }}>
//                 <Form
//                   action=""
//                   className="main-form-div d-flex justify-content-center"
//                 >
//                   <div
//                     style={{ display: "flex", flexDirection: "column" }}
//                     className="gap-3 p-3"
//                   >
//                     <p className="text-center fs-3">Verification</p>
//                     <p className="text-center fs-8">Enter Valid OTP</p>
//                     <OtpInput
//                       value={values.OTP}
//                       onChange={(otp) => setFieldValue("OTP", otp)}
//                       numInputs={4}
//                       inputStyle={{
//                         width: 50,
//                         height: 50,
//                       }}
//                       renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
//                       renderInput={(props) => <input {...props} />}
//                     />
//                     <ErrorMessage name="OTP" />
//                     <p>Resend OTP in = {timer} seconds</p>
//                     <Button variant="contained" color="primary" type="submit">
//                       Verify
//                     </Button>
//                     <Button
//                       variant="contained"
//                       color="secondary"
//                       onClick={handleResendOtp}
//                       disabled={isResendDisabled}
//                     >
//                       Resend OTP
//                     </Button>
//                   </div>
//                 </Form>
//               </Paper>
//             </div>
//           </div>
//         )}
//       </Formik>
//     </>
//   );
// }

// export default OTPVerificationForm;
