import { Avatar, Box, Card, Container, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { SimpleStepsSection } from "./sections/SimpleStepsSection";
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  // Testimonial data for mapping
  const testimonials = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Container maxWidth="lg" sx={{ overflow: "hidden" }}>
        {/* Navigation Bar */}
        <NavigationBarSection />

        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Simple Steps Section */}
        <SimpleStepsSection />

        {/* Testimonials Section */}
        <Box sx={{ my: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            fontWeight="bold"
            color="#2f2f68"
            gutterBottom
          >
            Words from our Students
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="center"
            sx={{ mt: 5 }}
          >
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                sx={{
                  width: 259,
                  height: 343,
                  borderRadius: "20px",
                  border: "1px solid #5e2f7c",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <Avatar
                  sx={{
                    width: 90,
                    height: 90,
                    bgcolor: "#d9d9d9",
                    mt: 3,
                  }}
                />
                {/* Content for testimonial would go here */}
              </Card>
            ))}
          </Stack>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            width: "100%",
            mt: 4,
            mb: 4,
          }}
        >
          <Box
            component="img"
            src="https://c.animaapp.com/mayyh5h2tfkjUe/img/footer.png"
            alt="Footer"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>

        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            disableElevation
            sx={{
              // ... existing button styles ...
            }}
          >
            Login
          </Button>
        </Link>

        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            disableElevation
            sx={{
              // ... existing button styles ...
            }}
          >
            Sign Up
          </Button>
        </Link>
      </Container>
    </Box>
  );
};
