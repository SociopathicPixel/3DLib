import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import LandingPage from "./pages/LandingPage";
import PageAccount from "./pages/PageAccount";
import PageResetPassword from "./pages/PageResetPassword";
import { login, register } from "./api/auth";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HeroPage from "./components/layout/Hero";

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    const response = await login(username, password);

    if (response.status === 200) {
      const data = response.data;
      sessionStorage.setItem('authToken', data.token);
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('email', data.email);
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
      <Route path="/index"          element={<ProtectedRoute> <HeroPage />          </ProtectedRoute>} />
      <Route path="/account"        element={<ProtectedRoute> <PageAccount />       </ProtectedRoute>} />
      <Route path="/reset-password" element={<ProtectedRoute> <PageResetPassword /> </ProtectedRoute>} />
      <Route path="/*"              element={<ProtectedRoute> <LandingPage />       </ProtectedRoute>}/>
    </Routes>
  );
};

export default AppRoutes;
