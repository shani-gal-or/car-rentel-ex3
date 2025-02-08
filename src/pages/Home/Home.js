import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2"; // ✅ Correct import for Grid v2
import CarCard from "../../components/CarCard/CarCard"; // ✅ Import CarCard component
import Filter from "../../components/Filters/Filters";
import carsData from "../../data/cars.json"; // ✅ Import the cars JSON file

const Home = () => {
  const [cars, setCars] = useState([]); // ✅ Store car data in state
  const [filters, setFilters] = useState({
    types: ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"], // Default all selected
    capacity: ["2", "4", "6"], // Default all selected
    price: 100, // Default max price
  });

  // Get price range for slider
  const minPrice = Math.min(...carsData.map((car) => car.price));
  const maxPrice = Math.max(...carsData.map((car) => car.price));

  // Load the cars data on component mount
  useEffect(() => {
    setCars(carsData); // ✅ Set cars state to the imported JSON data
  }, []);

  // Apply filters to cars
  const filteredCars = cars.filter((car) => {
    return (
      filters.types.includes(car.type) &&
      filters.capacity.includes(car.capacity.toString()) && // ✅ Allow multiple selected capacities
      car.price <= filters.price
    );
  });

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar (Filter Component) */}
      <Filter filters={filters} setFilters={setFilters} minPrice={minPrice} maxPrice={maxPrice} carsData={filteredCars} />

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: "40px",fontSize: "20px" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Cars Catalogue {" "}
          <Typography component="span" variant="h4" sx={{ color: "#90A3BF", fontSize: "14px" }}>
          {filteredCars.length} cars
          </Typography>
        </Typography>

        {/* Grid Layout for Cars */}
        <Grid2 container spacing={3}>
          {filteredCars.map((car) => (
            <Grid2 key={car.id} xs={12} sm={6} md={4} lg={3}>
              <CarCard car={car} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default Home;
