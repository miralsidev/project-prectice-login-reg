import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <>

            <footer className="text-center text-lg-start text-white mt-4" style={{background:'#6D4A56'}}>
                <div className="container p-4 pb-0">
                    <section>
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">just drive</h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">pages</h6>
                                <p><Link to="#!" className="text-white">home</Link></p>
                                <p><Link to="#!" className="text-white">login</Link></p>
                                <p><Link to="#!" className="text-white">blog</Link></p>
                                <p><Link to="#!" className="text-white">registation</Link></p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Your Account</h6>
                                <p><Link to="#!" className="text-white"></Link></p>
                                <p><Link to="#!" className="text-white">profile</Link></p>
                                <p><Link to="#!" className="text-white">Account</Link></p>
                                <p><Link to="#!" className="text-white">deshbord</Link></p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> surat 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> justdrive@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i>+ 9987654433</p>
                                <p><i className="fas fa-print mr-3"></i> + 7987654439</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />

                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2020 Copyright: <Link className="text-white" to="https://mdbootstrap.com/">just drive</Link>
                                </div>
                            </div>

                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><FaFacebook />
                                </Link>
                                <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><FaTwitterSquare />
                                </Link>
                                <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><FaGoogle />
                                </Link>
                                <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><FaInstagramSquare />
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>

        </>
    )
}

export default Footer
