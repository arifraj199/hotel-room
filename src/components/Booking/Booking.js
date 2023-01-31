import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch(`room.json/booking/name/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [id]);
  return (
    <div className="text-center mt-5">
      <h2>
        Welcome to Our Hotel. <br /> Best Choice to You.[{id}]
      </h2>
    </div>
  );
};

export default Booking;
