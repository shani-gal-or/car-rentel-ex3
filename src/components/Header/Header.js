import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, InputBase, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const SearchContainer = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "25px", // Rounded rectangle
    backgroundColor: "#F3F4F6", // Light gray background
    display: "flex",
    alignItems: "center",
    padding: "5px 15px",
    width: "492px",
    boxShadow: "0px 1px 3px rgba(0,0,0,0.1)"
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
    flexGrow: 1,
    padding: "5px 10px",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
}));

const Header = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setQuery(e.target.value);
        if (e.target.value.length >= 2) {
            onSearch(e.target.value); // Send search query to parent component
        }
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "white", padding: "10px" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Logo - Click to Go Home */}
                <Typography
                    variant="h6"
                    sx={{ cursor: "pointer", fontWeight: "bold", fontSize: "1.5rem", color: "#3563E9" }}
                    onClick={() => navigate("/")}
                >
                    ShenCarCar
                </Typography>

                {/* Search Bar */}
                <SearchContainer>
                    <StyledInput
                        placeholder="Search by car name"
                        value={query}
                        onChange={handleSearch}
                    />
                    <IconButton sx={{ color: "#6B7280" }}> {/* Gray search icon */}
                        <SearchIcon />
                    </IconButton>
                </SearchContainer>

                {/* Favorites Button - Click to Go to Favorites Page */}
                <IconButton onClick={() => navigate("/favorites")} sx={{ color: "#6B7280" }}>
                    <FavoriteIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;