import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Paper, TextField, Button } from '@mui/material';

const Contact = () => {
    return (
        <>
            <NavBar />
            <div>
                <Formik>
                <div className=' main-container-reg'>
                                <div className="container-fluid  reg-main-form">
                                    <div className='row justify-content-center'>
                                        <div className=' '>
                                            <Paper elevation={2} sx={{ width: '100%' }}  >
                                                <Form action="" className='main-form-div'>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }} className='gap-3 p-3'>
                                                     
                                                        <Field as={TextField} name="PlateNo" label="Plate Number" sx={{ marginBottom: '5px' }} xs={3} />

                                                        <ErrorMessage name='PlateNo' />
                                     


                                                        <Field as={TextField} name="Brand" label="Brand" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='Brand' />

                                                        <Field as={TextField} name="Model" label="Model" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='Model' />

                                                        <Field as={TextField} name="Price" label="Price" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='Price' />

                                                        <Field as={TextField} name="Description" label="Description" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='Description' />


                                                        <Field as={TextField} name="mileage" label="mileage" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='mileage' />


                                                        <Field as={TextField} name="AC" label="AC" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='AC' />

                                                        <Field as={TextField} name="Seats" label="Seats" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='Seats' />

                                                   
                                                        <Button variant="contained" color="primary" type="submit" >
                                                            Submit
                                                        </Button>
                                                     

                                                    </div>
                                                </Form>
                                            </Paper>
                                        </div>
                                    </div>

                                </div>
                            </div>
                </Formik>
            </div>
            <Footer />
        </>
    )
}

export default Contact
