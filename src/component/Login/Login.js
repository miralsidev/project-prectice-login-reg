// import React from 'react'
// import axios from 'axios';
// import { Paper, TextField, Link, Button } from '@mui/material';
// import { Formik, Field, Form, ErrorMessage } from 'formik';

// function Login() {
//     return (


//         <>
//             <Formik validationSchema={validationSchema} initialValues={{
//                 name: '',
//                 lastname: '',
//                 email: '',
//                 password: '',
//             }}
//                 onSubmit={hasFormSubmit} >

//                 <div className=' main-container-reg'>
//                     <div className="container-fluid d-flex justify-content-center mt-5">
//                         <Paper elevation={2} sx={{ width: '30%' }}  >
//                             <Form action="" className='main-form-div'>
//                                 <div style={{ display: 'flex', flexDirection: 'column' }} className='gap-3 p-3'>
//                                     <p className='text-center fs-3'>Register Account Form</p>
//                                     <Field as={TextField} name="name" label="First Name" sx={{ marginBottom: '5px' }} xs={3} />
//                                     {/*  */}
//                                     <ErrorMessage name='name' />

//                                     <Field as={TextField} name="lastname" label="Last Name" sx={{ marginBottom: '5px' }} />

//                                     <ErrorMessage name='lastname' />

//                                     <Field as={TextField} name="email" label="Email Id" sx={{ marginBottom: '5px' }} />

//                                     <ErrorMessage name='email' />

//                                     <Field as={TextField} name="password" label="Password" sx={{ marginBottom: '5px' }} />

//                                     <ErrorMessage name='password' />

//                                     <Button variant="contained" color="primary" type="submit">Register</Button>
//                                     <p className=''>Already have an account? <span><Link href="#">Login In</Link></span></p>
//                                 </div>
//                             </Form>
//                         </Paper>
//                     </div>
//                 </div>
//             </Formik>
//         </>
//     )
// }

// export default Login
