import React from 'react';
import Modal from "react-bootstrap/Modal";
import { LuFuel } from "react-icons/lu";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { MdLuggage } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { IndianRupee } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const CarsDetails = ({ show, cars, handleClose }) => {
  const navigate = useNavigate();
  const handleSubmit = (car) => {
    console.log("==carcar==", car);
    navigate(`/book/${car._id}`, { state: { car: car } });
  }
  const token = localStorage.getItem('token');
  console.log("token -- ", token);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="full-width-modal"
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{"Add Car"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-wrap">
            <div className="image-container">
              <img
                src={`http://localhost:5000/${cars.path}`}
                alt={`car-${cars.brand}`}
                className="img-fluid"
              />
              <p className="fs-1">{cars.brand}</p>
     

                <table className="table h5">
                  <tr>
                    <td><span><FaUserLarge /></span> Passengers</td>
                    <td>{cars.seats}</td>
                  </tr>
                  <tr>
                    <td><span><MdLuggage /> </span>  Luggage</td>
                    <td>{cars.luggage}</td>
                  </tr>
                  <tr>
                    <td><span><TbAirConditioningDisabled /></span> Air Condition</td>
                    <td> {cars.Air_Conditioning_Availability}</td>
                  </tr>
                  <tr>
                    <td><span><LuFuel /></span> Fuel</td>
                    <td>{cars.fuel}</td>
                  </tr>
                </table>
                <div className='ps-3'>
                <p>Limited Mileage: {cars.mileage}</p>
                <p>{cars.description}</p>
                </div>
              
                <div className="price-container ps-3 h5">
                  <p><span style={{ color: 'blue' }}><IndianRupee />{cars.price}</span> / rent per Day</p>
                  {console.log("==================cars id ==", cars)}

                  <button type="button" className="btn btn-primary" onClick={() => handleSubmit(cars)} >Book Now</button>
                </div>
              </div>
            </div>

    
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CarsDetails;

