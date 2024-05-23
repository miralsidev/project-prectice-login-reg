import React from 'react'
import axios from 'axios';
import { Paper, TextField, Button } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
// import { ToastContainer, toast } from 'react-toastify'
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
            const response = await axios.post('http://localhost:5000/api/userForgotPasswordEmail', {
                email: values.email,
                // password: values.password
            });
            localStorage.setItem('email', values.email);
            console.log("response=", response);
          
            navigate('/OTPVerificationForm');
            // notify()
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    }
    // function notify() {
    //     toast.success('Login Succesfully..!');
    // }
    return (
        <>
            <Formik validationSchema={validationSchema} initialValues={{
                email: '',
            }}
                onSubmit={hasFormSubmit} >
                <div className=' main-container-reg'>
                    <div className="container-fluid d-flex justify-content-center login-form-main">
                        <Paper elevation={2} sx={{ width: '400px' }}  >
                            <Form action="" className='main-form-div'>
                                <div style={{ display: 'flex', flexDirection: 'column' }} className='gap-3 p-3'>
                                    <p className='text-center fs-3'>Forgot Password</p>
                                    <Field as={TextField} name="email" label="Email Id" sx={{ marginBottom: '5px' }} />
                                    <ErrorMessage name='email' />
                                    <Button variant="contained" color="primary" type="submit" >Get OTP</Button>
                                    {/* <ToastContainer /> */}
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
