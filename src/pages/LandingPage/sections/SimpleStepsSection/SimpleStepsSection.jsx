import { Box, Paper, Typography } from "@mui/material";
import React from "react";

// Step data for mapping
const steps = [
  {
    id: 1,
    title: "Create Account",
    description: "Sign up with your Email or Login to join",
  },
  {
    id: 2,
    title: "Select your Grade",
    description:
      "Choose your Current grade level to get access to Relevant content",
  },
  {
    id: 3,
    title: "Generate Tests",
    description: "Create Custom tests based on Subjects and Topics you need",
  },
  {
    id: 4,
    title: "Track and Improve",
    description: "Review your results and focus on improving weak areas",
  },
];

export const SimpleStepsSection = () => {
  // Approximate card dimensions and spacing for layout calculations
  const cardWidth = 259; // Based on image proportions
  const cardHeight = 180; // Estimate based on content and padding
  const horizontalOffset = 280; // Horizontal distance between the vertical centerlines of adjacent cards
  const verticalOffset = 150; // Vertical distance between the bottom edges of adjacent cards
  const lineWidth = 1; // Thickness of the connecting lines

  // Calculate step box positions relative to the container's bottom-left for line positioning
  const stepPositions = steps.map((step, index) => ({
    left: index === 0 ? `calc(50% - ${horizontalOffset * 1.5}px - ${cardWidth/2}px)`
          : index === 1 ? `calc(50% - ${horizontalOffset * 0.5}px - ${cardWidth/2}px)`
          : index === 2 ? `calc(50% + ${horizontalOffset * 0.5}px - ${cardWidth/2}px)`
          : `calc(50% + ${horizontalOffset * 1.5}px - ${cardWidth/2}px)`,
    bottom: `${index * verticalOffset}px`,
    centerHorizontal: index === 0 ? `calc(50% - ${horizontalOffset * 1.5}px)`
                      : index === 1 ? `calc(50% - ${horizontalOffset * 0.5}px)`
                      : index === 2 ? `calc(50% + ${horizontalOffset * 0.5}px)`
                      : `calc(50% + ${horizontalOffset * 1.5}px)`,
    centerVertical: `calc(${index * verticalOffset}px + ${cardHeight/2}px)`,
    top: `calc(${index * verticalOffset}px + ${cardHeight}px)`,
    right: index === 0 ? `calc(50% - ${horizontalOffset * 1.5}px + ${cardWidth/2}px)`
           : index === 1 ? `calc(50% - ${horizontalOffset * 0.5}px + ${cardWidth/2}px)`
           : index === 2 ? `calc(50% + ${horizontalOffset * 0.5}px + ${cardWidth/2}px)`
           : `calc(50% + ${horizontalOffset * 1.5}px + ${cardWidth/2}px)`,

  }));

  return (
    <Box sx={{ width: "100%", py: 8, position: "relative", overflow: "hidden" }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: "#2f2f68",
          fontSize: { xs: 36, md: 64 },
          mb: 6,
          textAlign: "center"
        }}
      >
        Simple Steps&nbsp;&nbsp;to get Started
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center the entire flow container
          width: "100%",
          position: "relative",
          mt: 4,
          height: "700px", // Increased height to accommodate the flow
        }}
      >
        {/* Step cards with absolute positioning */}
        {steps.map((step, index) => (
          <Box
            key={step.id}
            sx={{
              position: "absolute",
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              left: stepPositions[index].left,
              bottom: stepPositions[index].bottom,
              zIndex: 1,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                bgcolor: "#f0ddff91",
                borderRadius: "20px",
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -10,
                  left: 20,
                  bgcolor: "#5e2f7b",
                  borderRadius: "5px 5px 0 0",
                  px: 1.5,
                  py: 0.5,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: 11,
                  }}
                >
                  Step {step.id}
                </Typography>
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#001e32",
                  mb: 1,
                  mt: 3
                }}
              >
                {step.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  color: "#2f2f68",
                }}
              >
                {step.description}
              </Typography>
            </Paper>
          </Box>
        ))}

        {/* Connector lines - aligned with the boxes */}
        {/* Line from Step 1 to Step 2 */}
        {/* Vertical segment from Step 1 */}
        <Box sx={{
          position: "absolute",
          left: stepPositions[0].centerHorizontal,
          bottom: stepPositions[0].top,
          width: `${lineWidth}px`,
          height: `calc(${stepPositions[1].centerVertical} - ${stepPositions[0].top})`,
          bgcolor: "#5e2f7b",
          opacity: 0.5,
          zIndex: 0,
        }} />
        {/* Horizontal segment to Step 2 */}
         <Box sx={{
          position: "absolute",
          left: stepPositions[0].centerHorizontal,
          bottom: `calc(${stepPositions[1].centerVertical} - ${lineWidth/2}px)`, // Vertical center of Step 2
          width: `calc(${stepPositions[1].left} - ${stepPositions[0].centerHorizontal})`,
          height: `${lineWidth}px`,
          bgcolor: "#5e2f7b",
          opacity: 0.5,
          zIndex: 0,
        }} />

        {/* Line from Step 2 to Step 3 */}
        {/* Vertical segment from Step 2 */}
         <Box sx={{
          position: "absolute",
          left: stepPositions[1].centerHorizontal,
          bottom: stepPositions[1].top,
          width: `${lineWidth}px`,
          height: `calc(${stepPositions[2].centerVertical} - ${stepPositions[1].top})`,
          bgcolor: "#5e2f7b",
          opacity: 0.5,
          zIndex: 0,
        }} />
        {/* Horizontal segment to Step 3 */}
        <Box sx={{
          position: "absolute",
          left: stepPositions[1].centerHorizontal,
          bottom: `calc(${stepPositions[2].centerVertical} - ${lineWidth/2}px)`, // Vertical center of Step 3
          width: `calc(${stepPositions[2].left} - ${stepPositions[1].centerHorizontal})`,
          height: `${lineWidth}px`,
          bgcolor: "#5e2f7b",
          opacity: 0.5,
          zIndex: 0,
        }} />

        {/* Line from Step 3 to Step 4 */}
        {/* Vertical segment from Step 3 */}
         <Box sx={{
          position: "absolute",
          left: stepPositions[2].centerHorizontal,
          bottom: stepPositions[2].top,
          width: `${lineWidth}px`,
          height: `calc(${stepPositions[3].centerVertical} - ${stepPositions[2].top})`,
          bgcolor: "#5e2f7b",
          opacity: 0.5,
          zIndex: 0,
        }} />
        {/* Horizontal segment to Step 4 */}
        <Box sx={{
          position: "absolute",
          left: stepPositions[2].centerHorizontal,
          bottom: `calc(${stepPositions[3].centerVertical} - ${lineWidth/2}px)`, // Vertical center of Step 4
          width: `calc(${stepPositions[3].left} - ${stepPositions[2].centerHorizontal})`,
          height: `${lineWidth}px`,
          bgcolor: "#5e2f7b",
          opacity: 0.5,
          zIndex: 0,
        }} />

      </Box>
    </Box>
  );
};
