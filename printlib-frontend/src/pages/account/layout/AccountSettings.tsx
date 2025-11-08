import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

function AccountSettings() {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [message, setMessage] = useState("");

  const handleRequestReset = async () => {
    try {
      const email = sessionStorage.getItem('email') || "";
      await api.post("/auth/request-reset", {
        email: email
      });
      setMessage("Password reset email sent!");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setMessage(err.response?.data || "Something went wrong");
      } else {
        setMessage("Unexpected error occurred");
      }
    } finally {
      setOpenConfirm(false);
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={() => setOpenConfirm(true)}>
        Change Password
      </Button>

      <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <DialogTitle>Confirm Password Reset</DialogTitle>
        <DialogContent>
          Are you sure you want to request a password reset? You’ll receive an
          email with a link.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirm(false)}>Cancel</Button>
          <Button onClick={handleRequestReset} color="primary">
            Yes, I'm sure!
          </Button>
        </DialogActions>
      </Dialog>

      {message && <p>{message}</p>}
    </Box>
  );
}

export default AccountSettings;
