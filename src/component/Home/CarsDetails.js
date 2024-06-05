import React from 'react'
import Modal from 'react-bootstrap/Modal';
const CarsDetails = ({ show, cars, handleClose }) => {
    console.log("cars==cars", cars);
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false} style={{ width: '100%' }}>
                <Modal.Header closeButton>
                    <Modal.Title>{'Add Car'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="card-title">{cars.model}</h5>
                    {/* <img
                  src={`http://localhost:5000/${cars.path}`}
                  alt={`car-${index}`}
                  style={{ width: "100%", height: "100%" }}
                /> */}

                </Modal.Body>
            </Modal>
        </>
    )
}
export default CarsDetails
