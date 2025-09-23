import React, { useState } from 'react';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h2 className={styles.loginTitle}>Login to 3D PrintLib</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e: { target: HTMLInputElement; }) =>
          setUsername((e.target as HTMLInputElement).value)
        }
        required
        className={styles.loginInput}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: { target: HTMLInputElement; }) =>
          setPassword((e.target as HTMLInputElement).value)
        }
        required
        className={styles.loginInput}
      />
      <button type={"submit" as "submit"} className={styles.loginButton}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
