import React, { useState } from "react";
import PrintLibIntro from "../../pages/3DPrintLib";
import styles from '../../styles/RegisterForm.module.scss';
import { Grid } from "@mui/material";

interface RegisterFormProps {
  onRegister: (username: string, password: string, email: string) => void;
  onBack: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister, onBack }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRegister(username, password, email);
  };
  const validation = getPasswordValidation(password, username);
  const isPasswordValid =
    validation.uppercase &&
    validation.lowercase &&
    validation.digit &&
    validation.specialChar &&
    validation.length &&
    validation.noUsername;

  return (
    <Grid container spacing={1} className={styles.registerContainer}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <PrintLibIntro />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e: { target: HTMLInputElement }) =>
            setUsername((e.target as HTMLInputElement).value)
          }
          required
          className={styles.loginInput}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: { target: HTMLInputElement }) =>
            setEmail((e.target as HTMLInputElement).value)
          }
          required
          className={styles.loginInput}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: { target: HTMLInputElement }) =>
            setPassword((e.target as HTMLInputElement).value)
          }
          required
          className={styles.loginInput}
        />
        <div className={styles.buttonRow}>
          <button
            type={"button" as "button"}
            className={styles.backButton}
            onClick={onBack}
          >
            {"<<<"}
          </button>
          <button type="submit" className={styles.registerButton} disabled={!isPasswordValid}>
            Register
          </button>
        </div>
      </form>
      <div className={styles.passwordRequirementsInformation}>
        <h3>
          <u>Password Requirements:</u>
        </h3>
        <ul className={styles.passwordChecklist}>
          <li>
            <span className={validation.length ? styles.check : styles.cross}>
              {validation.length ? "✓" : "✗"}
            </span>{" "}
            At least 8 characters
          </li>
          <li>
            <span
              className={validation.specialChar ? styles.check : styles.cross}
            >
              {validation.specialChar ? "✓" : "✗"}
            </span>{" "}
            At least one special character
          </li>
          <li>
            <span
              className={validation.uppercase ? styles.check : styles.cross}
            >
              {validation.uppercase ? "✓" : "✗"}
            </span>{" "}
            At least one uppercase letter
          </li>
          <li>
            <span
              className={validation.lowercase ? styles.check : styles.cross}
            >
              {validation.lowercase ? "✓" : "✗"}
            </span>{" "}
            At least one lowercase letter
          </li>
          <li>
            <span className={validation.digit ? styles.check : styles.cross}>
              {validation.digit ? "✓" : "✗"}
            </span>{" "}
            At least one digit
          </li>
          <li>
            <span
              className={validation.noUsername ? styles.check : styles.cross}
            >
              {validation.noUsername ? "✓" : "✗"}
            </span>{" "}
            Must not contain username
          </li>
        </ul>
      </div>
    </Grid>
  );
};

const getPasswordValidation = (password: string, username: string) => {
  return {
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    digit: /\d/.test(password),
    specialChar: /[!@#$%^&*()_+]/.test(password),
    length: password.length >= 8,
    noUsername: !password.includes(username),
  };
  
};

export default RegisterForm;
