import React, { createContext, useState, useContext } from "react";

// Create the Context
const FavoritesContext = createContext();

// Provider Component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Function to toggle favorite status
  const toggleFavorite = (car) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === car.id)
        ? prevFavorites.filter((fav) => fav.id !== car.id) // Remove from favorites
        : [...prevFavorites, car] // Add to favorites
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom Hook to Use Context
export const useFavorites = () => {
  return useContext(FavoritesContext);
};
