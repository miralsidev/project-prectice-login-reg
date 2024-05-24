import React from 'react'

import { Paper, TextField, Button } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { ForgotPasswordServices } from '../../Servicer/Registration'
import { ToastContainer, toast } from 'react-toastify'
import 'material-react-toastify/dist/ReactToastify.css';
function ForgotPasswordForm() {

    const validationSchema = yup.object({

        email: yup.string()
            .email('Invalid email address')
            .required('Email is required'),

    });
    const navigate = useNavigate()
    const hasFormSubmit = async (values) => {
        try {
            console.log("data  ====", values);
            const res = await ForgotPasswordServices({
                email: values.email,

            });
            const data = res.data
            console.log("res = ", data);
            if (data.status === 400) {
                toast.error(data.message || 'Something Went Wrong');
            }

            else {
                localStorage.setItem('email', values.email);
                navigate('/OTPVerificationForm');
            }

        } catch (error) {

            if (error.response) {
                const status = error.response.status;
                const message = error.response.data.message;

                if (status === 500) {
                    toast.error(message || 'Internal server error.');
                } else {
                    toast.error('An unexpected error occurred.');
                }
            }
            console.error('There was an error submitting the form!', error);
        }
    }

    return (
        <>
            <Formik validationSchema={validationSchema} initialValues={{
                email: '',
            }}
                onSubmit={hasFormSubmit} >
                <div className=' main-container-reg'>
                    <div className="container-fluid d-flex justify-content-center login-form-main">
                        <Paper elevation={2} sx={{ width: 'auto' }}  >
                            <Form action="" className='main-form-div'>
                                <div style={{ display: 'flex', flexDirection: 'column' }} className='gap-3 p-3'>
                                    <p className='text-center fs-3'>Forgot Password</p>
                                    <Field as={TextField} name="email" label="Email Id" sx={{ marginBottom: '5px' }} />
                                    <ErrorMessage name='email' />
                                    <Button variant="contained" color="primary" type="submit" >Get OTP</Button>
                                    <ToastContainer />
                                </div>
                            </Form>
                        </Paper>
                    </div>
                </div>
            </Formik>
        </>
    )
}

export default ForgotPasswordForm
