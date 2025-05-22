import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

export const HeroSection = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 8, position: "relative" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            color: "#2f2f68",
            fontSize: { xs: "3rem", md: "5rem" },
            lineHeight: 1.2,
          }}
        >
          Learn Smarter with
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            color: "#15609e",
            fontSize: { xs: "2.5rem", md: "4rem" },
            mb: 3,
          }}
        >
          TESTWALE.AI
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            color: "#2f2f68",
            fontSize: "1.25rem",
            maxWidth: "822px",
            mx: "auto",
            mb: 5,
            lineHeight: "30px",
          }}
        >
          AI - powered exam generator tailored for students from Grade 1 to 12.
          Practice tests customized to your learning needs and track your
          progress.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#5e2f7c",
              borderRadius: "50px",
              px: 4,
              py: 1.5,
              fontSize: "1.5rem",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { bgcolor: "#4a2563" },
            }}
          >
            Start Learning today
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "#001e32",
              borderColor: "#2f2f68",
              borderRadius: "50px",
              px: 4,
              py: 1.5,
              fontSize: "1.5rem",
              fontWeight: 600,
              bgcolor: "white",
              textTransform: "none",
              boxShadow: "0px 0px 4px rgba(0,0,0,0.25)",
              "&:hover": { bgcolor: "#f5f5f5", borderColor: "#2f2f68" },
            }}
          >
            Explore Programs
          </Button>
        </Stack>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            flexWrap: { xs: "wrap", md: "nowrap" },
            mt: 4
          }}
        >
          <Box
            component="img"
            src="https://c.animaapp.com/mayyh5h2tfkjUe/img/image-5.png"
            alt="Student studying"
            sx={{
              maxWidth: { xs: "100%", md: "740px" },
              height: "auto",
              objectFit: "cover",
              order: { xs: 1, md: 1 }
            }}
          />

          <Box
            component="img"
            src="https://c.animaapp.com/mayyh5h2tfkjUe/img/image-6.png"
            alt="Educational illustration"
            sx={{
              maxWidth: { xs: "100%", md: "300px" },
              height: "auto",
              objectFit: "cover",
              order: { xs: 2, md: 2 },
              transform: "rotate(25deg) translate(-120px, -30px)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "rotate(20deg) translate(-120px, -30px)"
              }
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};
