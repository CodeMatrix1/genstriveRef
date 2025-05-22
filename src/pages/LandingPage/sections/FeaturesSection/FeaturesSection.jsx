import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export const FeaturesSection = () => {
  // Feature data for mapping
  const features = [
    {
      id: 1,
      title: "AI Test Generator",
      description:
        "AI - powered exam generator tailored for students from Grade 1 to 12 . Practice tests customized to your learning needs and track your progress.",
      icon: "https://c.animaapp.com/mayyh5h2tfkjUe/img/siicon-1.png",
      iconAlt: "AI Test Generator Icon",
    },
    {
      id: 2,
      title: "Track Progress",
      description:
        "AI - powered exam generator tailored for students from Grade 1 to 12 . Practice tests customized to your learning needs and track your progress.",
      icon: "https://c.animaapp.com/mayyh5h2tfkjUe/img/progress-icon-1.png",
      iconAlt: "Progress Icon",
    },
    {
      id: 3,
      title: "Study Material",
      description:
        "AI - powered exam generator tailored for students from Grade 1 to 12 . Practice tests customized to your learning needs and track your progress.",
      icon: "https://c.animaapp.com/mayyh5h2tfkjUe/img/bookicon-1.png",
      iconAlt: "Book Icon",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: "502px",
        backgroundColor: "rgba(240, 221, 255, 0.57)",
        position: "relative",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: "40px",
              color: "#2f2f68",
              mb: 2,
            }}
          >
            Everything you need to Excel
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              color: "#2f2f68",
              maxWidth: "745px",
              mx: "auto",
              lineHeight: "30px",
            }}
          >
            Our AI-powered tools adapt to your Learning style and help you
            master any subject
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.id}>
              <Box sx={{ position: "relative", height: "140px" }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Box sx={{ mr: 1 }}>
                    <Box
                      component="img"
                      src={feature.icon}
                      alt={feature.iconAlt}
                      sx={{
                        width: feature.id === 1 ? "96px" : "86px",
                        height: feature.id === 1 ? "96px" : "86px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: "20px",
                        color: "#001e32",
                        mb: 1,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        color: "#2f2f68",
                        maxWidth: "232px",
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
