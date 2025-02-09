import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, IconButton, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import { useFavorites } from "../../context/FavoritesContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();
  const isFavorite = favorites.some((fav) => fav.id === car.id);

  // Define Figma color
  const figmaIconColor = "#90A3BF";

  return (
    <Card sx={{
      cursor: "pointer",
      borderRadius: "12px",
      boxShadow: 3,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",  // ✅ Ensures cards have the same height
      width: "100%",  // ✅ Prevents shrinking
      maxWidth: "320px"  // ✅ Matches Figma width
    }}>

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

        {/* Clicking on Image Navigates to Car Details Page */}
        <Link to={`/car/${car.id}`} style={{ textDecoration: "none" }}>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "180px",  // ✅ Ensures equal height for all images
            overflow: "hidden",  // ✅ Prevents images from overflowing
          }}>
            <CardMedia
              component="img"
              image={`${process.env.PUBLIC_URL}/images/${car.image}`}
              alt={car.name}
              sx={{
                maxHeight: "100%",
                maxWidth: "90%",
                objectFit: "contain"  // ✅ Ensures the images are scaled correctly
              }}
            />
          </Box>
        </Link>

        {/* Car Info (Fuel, Transmission, Capacity) */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px", gap: "15px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <LocalGasStationIcon sx={{ color: figmaIconColor, fontSize: "20px" }} /> {/* ✅ Light blue icon */}
            <Typography variant="body2" sx={{ color: figmaIconColor }}>{car.fuel}</Typography>
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
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: "12px",
          marginTop: "16px",  // ✅ Adds space above
          marginBottom: "16px" // ✅ Adds space below
        }}>
          {/* Price Section */}
          <Box sx={{ display: "flex", alignItems: "baseline", flexShrink: 0 }}>
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1E293B" }}>
              ${car.price.toFixed(2)}
            </Typography>
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1E293B", marginLeft: "4px" }}>
              /
            </Typography>
            <Typography sx={{ fontSize: "1rem", fontWeight: "medium", color: "#90A3BF", marginLeft: "2px" }}>
              day
            </Typography>
          </Box>

          {/* Rent Now Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#3563E9",
              borderRadius: "8px",
              textTransform: "none",
              padding: "8px 16px",
              minWidth: "110px", // ✅ Prevents button from shrinking too much
              maxWidth: "150px", // ✅ Prevents button from growing too much
            }}
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
