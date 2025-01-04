import React from "react";
import { useNavigate } from "react-router-dom";

const DestinationCard = ({ id, name, region, rating, image }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
      onClick={() => navigate(`/destinations/${id}`)}
    >
      <img
        src={image}
        alt={name}
        className="rounded-md w-full h-48 object-cover"
      />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-gray-600">{region}</p>
      <p className="text-yellow-500">Rating: {rating} ★</p>
    </div>
  );
};

export default DestinationCard;
