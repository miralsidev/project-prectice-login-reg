import React from 'react'
import { Paper, TextField, Button } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify'
import 'material-react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { UpdatePasswordServices } from '../../Servicer/Registration';

function UpdatePassword() {

  const validationSchema = yup.object({
    password: yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    Cofirmpassword: yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),

  });
  const email = localStorage.getItem('email') || '';
  console.log("email = ", email);

  if (!email) {
    console.error('No email found in local storage');

  }
  const navigate = useNavigate()
  const hasFormSubmit = async (values) => {
    try {
      const res = await UpdatePasswordServices ({
        email: values.email,
        newpassword: values.password,
        conformPassword: values.Cofirmpassword
      });
      console.log("res------------",res);
      const data = res.data
      if(data.status === 400){
        toast.error(data.message || 'Something Went Wrong');
      }
      else{
           notify(() => navigate('/login'));
      }
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  }
  function notify(callback) {
    toast.success('update password succesfully..!', { onClose: callback })
  }
  return (
    <>
      <Formik validationSchema={validationSchema} initialValues={{
        email: email,
        password: '',
        Cofirmpassword: ''
      }}
        onSubmit={hasFormSubmit} >
        <div className=' main-container-reg'>
          <div className="container-fluid d-flex justify-content-center login-form-main">
            <Paper elevation={2} sx={{ width: 'auto' }}  >
              <Form action="" className='main-form-div'>
                <div style={{ display: 'flex', flexDirection: 'column' }} className='gap-3 p-3'>
                  <p className='text-center fs-3'>Choose New Password</p>
                  <Field as={TextField} name="password" label="New Password" sx={{ marginBottom: '5px' }} />
                  <ErrorMessage name='email' />
                  <Field as={TextField} name="Cofirmpassword" label="Cofirm New Password" sx={{ marginBottom: '5px' }} />
                  <ErrorMessage name='email' />
                  <Button variant="contained" color="primary" type="submit" >Reset Password</Button>
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

export default UpdatePassword
