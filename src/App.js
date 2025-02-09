import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { FavoritesProvider } from "./context/FavoritesContext"; // ✅ Import Context
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Store search query globally

  return (
    <FavoritesProvider>
      <Router>
        <Header onSearch={setSearchQuery} /> {/* ✅ Pass setSearchQuery to Header */}
        <AppRouter searchQuery={searchQuery} /> {/* ✅ Pass searchQuery to AppRouter */}
        <Footer />
      </Router>
    </FavoritesProvider>
  );
}

export default App;
