import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

export const SignUp = () => {
  const [userType, setUserType] = useState("student");

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", py: 4, pl: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#15609e",
            fontSize: { xs: "28px", md: "40px" },
            position: "absolute",
            top: { xs: "20px", md: "40px" },
            left: { xs: "20px", md: "40px" },
          }}
        >
          TESTWALE.AI
        </Typography>

        <Box sx={{ 
          position: "relative", 
          display: "flex", 
          justifyContent: "flex-start",
          alignItems: "center",
          minHeight: "100vh",
          py: 4,
          pl: { xs: 0, md: 2 }
        }}>
          <Paper
            elevation={0}
            sx={{
              width: { xs: "90%", sm: "500px", md: "600px" },
              bgcolor: "#f0ddff91",
              borderRadius: "20px",
              p: { xs: 2, md: 3 },
              zIndex: 1,
              position: "relative",
              ml: 0
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                width: { xs: "200px", md: "256px" },
                height: { xs: "45px", md: "55px" },
                bgcolor: "#001e32",
                borderRadius: "50px",
                mt: "10px",
                ml: "10px",
                "&:hover": { bgcolor: "#001e32" },
                textTransform: "none"
              }}
            >
              <Typography
                variant="h5"
                sx={{ 
                  fontWeight: 600, 
                  color: "white", 
                  fontSize: { xs: "22px", md: "28px" } 
                }}
              >
                Sign Up
              </Typography>
            </Button>

            <Stack spacing={2} sx={{ mt: 3 }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: "#000000c4", mb: 1 }}
                >
                  Enter Email*
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Write here"
                  variant="outlined"
                  InputProps={{
                    sx: { bgcolor: "white", height: "42px" },
                  }}
                />
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: "#000000c4", mb: 1 }}
                >
                  Password*
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Write here"
                  type="password"
                  variant="outlined"
                  InputProps={{
                    sx: { bgcolor: "white", height: "42px" },
                  }}
                />
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: "#000000c4", mb: 1 }}
                >
                  Name*
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Write here"
                  variant="outlined"
                  InputProps={{
                    sx: { bgcolor: "white", height: "42px" },
                  }}
                />
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: "#000000c4", mb: 1 }}
                >
                  Phone*
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Write here"
                  variant="outlined"
                  InputProps={{
                    sx: { bgcolor: "white", height: "42px" },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          component="img"
                          src="https://c.animaapp.com/mayvxnx3gy0U8I/img/image-50.png"
                          alt="Country flag"
                          sx={{ width: "48px", height: "33px" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "black",
                      "&.Mui-checked": { color: "black" },
                      width: "25px",
                      height: "25px",
                      borderRadius: "5px",
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontWeight: 300, fontSize: "20px", ml: 1 }}>
                    Agree with Privacy Policy
                  </Typography>
                }
              />

              <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={2} 
                sx={{ 
                  mt: 2, 
                  justifyContent: "center",
                  width: "100%"
                }}
              >
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => handleUserTypeChange("student")}
                  sx={{
                    width: { xs: "100%", sm: "200px" },
                    height: "72px",
                    bgcolor: userType === "student" ? "#5e2f7c" : "white",
                    color: userType === "student" ? "white" : "#001e32",
                    borderRadius: "50px",
                    border: userType === "student" ? "none" : "1px solid #2f2f68",
                    boxShadow: userType === "student" ? "none" : "0px 0px 4px #00000040",
                    "&:hover": {
                      bgcolor: userType === "student" ? "#5e2f7c" : "white",
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Student
                  </Typography>
                </Button>

                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => handleUserTypeChange("mentor")}
                  sx={{
                    width: { xs: "100%", sm: "200px" },
                    height: "72px",
                    bgcolor: userType === "mentor" ? "#5e2f7c" : "white",
                    color: userType === "mentor" ? "white" : "#001e32",
                    borderRadius: "50px",
                    border: userType === "mentor" ? "none" : "1px solid #2f2f68",
                    boxShadow: userType === "mentor" ? "none" : "0px 0px 4px #00000040",
                    "&:hover": {
                      bgcolor: userType === "mentor" ? "#5e2f7c" : "white",
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Mentor
                  </Typography>
                </Button>
              </Stack>

              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 300, fontSize: "20px" }}
                >
                  Already have an Account ?{" "}
                  <Link
                    href="/login"
                    underline="hover"
                    sx={{ color: "black", fontWeight: 300 }}
                  >
                    Login
                  </Link>
                </Typography>
              </Box>
            </Stack>
          </Paper>

          <Box
            component="img"
            src="https://c.animaapp.com/mayvxnx3gy0U8I/img/image-51.png"
            alt="Smiling young woman"
            sx={{
              position: "absolute",
              width: { xs: "100%", md: "1100px" },
              height: { xs: "auto", md: "800px" },
              right: { xs: "-50%", md: "-230px" },
              top: { xs: "50%", md: "55%" },
              transform: "translateY(-50%)",
              objectFit: "contain",
              zIndex: 0,
              opacity: 0.8,
              display: { xs: "none", md: "block" }
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};
