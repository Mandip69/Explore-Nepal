import React from "react";
import destinations from "../data/destinations.json";
import DestinationCard from "../components/DestinationsCard";

const Home = () => {
  return (
    <div>
      <header
        className="hero-section bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to Nepal</h1>
        </div>
      </header>
      <section className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Top Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {destinations.slice(0, 3).map((destination) => (
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
      </section>
    </div>
  );
};

export default Home;
