
import { Paper, Button } from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'material-react-toastify/dist/ReactToastify.css';
import { OTPVerificationServices } from '../../Servicer/Registration'
import { ForgotPasswordServices } from '../../Servicer/Registration';
function OTPVerificationForm() {
    const [timer, setTimer] = useState(20);
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
            const response = await OTPVerificationServices({
                otp: values.OTP,
                email: values.email,
            })

            console.log("res==", response);
            if (response.data.status === 400) {
                toast.error(response.data.message || 'Something Went Wrong');
            }
            else if (response.data.status === 410) {
                toast.error(response.data.message || 'Something Went Wrong');
            }
            else {
                navigate('/UpdatePassword');

            }

        } catch (error) {
            if (error.response) {
                const status = error.response.status;
                const message = error.response.data.message;

                if (status === 400) {
                    toast.error(message || 'Something Went Wrong');
                }
                else if (status === 500) {
                    toast.error(message || 'Internal server error.');
                } else {
                    toast.error('An unexpected error occurred.');
                }
            }
            console.error('There was an error submitting the form!', error);
        }
    }
    const handleResendOtp = async () => {
        try {
            setTimer(20);
            setIsResendDisabled(true);

            const res = await ForgotPasswordServices({ email });
            const data = res.data;
            console.log("res = ", data);

            if (data.status === 400) {
                toast.error(data.message || 'Something Went Wrong');
            } else {
                // localStorage.setItem('email', email);
                toast.success('OTP has been resent');
            }
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
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
                            <Paper elevation={2} sx={{ width: 'auto' }}  >
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
                                        <ToastContainer />
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


