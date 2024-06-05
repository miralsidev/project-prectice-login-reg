import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Paper, TextField, Button } from '@mui/material';
import * as yup from 'yup';
import { MdLocationOn } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { ContactServices } from '../../Servicer/Contact';
import { ToastContainer, toast } from 'react-toastify'
const Contact = () => {
    const validationSchema = yup.object({
        Name:yup.string().required('Name is required'),
        Email: yup.string()
        .email('Invalid email address')
        .required('Email is required'),
        Message:yup.string().required('Message is required')
    })
    const hasFormSubmit = async(values,{resetForm}) =>{
        try {
            console.log("form data = ",values);
            const res = await ContactServices({
                Name:values.Name,
                Email:values.Email,
                Message:values.Message
            })
            resetForm();
            const data = res.data
            if(data.status === 400)
                {
                    toast.error(data.message || 'Something Went Wrong');
                }
                else if(data.status === 500){
                    toast.error(data.message || 'Internal server error.');
                }
                else if(data.status === 200){
                    toast.success(data.message || 'Internal server error.');
                }
                else{
                    toast.error('An unexpected error occurred.');
                }
        } catch (error) {
            
            console.error('There was an error submitting the form!', error);
        }
    }
    return (
        <>
            <NavBar />
            <div className=' row d-flex gap-5 justify-content-center pt-5 w-100'>
                <div className="card " style={{ width: "18rem" }}>
                    <div className="card-body ">
                        <h2 className="card-title"><MdLocationOn /></h2>
                        <h4 className="card-subtitle mb-2 text-muted">OUR MAIN OFFICE</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h2 className="card-title"><FaPhoneSquare /></h2>
                        <h4 className="card-subtitle mb-2 text-muted">Phone Number</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h2 className="card-title"><FaFax /></h2>
                        <h4 className="card-subtitle mb-2 text-muted">Fax</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h2 className="card-title"><MdAttachEmail /></h2>
                        <h4 className="card-subtitle mb-2 text-muted">Email</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        Name:'',
                        Email:'',
                        Message:''
                    }}  
                    onSubmit={hasFormSubmit}
                    
                >
                    <div className=' main-container-reg'>
                        <div className=" reg-main-form ">
                            <div className='row'>
                                <div className='justify-content-center d-flex'>
                                    {/* col-12 col-lg-4 */}
                                    <Paper elevation={2} className='col-sm-10 col-md-8 col-lg-6 col-xl-3 '>
                                        <p className='d-flex justify-content-center fs-4 pt-3'>Drop Us A Message</p>
                                        <Form action="" className='main-form-div '>
                                            <div style={{ display: 'flex', flexDirection: 'column' }} className='gap-3 p-3'>

                                                <Field as={TextField} name="Name" label="Name" sx={{ marginBottom: '5px' }} />

                                                <ErrorMessage name='Name' />

                                                <Field as={TextField} name="Email" label="Email Address" sx={{ marginBottom: '5px' }} />

                                                <ErrorMessage name='Email' />

                                                <Field as={TextField} name="Message" label="Write Us A Message" sx={{ marginBottom: '5px' }} />

                                                <ErrorMessage name='Message' />

                                                <Button type="submit" style={{ background: '#6D4A56', color: 'white' }} >
                                                    Submit
                                                </Button>
                                                <ToastContainer />
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
