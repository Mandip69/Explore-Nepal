import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import destinations from "../data/destinations.json";

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id === parseInt(id));

  if (!destination) {
    return <h1 className="text-center mt-8">Destination not found</h1>;
  }

  const reviews = [
    { name: "Ram", comment: "This destination is absolutely breathtaking! A must-visit!", rating: 5 },
    { name: "Hari", comment: "Amazing experience, especially the cultural activities.", rating: 4 },
    { name: "Sita", comment: "I loved the scenic beauty and peaceful atmosphere.", rating: 4 },
  ];

  return (
    <div className="container mx-auto mt-8 p-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
      >
        ← Back
      </button>
      {/* Destation details Section  */}
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={destination.images[0]}
          alt={destination.name}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg"
        />
      
        <div>
          <h1 className="text-3xl font-bold">{destination.name}</h1>
          <p className="text-gray-600">{destination.region}</p>
          <p className="text-yellow-500 mt-2">
            {`Rating: ${destination.rating} `}
            <span className="text-yellow-500">
              {"★".repeat(Math.floor(destination.rating))}
            </span>
          </p>
          <p className="text-gray-700 mt-4">{destination.description}</p>
          <p className="text-gray-700 mt-2">Type: {destination.type}</p>
          <p className="text-gray-700 mt-2">Popularity: {destination.popularity}</p>
        </div>
      </div>
       {/* Image section  */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {destination.images.slice(1).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${destination.name} ${index + 1}`}
              className="rounded-lg w-full h-48 object-cover"
            />
          ))}
        </div>
      </div>
          {/* Popular Activity Section  */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Popular Activities</h2>
        <ul className="list-disc list-inside">
          {destination.activities?.length > 0 ? (
            destination.activities.map((activity, index) => (
              <li key={index} className="text-gray-700">
                {activity}
              </li>
            ))
          ) : (
            <p className="text-gray-700">No activities listed for this destination.</p>
          )}
        </ul>
      </div>
           {/* Hard user section  */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">User Reviews</h2>
        <div className="bg-gray-100 p-4 rounded-lg space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col">
              <p className="text-gray-700">
                <strong>{review.name}:</strong> {review.comment}
              </p>
              <p className="text-yellow-500">
                {"★".repeat(Math.floor(review.rating))}
                {review.rating % 1 !== 0 && "½"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
