import React, { useState } from "react";
import destinationsData from "../data/destinations.json";
import DestinationCard from "../components/DestinationsCard";
import Filters from "../components/Filters";

// Helper function to map popularity strings to numeric values
const getPopularityValue = (popularity) => {
  switch (popularity) {
    case "Highly Popular":
      return 5;
    case "Very Popular":
      return 3;
    case "Popular":
      return 2;
    case "Moderately Popular":
      return 1;
    default:
      return 0; 
  }
};

const Destinations = () => {
  const [filteredDestinations, setFilteredDestinations] = useState(destinationsData);
  const [regionFilter, setRegionFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [popularityFilter, setPopularityFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const regions = [...new Set(destinationsData.map((dest) => dest.region))];
  const types = ["Cultural", "Trekking", "Adventure"];
  const popularities = ["Highly Popular", "Very Popular", "Popular", "Moderately Popular"];

  const handleFilterChange = (filterType, value) => {
    if (filterType === "region") setRegionFilter(value);
    if (filterType === "type") setTypeFilter(value);
    if (filterType === "popularity") setPopularityFilter(value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const applyFiltersAndSorting = () => {
    let result = destinationsData;

    // Apply region filter
    if (regionFilter) {
      result = result.filter((dest) => dest.region === regionFilter);
    }

    // Apply type filter
    if (typeFilter) {
      result = result.filter((dest) => dest.type.includes(typeFilter));
    }

    // Apply popularity filter
    if (popularityFilter) {
      result = result.filter((dest) => dest.popularity === popularityFilter);
    }

    // Apply sorting
    if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "popularity") {
      result = [...result].sort((a, b) => getPopularityValue(b.popularity) - getPopularityValue(a.popularity));
    }

    return result;
  };

  React.useEffect(() => {
    const updatedDestinations = applyFiltersAndSorting();
    setFilteredDestinations(updatedDestinations);
  }, [regionFilter, typeFilter, popularityFilter, sortBy]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">All Destinations</h2>

      <div className="flex justify-between items-center mb-4">
        <Filters
          regions={regions}
          types={types}
          popularity={popularities}
          onFilterChange={handleFilterChange}
        />
        <select className="border p-2" onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="rating">Rating</option>
          <option value="popularity">Popularity</option>
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
            popularity={destination.popularity}
            image={destination.images[0]}
            type={destination.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
