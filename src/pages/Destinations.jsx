import React from "react";
import destinations from "../data/destinations.json";
import DestinationCard from "../components/DestinationsCard";

const Destinations = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">All Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            id={destination.id}
            name={destination.name}
            region={destination.region}
            rating={destination.rating}
            image={destination.images[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
