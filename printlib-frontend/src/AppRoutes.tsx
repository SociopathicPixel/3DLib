import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import LandingPage from "./pages/LandingPage";
import { login, register } from "./api/auth";
import { ProtectedRoute } from "./components/ProtectedRoute";

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    const response = await login(username, password);

    if (response.status === 200) {
      const data = response.data;
      sessionStorage.setItem('authToken', data.token);
      window.location.href = '/index';
    } else {
      console.log("Login failed");
    }
  };

  const handleRegister = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const result = await register(username, email, password);
      console.log("Registration success:", result);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route
        path="/login"
        element={
          <LoginForm
            onLogin={handleLogin}
            onRegister={() => navigate("/register")}
          />
        }
      />
      <Route
        path="/register"
        element={
          <RegisterForm
            onRegister={handleRegister}
            onBack={() => navigate("/login")}
          />
        }
      />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <LandingPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
