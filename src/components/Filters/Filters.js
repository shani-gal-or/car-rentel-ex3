import React from "react";
import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Slider } from "@mui/material";

const Filter = ({ filters, setFilters, minPrice, maxPrice, carsData }) => {
  // Handle car type checkbox change
  const handleTypeChange = (event) => {
    const { name, checked } = event.target;
    if (!checked && filters.types.length === 1) return; // ✅ Prevent unchecking the last one
    setFilters((prev) => ({
      ...prev,
      types: checked ? [...prev.types, name] : prev.types.filter((type) => type !== name),
    }));
  };

  // Handle capacity checkbox change
  const handleCapacityChange = (event) => {
    const { name, checked } = event.target;
    if (!checked && filters.capacity.length === 1) return; // ✅ Prevent unchecking the last one
    setFilters((prev) => ({
      ...prev,
      capacity: checked ? [...prev.capacity, name] : prev.capacity.filter((cap) => cap !== name),
    }));
  };

  // Handle price slider change
  const handlePriceChange = (_, newValue) => {
    setFilters((prev) => ({
      ...prev,
      price: newValue,
    }));
  };

  return (
    <Box
      sx={{
        width: "250px",
        padding: "20px",
        borderRight: "1px solid #E0E0E0",
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >

      {/* Car Type Filter */}
      <Typography variant="subtitle1" sx={{ color: "#90A3BF", font: "Plus Jakarta Sans", fontSize: "12px" }} mt={2}>TYPE</Typography>
      <FormGroup>
        {["Sport", "SUV", "Hatchback"].map((type) => (
          <FormControlLabel
            key={type}
            control={<Checkbox checked={filters.types.includes(type)} onChange={handleTypeChange} name={type}
              sx={{ color: "#3563E9", "&.Mui-checked": { color: "#3563E9" } }} />}
            label={`${type} (${carsData.filter(car => car.type === type).length})`}
          />
        ))}
      </FormGroup>

      {/* ✅ Capacity Filter (Checkboxes) */}
      <Typography variant="subtitle1" sx={{ color: "#90A3BF", font: "Plus Jakarta Sans", fontSize: "12px" }} mt={2}>CAPACITY</Typography>
      <FormGroup>
        {["2", "4", "6"].map((capacity) => (
          <FormControlLabel
            key={capacity}
            control={<Checkbox checked={filters.capacity.includes(capacity)} onChange={handleCapacityChange} name={capacity} />}
            label={`${capacity} People (${carsData.filter(car => car.capacity == capacity).length})`}
          />
        ))}
      </FormGroup>

      {/* Price Filter */}
      <Typography variant="subtitle1" sx={{ color: "#90A3BF", font: "Plus Jakarta Sans", fontSize: "12px" }} mt={2}>PRICE (PER DEY)</Typography>
      <Slider
        value={filters.price}
        onChange={handlePriceChange}
        min={minPrice}
        max={maxPrice}
        valueLabelDisplay="auto"
        sx={{
          color: "#3563E9", // ✅ Figma blue for slider
          "& .MuiSlider-thumb": {
            backgroundColor: "#3563E9", // ✅ Thumb (circle) color
          },
          "& .MuiSlider-track": {
            backgroundColor: "#3563E9", // ✅ Track (filled part) color
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#B0C4DE", // ✅ Rail (unfilled part) light gray
          },
        }}
      />
      <Typography variant="body2" color="textSecondary">
        Max: ${filters.price} {/* ✅ Show the selected price below the slider */}
      </Typography>
    </Box>
  );
};

export default Filter;
