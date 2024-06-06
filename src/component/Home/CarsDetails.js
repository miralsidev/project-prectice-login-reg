import React from "react";
import Modal from "react-bootstrap/Modal";
const CarsDetails = ({ show, cars, handleClose }) => {
  console.log("cars==cars", cars);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        style={{ width: "100%" }}
      >
        <Modal.Header closeButton >
          <Modal.Title>{"Add Car"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <div>
              <img
                src={`http://localhost:5000/${cars.path}`}
                alt={`car-${cars.brand}`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="ps-5">
              <h5 className="card-title">{cars.model}</h5>
              <p>{cars.plate_number}</p>
              <p>{cars.price}</p>
              <p>{cars.description}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CarsDetails;
