import React from "react";
import { useNavigate } from "react-router-dom";

const DestinationCard = ({ id, name, region, rating, image, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/destination/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border rounded-lg p-4 hover:shadow-lg transition-shadow"
    >
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-xl font-bold mt-2">{name}</h3>
      <p className="text-gray-600">{region}</p>
      <p className="text-yellow-500">Rating: {rating} ★</p>
      <p className="text-gray-600">Type: {type}</p>
    </div>
  );
};

export default DestinationCard;
