import React, { useState } from "react";
import destinationsData from "../data/destinations.json";
import DestinationCard from "../components/DestinationsCard";
import Filters from "../components/Filters";

const Destinations = () => {
  const [filteredDestinations, setFilteredDestinations] = useState(destinationsData);
  const [regionFilter, setRegionFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const regions = [...new Set(destinationsData.map((dest) => dest.region))];
  const types = ["Cultural", "Trekking", "Adventure"];

  const handleFilterChange = (filterType, value) => {
    if (filterType === "region") setRegionFilter(value);
    if (filterType === "type") setTypeFilter(value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const applyFiltersAndSorting = () => {
    let result = destinationsData;


    if (regionFilter) {
      result = result.filter((dest) => dest.region === regionFilter);
    }

  
    if (typeFilter) {
      result = result.filter((dest) => dest.type.includes(typeFilter));
    }

    
    if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  };

  React.useEffect(() => {
    const updatedDestinations = applyFiltersAndSorting();
    setFilteredDestinations(updatedDestinations);
  }, [regionFilter, typeFilter, sortBy]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">All Destinations</h2>

      <div className="flex justify-between items-center mb-4">
        <Filters regions={regions} types={types} onFilterChange={handleFilterChange} />
        <select className="border p-2" onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            id={destination.id}
            name={destination.name}
            region={destination.region}
            rating={destination.rating}
            image={destination.images[0]}
            type={destination.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;