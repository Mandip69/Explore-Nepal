const Filters = ({ regions, types, onFilterChange }) => (
  <div className="flex gap-4">
    <select className="border p-2" onChange={(e) => onFilterChange("region", e.target.value)}>
      <option value="">All Regions</option>
      {regions.map((region) => (
        <option key={region} value={region}>{region}</option>
      ))}
    </select>
    <select className="border p-2" onChange={(e) => onFilterChange("type", e.target.value)}>
      <option value="">All Types</option>
      {types.map((type) => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  </div>
);

export default Filters