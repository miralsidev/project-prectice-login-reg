import React, { useEffect, useState } from "react";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import axios from "axios";
import dayjs from "dayjs";
function MyBooking() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchData(token);
    }
  }, []);

  const fetchData = (token) => {
    axios
      .get("http://localhost:5000/Booking/MyBooking", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data.booking, "this is data")
        setData(res.data?.booking);
      })
      .catch((error) => {
        console.error("fetching error = ", error);
      });
  };


  return (
    <>
      <NavBar />
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4" style={{ boxShadow: "0 4px 8px 0 rgba(109, 74, 85, 0.2), 0 6px 20px 0 rgba(109, 74, 85, 0.19)" }}>
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2" style={{ top: "-25px", marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
                <div className="shadow-primary rounded-3 pt-4 pb-3" style={{ backgroundColor: '#6D4A56' }}>
                  <h6 className="text-white text-capitalize ps-3 fs-5">
                    My Booking
                  </h6>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">

                  <table className="table table-bordered fs-5" style={{ overflowX: 'auto' }}>
                    <thead>
                      <tr className="text-center">
                        <th style={{ padding: '20px' }}>User Id</th>
                        <th style={{ padding: '20px' }}>Image</th>
                        <th style={{ padding: '20px' }}>Car Model</th>
                        <th style={{ padding: '20px' }}>price</th>
                        <th style={{ padding: '20px' }}>Pickup Date</th>
                        <th style={{ padding: '20px' }}>Return Date</th>
                        <th style={{ padding: '20px' }}>Total</th>
                        <th style={{ padding: '20px' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((item, index) => (
                        <tr key={index} cl  ssName="text-center">
                          <td style={{ padding: '20px' }}>{index + 1}</td>
                          <td>
                            <img
                              src={`http://localhost:5000/${item?.car_id?.path}`}
                              alt={`car-${item?.brand}`}
                       
                              style={{ width: "60px", height: "50px" }}
                            />
                          </td>
                          <td style={{ padding: '20px' }}>{item.car_id.brand}</td>
                          <td style={{ padding: '20px' }}>{item.car_id.price} / Per Days</td>
                          {/* <td style={{ padding: '20px' }}>{item?.pickup_date}</td> */}
                          <td style={{ padding: '20px' }}>{dayjs(item?.pickup_date).format("YYYY-MM-DD")}</td>
                          <td style={{ padding: '20px' }}>{dayjs(item?.return_date).format("YYYY-MM-DD")}</td>
                          <td style={{ padding: '20px' }}>{item?.price}</td>  
                          <td style={{ padding: '20px' }}>{item?.status}</td>                       
                                   
                        </tr>
                      ))}
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyBooking;
