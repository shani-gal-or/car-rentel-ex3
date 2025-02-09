import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import CarPage from "../pages/CarPage/CarPage";

const AppRouter = ({ searchQuery }) => {
  return (
    <Routes>
      <Route path="/" element={<Home searchQuery={ searchQuery } />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/car/:id" element={<CarPage />} />
    </Routes>
  );
};

export default AppRouter;
