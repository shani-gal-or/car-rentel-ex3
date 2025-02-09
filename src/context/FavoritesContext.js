import React, { createContext, useState, useContext } from "react";

// Create Context
const FavoritesContext = createContext();

// Custom Hook to Use Favorites
export const useFavorites = () => {
  return useContext(FavoritesContext);
};

// Provider Component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (car) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === car.id)
        ? prevFavorites.filter((fav) => fav.id !== car.id) // Remove if already favorited
        : [...prevFavorites, car] // Add if not in favorites
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
