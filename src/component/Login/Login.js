import React from 'react'
import axios from 'axios';
import { Paper, TextField, Button } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './Login.css'

import { loginForm } from '../../Actions/UserAction'

import { ToastContainer, toast } from 'react-toastify'
import 'material-react-toastify/dist/ReactToastify.css';

function Login() {
    const dispatch = useDispatch();

    // const notify = () =>
    const validationSchema = yup.object({

        email: yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const hasFormSubmit = async (values, { resetForm }) => {
        try {
            console.log("Form data=", values);
            dispatch(loginForm(values));
            const response = await axios.post('http://localhost:5000/api/login', {
                email: values.email,
                password: values.password
            });
            localStorage.setItem('token', response.data.token);
            notify()
            resetForm();
            // alert(res.data);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    }
    function notify() {
        toast.success('Login Succesfully..!');
    }
    return (
        <>
            <Formik validationSchema={validationSchema} initialValues={{

                email: '',
                password: '',
            }}
                onSubmit={hasFormSubmit} >

                <div className=' main-container-reg'>
                    <div className="container-fluid d-flex justify-content-center login-form-main">
                        <Paper elevation={2} sx={{ width: '30%' }}  >
                            <Form action="" className='main-form-div'>
                                <div style={{ display: 'flex', flexDirection: 'column' }} className='gap-3 p-3'>
                                    <p className='text-center fs-3'>Login Form</p>

                                    <Field as={TextField} name="email" label="Email Id" sx={{ marginBottom: '5px' }} />

                                    <ErrorMessage name='email' />

                                    <Field as={TextField} name="password" label="Password" sx={{ marginBottom: '5px' }} />

                                    <ErrorMessage name='password' />

                                    <Button variant="contained" color="primary" type="submit" >Login</Button>
                                    <ToastContainer />
                                    <p className=''>Don't have an account? <span><Link to="/">Register Here</Link></span></p>

                                </div>
                            </Form>
                        </Paper>
                    </div>
                </div>
            </Formik>
        </>
    )
}

export default Login
