import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, IconButton, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import { useFavorites } from "../../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();
  const isFavorite = favorites.some((fav) => fav.id === car.id);

  // Define Figma color
  const figmaIconColor = "#90A3BF"; 

  return (
    <Card sx={{ cursor: "pointer", borderRadius: "12px", boxShadow: 3 }}>
      {/* Clicking on Image Navigates to Car Details Page */}
      <CardMedia
        component="img"
        height="150"
        image={`/images/${car.image}`}
        alt={car.name}
        onClick={() => navigate(`/car/${car.id}`)}
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {car.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {car.type}
            </Typography>
          </Box>
          <IconButton onClick={() => toggleFavorite(car)} sx={{ color: isFavorite ? "red" : "gray" }}>
            <FavoriteIcon />
          </IconButton>
        </Box>

        {/* Car Info (Fuel, Transmission, Capacity) */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px", gap: "15px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <LocalGasStationIcon sx={{ color: figmaIconColor, fontSize: "20px" }} /> {/* ✅ Light blue icon */}
            <Typography variant="body2" sx={{ color: figmaIconColor }}>{car.fuel}L</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <SettingsIcon sx={{ color: figmaIconColor, fontSize: "20px" }} /> {/* ✅ Light blue icon */}
            <Typography variant="body2" sx={{ color: figmaIconColor }}>{car.transmission}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <PeopleIcon sx={{ color: figmaIconColor, fontSize: "20px" }} /> {/* ✅ Light blue icon */}
            <Typography variant="body2" sx={{ color: figmaIconColor }}>{car.capacity} People</Typography>
          </Box>
        </Box>

        {/* Price & Rent Now Button */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px" }}>
          <Typography variant="h6" color="primary" sx={{ flex: 1, textAlign: "left" }}>
            ${car.price}/day
          </Typography>
          {/* ✅ Rent Now Button (Does Nothing) */}
          <Button
            variant="contained"
            color="primary"
            sx={{ flex: 1, borderRadius: "8px", textTransform: "none" }}
            onClick={() => { }} // ✅ Does nothing
          >
            Rent Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CarCard;
