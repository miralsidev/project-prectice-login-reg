import React, { useEffect, useState } from "react";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';

import axios from "axios";
function MyBooking() {
  const [users, setUser] = useState();
useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("token -- ", token);
    if (token) {
        data(token);
    }
}, []);
  const data = (token) => {
    axios
      .get("http://localhost:5000/Booking/MyBooking",{
        headers: {
            'Authorization': `Bearer ${token}`
          }
      })
      .then((res) => {
        setUser(res.data);
        console.log("res.data = ", res.data);
      })
      .catch((error) => {
        console.error("fetching error == ", error);
      });
  };
  return (
    <>
     <NavBar />
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4" style={{boxShadow:"0 4px 8px 0 rgba(109, 74, 85, 0.2), 0 6px 20px 0 rgba(109, 74, 85, 0.19)"}} >
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2" style={{ top: "-25px", marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
              <div className=" shadow-primary rounded-3 pt-4 pb-3" style={{ backgroundColor: '#6D4A56' }}>
                <h6 className="text-white text-capitalize ps-3 fs-5">
                  My Booking
                </h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                {users ? (
                  <table className="table table-bordered fs-5" style={{ overflowX: 'auto' }}>
                    {/* <thead> */}
                      <tr className="text-center">
                        <th style={{ padding: '20px'}}>User Id</th>
                        <th style={{ padding: '20px'}}>pickup_Location</th>
                        <th style={{ padding: '20px'}}>dropoff_Location</th>
                        <th style={{ padding: '20px'}}>pickup_date</th>
                        <th style={{ padding: '20px'}}>return_date</th>
                        <th style={{ padding: '20px'}}>status</th>
                     
                      </tr>
                    {/* </thead> */}
                    {users.data?.map((user, index) => (
                      <tr key={index} className="text-center">
                        <td style={{ padding: '20px'}}>{index + 1}</td>
                        <td style={{ padding: '20px'}}>{user.pickup_Location}</td>
                        <td style={{ padding: '20px'}}>{user.dropoff_Location}</td>
                        <td style={{ padding: '20px'}}>{user.pickup_date}</td>
                        <td style={{ padding: '20px'}}>{user.return_date}</td>

                        <td style={{ padding: '20px'}}>{user.status}</td>

                      </tr>
                     
                    ))}
                  </table>
                ) : (
                  <p>Loading users...</p>
                )}
              </div>

            </div>
            </div>
            
          </div>
        </div>
      </div>
<Footer/>
    </>
  );
}

export default MyBooking;
