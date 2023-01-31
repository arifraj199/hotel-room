import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("room.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  const handleBooking = (id) => {
    navigate(`/booking/${id}`);
  };
  return (
    <div className="mt-5 text-center ">
      <h2 className="fw-bold">Choose Rooms{rooms.length}</h2>
      <Container className="mt-5 ">
        <Row>
          {rooms.map((room) => (
            <Col className="shadow me-3 p-3 rounded-3" key={room.id}>
              <img width="100%" height="200" src={room.picture} alt="" />
              <div className="d-flex justify-content-between mt-3">
                <h4 className="fw-bold text-start ">{room.name}</h4>
                <Button
                  onClick={() => handleBooking(room.id)}
                  variant="danger "
                >
                  Booking <FaArrowRight></FaArrowRight>
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Rooms;
