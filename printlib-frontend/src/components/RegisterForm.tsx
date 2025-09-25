import React, { useState } from "react";
import PrintLibIntro from "../pages/3DPrintLib";
import styles from './RegisterForm.module.scss';

interface RegisterFormProps {
  onRegister: (username: string, email: string, password: string) => void;
  onBack: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister, onBack }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRegister(username, email, password);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
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
        <button type="submit" className={styles.registerButton}>
          Register
        </button>
      </div>
    </form>
  );
};