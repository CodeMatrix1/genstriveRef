import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NavigationBarSection = () => {
  // Navigation menu items
  const navItems = [
    { label: "Home", id: "home" },
    { label: "DashBoard", id: "dashboard" },
    { label: "About Us", id: "about" },
  ];

  return (
    <Box
      sx={{
        py: 3,
        px: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Brand Logo */}
      <Typography
        variant="h3"
        component="div"
        sx={{
          fontWeight: 700,
          color: "#15609e",
          fontFamily: "Inter, Helvetica",
        }}
      >
        TESTWALE.AI
      </Typography>

      {/* Navigation Menu */}
      <Box
        sx={{
          backgroundColor: "#f0ddff",
          borderRadius: "50px",
          px: 4,
          py: 1.5,
          display: "flex",
          gap: 5,
        }}
      >
        {navItems.map((item) => (
          <Typography
            key={item.id}
            sx={{
              fontFamily: "Inter, Helvetica",
              fontWeight: 600,
              color: "#2f2f68",
              fontSize: "1.125rem",
              cursor: "pointer",
            }}
          >
            {item.label}
          </Typography>
        ))}
      </Box>

      {/* Auth Buttons */}
      <Stack direction="row" spacing={2}>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#001e32",
              borderRadius: "50px",
              textTransform: "none",
              px: 3,
              py: 1.5,
              fontFamily: "Inter, Helvetica",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            Login
          </Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#001e32",
              borderRadius: "50px",
              textTransform: "none",
              px: 3,
              py: 1.5,
              fontFamily: "Inter, Helvetica",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            Sign Up
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};
