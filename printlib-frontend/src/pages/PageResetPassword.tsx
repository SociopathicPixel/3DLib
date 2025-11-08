import React, { useState } from "react";
import axios from "axios";

interface ChangePasswordFormProps {
  onRegister: (username: string, password: string, ) => void;
  onBack: () => void;
}

const PageResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const token = new URLSearchParams(window.location.search).get("token");  
  const email = sessionStorage.getItem("email");

  try {
    axios.post("/api/auth/verify-reset-token", { token, email });
  } catch (error) {
    window.location.href = "/login";
  }

  const handleSubmit = async () => {
    await axios.post("/api/auth/reset-password", { token, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};
export default PageResetPassword;
