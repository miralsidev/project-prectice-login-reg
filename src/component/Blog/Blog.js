import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import axios from "axios";
import backgroundImage from '../Images/blog-2355684_960_720.jpg'

import Footer from '../Footer/Footer';

const Blog = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [blog, setblog] = useState([]);
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    useEffect(() => {
        console.log("----data--==", data);
        data();
    }, []);
    const data = () => {
        axios
            .get("http://localhost:5000/blog/displayBlog")
            .then((res) => {

                setblog(res.data.reverse()); //reverse ma print karva mate
                console.log("res.data -- get  ====", res.data);
            })
            .catch((error) => {
                console.error("fetching error = = ", error);
            });
    };
    return (
        <>
            <NavBar />
            <div style={{
                width: '100%',
                height: '40vh', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                marginBottom: '5%',
                zIndex: 0
            }}>
            </div>
            <div className='container' >
                {blog ? (
                    <div>
                        {blog.map((blog, index) => (
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        {console.log(`http://localhost:5000/${blog?.path}`)}
                                        <img
                                            src={`http://localhost:5000/${blog.path}`}
                                            alt={`car-${index}`}
                                            style={{ width: "100%", height: "100%" }}
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{blog.heading}</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading users...</p>
                )}
            </div>
            <Footer/>

        </>
    )
}

export default Blog
