import React from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import CarCard from "../../components/CarCard/CarCard";
import Filter from "../../components/Filters/Filters"; // ✅ Import Filter
import { useFavorites } from "../../context/FavoritesContext"; // ✅ Fix path to Favorites

const FavoritesPage = () => {
  const { favorites } = useFavorites(); // ✅ Get favorite cars from context

  // Dummy filters (filters don't affect favorites)
  const filters = {
    types: ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"],
    capacity: ["2", "4", "6"],
    price: 100,
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar (Filters are Visible but DO NOTHING) */}
      <Filter filters={filters} setFilters={() => { }} minPrice={0} maxPrice={100} carsData={favorites} />

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: "40px" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Favorite Cars{" "}
          <Typography component="span" sx={{ color: "#90A3BF", fontSize: "14px", fontWeight: "medium" }}>
            {favorites.length} cars
          </Typography>
        </Typography>

        {/* Grid Layout for Favorite Cars */}
        {favorites.length === 0 ? (
          <Typography sx={{ color: "#90A3BF", textAlign: "center", marginTop: "20px" }}>
            No favorite cars selected.
          </Typography>
        ) : (
          <Grid2 container spacing={3}>
            {favorites.map((car) => (
              <Grid2 key={car.id} xs={12} sm={6} md={4} lg={3}>
                <CarCard car={car} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Box>
    </Box>
  );
};
export default FavoritesPage;
