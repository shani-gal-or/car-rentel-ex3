import React from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2"; // ✅ Correct import for Grid v2

const Footer = () => {
  return (
    <Box sx={{
      width: "100%",
      backgroundColor: "white", 
      padding: "16px 0",
      position: "relative",
      bottom: 0
    }}>
      <Box sx={{
        maxWidth: "1200px", // ✅ Aligns with the content
        margin: "0 auto", // ✅ Centers the content
        padding: "0 16px"
      }}>
        <Grid2 container spacing={3} justifyContent="space-between">
          {/* Left Section */}
          <Grid2 xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3563E9" }}>
              ShenCarCar
            </Typography>
            <Typography variant="body2" sx={{ color: "#90A3BF" }}>
              Our vision is to provide convenience and help increase your sales business.
            </Typography>
          </Grid2>

          {/* Middle Section */}
          <Grid2 xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>About</Typography>
            <Typography variant="body2" sx={{ color: "#90A3BF" }}>How it works</Typography>
            <Typography variant="body2" sx={{ color: "#90A3BF" }}>Featured</Typography>
            <Typography variant="body2" sx={{ color: "#90A3BF" }}>Partnership</Typography>
            <Typography variant="body2" sx={{ color: "#90A3BF" }}>Business Relation</Typography>
          </Grid2>

          {/* Right Section */}
          <Grid2 xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Community</Typography>
            <Typography variant="body2" sx={{ color: "#90A3BF" }}>Events</Typography>
            <Typography variant="body2" sx={{ color: "#90A3BF" }}>Blog</Typography>
            <Typography variant="body2" sx={{ color: "#90A3BF" }}>Podcast</Typography>
            <Typography variant="body2" sx={{ color: "#90A3BF" }}>Invite a Friend</Typography>
          </Grid2>
        </Grid2>

        {/* Bottom Row */}
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #E0E3EB",
          marginTop: "16px",
          paddingTop: "8px",
          fontSize: "14px",
          color: "#90A3BF"
        }}>
          <Typography>&copy; 2025 ShenCarCar. All rights reserved.</Typography>
          <Box sx={{ display: "flex", gap: "16px" }}>
            <Typography>Privacy & Policy</Typography>
            <Typography>Terms & Condition</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
