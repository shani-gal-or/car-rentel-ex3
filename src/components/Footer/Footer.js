import React from "react";
import { Box, Typography, Link, Container, Divider } from "@mui/material";
import Grid2 from "@mui/material/Grid2"; // ✅ Correct import for Grid v2

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#FFFFFF", 
                padding: "12px 0",
                position: "relative",
                bottom: 0,
                width: "100%",
                mt: "auto"
            }}
        >
            <Container maxWidth="lg">
                <Grid2 container spacing={3} justifyContent="space-between" alignItems="flex-start">
                    {/* Left Section: Logo & Description */}
                    <Grid2 xs={12} sm={4} sx={{ textAlign: "left" }}>
                        <Typography variant="h5" fontWeight="bold" color="#1976d2" gutterBottom>
                            ShenCarCar
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#6B7280", maxWidth: "250px" }}>
                            Our vision is to provide convenience and help increase your sales business.
                        </Typography>
                    </Grid2>

                    {/* Center Section: Footer Menu */}
                    <Grid2 xs={12} sm={8}>
                        <Grid2 container spacing={5} justifyContent="flex-start">
                            <Grid2>
                                <Typography variant="h6" fontWeight="bold">About</Typography>
                                <FooterLink text="How it works" />
                                <FooterLink text="Featured" />
                                <FooterLink text="Partnership" />
                                <FooterLink text="Business Relation" />
                            </Grid2>

                            <Grid2>
                                <Typography variant="h6" fontWeight="bold">Community</Typography>
                                <FooterLink text="Events" />
                                <FooterLink text="Blog" />
                                <FooterLink text="Podcast" />
                                <FooterLink text="Invite a friend" />
                            </Grid2>

                            <Grid2>
                                <Typography variant="h6" fontWeight="bold">Socials</Typography>
                                <FooterLink text="Discord" />
                                <FooterLink text="Instagram" />
                                <FooterLink text="Twitter" />
                                <FooterLink text="Facebook" />
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>

                {/* Divider Line */}
                <Divider sx={{ my: 3, backgroundColor: "#D1D5DB" }} />

                {/* Bottom Section: Copyright and Policies */}
                <Grid2 container justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" sx={{ color: "#6B7280" }}>
                        ©2025 ShenCarCar. All rights reserved.
                    </Typography>
                    <Grid2>
                        <FooterLink text="Privacy & Policy" />
                        <FooterLink text="Terms & Condition" />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

// Small reusable footer link component
const FooterLink = ({ text }) => (
    <Typography variant="body2" sx={{ color: "#6B7280", my: 0.5 }}>
        <Link href="#" underline="none" color="inherit">
            {text}
        </Link>
    </Typography>
);

export default Footer;
