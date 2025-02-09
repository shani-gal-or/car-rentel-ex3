import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import carsData from "../../data/cars.json";
import { useFavorites } from "../../context/FavoritesContext";

const CarPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();

  // Find the car based on the ID
  const car = carsData.find((car) => car.id.toString() === id);
  const [selectedImage, setSelectedImage] = useState(car.image);

  if (!car) {
    return <Typography sx={{ textAlign: "center", marginTop: "40px" }}>Car not found.</Typography>;
  }

  const isFavorite = favorites.some((fav) => fav.id === car.id);

  return (
    <Box sx={{ padding: "40px", maxWidth: "1200px", margin: "auto", display: "flex", gap: "24px" }}>
      {/* Left Section: Car Image and Thumbnails */}
      <Box sx={{ flex: 1 }}>
        {/* Large Featured Image */}
        <Box sx={{ backgroundColor: "white", padding: "16px", borderRadius: "8px", textAlign: "center" }}>
          <img src={`${process.env.PUBLIC_URL}/images/${selectedImage}`} alt={car.name} style={{ width: "100%" }} />
        </Box>

        {/* Thumbnail Images */}
        <Box sx={{ display: "flex", gap: "12px", marginTop: "12px" }}>
          {[car.image, ...car.thumbnails].map((img, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/images/${img}`}
              alt={`Thumbnail ${index}`}
              style={{
                width: "100px",
                borderRadius: "8px",
                cursor: "pointer",
                border: selectedImage === img ? "2px solid #3563E9" : "2px solid transparent",
              }}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </Box>
      </Box>

      {/* Right Section: Car Info and Rent Button */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Box>
          {/* Car Title and Favorite Button */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h4" fontWeight="bold">{car.name}</Typography>
            <IconButton onClick={() => toggleFavorite(car)} sx={{ color: isFavorite ? "#E63946" : "#90A3BF" }}>
              <FavoriteIcon />
            </IconButton>
          </Box>

          {/* Rating and Reviews */}
          <Typography sx={{ color: "#90A3BF" }}>⭐⭐⭐⭐⭐ 400+ Reviews</Typography>

          {/* Car Description (Now Using Unique JSON Description) */}
          <Typography sx={{ marginTop: "12px", color: "#475569" }}>
            {car.description}
          </Typography>

          {/* Car Specifications */}
          <Box sx={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px 40px", // Adjust spacing between rows and columns
            alignItems: "center"
          }}>
            {/* Row 1 */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography variant="body2" sx={{ color: "#90A3BF", fontSize: "14px", fontWeight: "500" }}>
                Type Car
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "600", color: "#596780" }}>
                {car.type}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography variant="body2" sx={{ color: "#90A3BF", fontSize: "14px", fontWeight: "500" }}>
                Capacity
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "600", color: "#596780" }}>
                {car.capacity} Person
              </Typography>
            </Box>

            {/* Row 2 */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography variant="body2" sx={{ color: "#90A3BF", fontSize: "14px", fontWeight: "500" }}>
                Steering
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "600", color: "#596780" }}>
                {car.transmission}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography variant="body2" sx={{ color: "#90A3BF", fontSize: "14px", fontWeight: "500" }}>
                Gasoline
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "600", color: "#596780" }}>
                {car.fuel}
              </Typography>
            </Box>
          </Box>


        </Box>

        {/* Price & Rent Now Button */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "24px" }}>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1E293B" }}>
            ${car.price.toFixed(2)}
            <Typography component="span" sx={{ fontSize: "1rem", color: "#90A3BF", marginLeft: "4px" }}>
              / days
            </Typography>
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3563E9",
              borderRadius: "8px",
              padding: "10px 24px",
            }}
          >
            Rent Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CarPage;
