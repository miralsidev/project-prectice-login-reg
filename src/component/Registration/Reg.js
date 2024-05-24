import React from 'react'
import { RegistrationServices } from '../../Servicer/Registration';
import { Paper, TextField, Button } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './Reg.css'
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify'
import 'material-react-toastify/dist/ReactToastify.css';

function Reg() {
    const validationSchema = yup.object({
        name: yup.string()
            .required('First Name is required'),
        lastname: yup.string()
            .required('Last Name is required'),
        email: yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });
    const navigate = useNavigate()
    const hasFormSubmit = async (values, { resetForm }) => {
        try {
            console.log("Form data=", values);
            await RegistrationServices({
                fname: values.name,
                lname: values.lastname,
                email: values.email,
                password: values.password
            })

            resetForm();
            navigate('/login');

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
    return (
        <>
            <Formik validationSchema={validationSchema} initialValues={{
                name: '',
                lastname: '',
                email: '',
                password: '',
            }}
                onSubmit={hasFormSubmit} >

                <div className=' main-container-reg'>
                    <div className="container-fluid  reg-main-form">
                        <div className='row justify-content-center'>
                            <div className=' col-sm-10 col-md-8 col-lg-6 col-xl-3 '>
                                <Paper elevation={2} sx={{ width: '100%' }}  >
                                    <Form action="" className='main-form-div'>
                                        <div style={{ display: 'flex', flexDirection: 'column' }} className='gap-3 p-3'>
                                            <p className='text-center fs-3'>Register Account Form</p>
                                            <Field as={TextField} name="name" label="First Name" sx={{ marginBottom: '5px' }} xs={3} />

                                            <ErrorMessage name='name' />

                                            <Field as={TextField} name="lastname" label="Last Name" sx={{ marginBottom: '5px' }} />

                                            <ErrorMessage name='lastname' />

                                            <Field as={TextField} name="email" label="Email Id" sx={{ marginBottom: '5px' }} />

                                            <ErrorMessage name='email' />

                                            <Field as={TextField} name="password" label="Password" sx={{ marginBottom: '5px' }} />

                                            <ErrorMessage name='password' />

                                            <Button variant="contained" color="primary" type="submit" >Register</Button>
                                            <ToastContainer />
                                            <p className=''>Already have an account? <span><Link to="/login">Login In</Link></span></p>
                                        </div>
                                    </Form>
                                </Paper>
                            </div>
                        </div>

                    </div>
                </div>
            </Formik>
        </>
    )
}

export default Reg
