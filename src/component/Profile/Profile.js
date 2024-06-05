import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import axios from "axios";
import './Profile.css'
const Profile = () => {
    const [userName, setUserName] = React.useState('');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log("token -- ", token);
        if (token) {
            try {
                const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decoding JWT token
                console.log("decodedToken -- ", decodedToken);
                setUserName(decodedToken.userEmail || '');

                // Fetch user data
                axios.get("http://localhost:5000/api/loggedUser", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then((res) => {
                        console.log("res======================",res);
                        setUserData(res.data);
                        console.log("res.data -- get  ====", res.data);
                    })
                    .catch((error) => {
                        console.error("fetching error = = ", error);
                    });

            } catch (e) {
                console.error('Failed to decode token', e);
            }
        }
    }, []);


    const getFirstLetter = (name) => {
        return name ? name.charAt(0).toUpperCase() : '';
    };
    const navigate = useNavigate()
    const onsubmite = () => {
        navigate('/logout')
    }
    return (
        <>

            <div style={{
                width: '100%',
                height: '35vh', backgroundColor: '#6D4A56',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                zIndex: 0
            }}>

            </div>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-12 ' style={{ zIndex: 1, boxShadow: "0 4px 8px 0 rgba(109, 74, 85, 0.50), 0 6px 20px 0 rgba(109, 74, 85, 0.50)" }} >

                        <div className='d-flex justify-content-center' style={{ zIndex: 2 }}>
                            <IconButton className='card-icon text-light' sx={{ p: 0 }}>
                                <Avatar sx={{ width: '100%', height: '100%', fontSize: '100%' }}>{getFirstLetter(userName)}</Avatar>
                            </IconButton>
                        </div>

                        <div className="text-center mb-5">
                            {userData && (
                                <>
                                    <h4>{userData.user.fname} {userData.user.lname}</h4>
                                    {console.log("user data =", userData)}
                                    {console.log("userData.name==", userData.user.fname)}
                                    <p>{userData.user.email}</p>
                                    {/* <p>{userData.user.phone}</p> */}
                                    <button type="button" class="btn btn-danger" onClick={onsubmite}>LogOut</button>
                                </>
                            )}
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Profile
