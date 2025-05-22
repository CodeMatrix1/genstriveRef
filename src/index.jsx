import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SignUp } from "./pages/SignUp/SignUp";
import { Login } from "./pages/Login/Login";
import { LandingPage } from "./pages/LandingPage/LandingPage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <SignUp />
    <Login />
    <LandingPage />
  </StrictMode>,
);

