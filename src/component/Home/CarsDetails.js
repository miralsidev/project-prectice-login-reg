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
    navigate(`/book/${car._id}`, { state: { car: car } });
  }
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
            </div>
            <div className="details-container ps-5">
              <h5 className="card-title fs-2">{cars.model}</h5>
              <p>Limited Mileage: {cars.mileage}</p>
              <p>{cars.description}</p>
              <p><LuFuel /> {cars.fuel}</p>
              <p><TbAirConditioningDisabled /> {cars.Air_Conditioning_Availability}</p>
              <p><MdLuggage /> {cars.luggage}</p>
              <p><FaUserLarge /> {cars.seats}</p>
            </div>
            <div className="price-container ps-4">
              <p><span style={{ color: 'blue' }}><IndianRupee />{cars.price}</span> / Per Day</p>
              {console.log("==================cars id ==", cars)}
              
              <button type="button" className="btn btn-primary" onClick={() => handleSubmit(cars)} >Book Now</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>

  );
};
export default CarsDetails;

