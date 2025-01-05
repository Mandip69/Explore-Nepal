import React from "react";
import destinations from "../data/destinations.json";
import DestinationCard from "../components/DestinationsCard";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <header
        className="hero-section bg-cover bg-center h-96"
        style={{ backgroundImage: `url('/images/Nep.png')`, backgroundAttachment: "fixed" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl font-bold mb-4 animate-fade-in">
            Welcome to Nepal
          </h1>
          <p className="text-white text-base animate-fade-in-delayed">
            A land of breathtaking landscapes and cultural heritage.
          </p>
        </div>
      </header>

      {/* Top Destinations Section */}
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
              type={destination.type}
              popularity={destination.popularity}
            />
          ))}
        </div>
      </section>

      {/* Adventure Activities Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Adventure Awaits</h2>
          <p className="text-gray-600 mb-6">
            Discover thrilling activities like trekking, mountaineering, and paragliding.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="p-4 bg-white shadow-lg rounded-lg w-60">
              <img src="/images/trek.png" alt="Trekking" className="rounded-md" />
              <h3 className="text-lg font-semibold mt-2">Trekking</h3>
              <p className="text-sm text-gray-500">Explore the majestic Himalayas.</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg w-60">
              <img src="/images/para.png" alt="Paragliding" className="rounded-md" />
              <h3 className="text-lg font-semibold mt-2">Paragliding</h3>
              <p className="text-sm text-gray-500">Soar high above the serene Pokhara valley.</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg w-60">
              <img src="/images/Raft.png" alt="White Water Rafting" className="rounded-md" />
              <h3 className="text-lg font-semibold mt-2">Rafting</h3>
              <p className="text-sm text-gray-500">Experience the thrill of Nepal's rivers.</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">What Our Visitors Say</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="p-4 bg-gray-50 shadow-md rounded-lg w-80">
              <p className="italic text-gray-600">
                "Nepal's beauty left me speechless. The trekking experience was life-changing!"
              </p>
              <h4 className="mt-4 font-bold">- Sahara.</h4>
            </div>
            <div className="p-4 bg-gray-50 shadow-md rounded-lg w-80">
              <p className="italic text-gray-600">
                "The cultural heritage and landscapes are unlike anything I've ever seen."
              </p>
              <h4 className="mt-4 font-bold">- Ronish.</h4>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-gradient-to-r from-green-400 to-blue-500 py-10 text-white text-center">
        <h2 className="text-3xl font-bold">Plan Your Adventure Today</h2>
        <p className="mt-4">Don't miss out on the journey of a lifetime.</p>
        <button className="mt-6 px-6 py-2 bg-white text-green-500 font-semibold rounded-md shadow-md">
          Explore More
        </button>
      </section>

     
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest travel guides and offers.
          </p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-l-md"
            />
            <button className="px-4 py-2 bg-green-500 text-white rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
