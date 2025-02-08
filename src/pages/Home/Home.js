import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2"; // ✅ Correct import for Grid v2
import CarCard from "../../components/CarCard/CarCard"; // ✅ Import CarCard component
import carsData from "../../data/cars.json"; // ✅ Import the cars JSON file

const Home = () => {
  const [cars, setCars] = useState([]); // ✅ Store car data in state

  // Load the cars data on component mount
  useEffect(() => {
    setCars(carsData); // ✅ Set cars state to the imported JSON data
  }, []);

  return (
    <Box sx={{ padding: "40px" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Cars Catalogue
      </Typography>

      {/* Grid Layout for Cars */}
      <Grid2 container spacing={3}>
        {cars.map((car) => (
          <Grid2 key={car.id} xs={12} sm={6} md={4} lg={3}>
            <CarCard car={car} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Home;
