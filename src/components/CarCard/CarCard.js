import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

const CarCard = ({ car }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === car.id);

  return (
    <div>
      <h3>{car.name}</h3>
      <IconButton onClick={() => toggleFavorite(car)}>
        <FavoriteIcon color={isFavorite ? "error" : "disabled"} />
      </IconButton>
    </div>
  );
};

export default CarCard;
