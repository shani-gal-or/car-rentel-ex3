import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { FavoritesProvider } from "./context/FavoritesContext"; // ✅ Import Context
import "./App.css";

function App() {
  return (
    <FavoritesProvider> {/* ✅ Wrap the app with FavoritesProvider */}
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </FavoritesProvider>
  );
}

export default App;
