import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import PrintLibIntro from '../pages/3DPrintLib';


interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  onRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(username, password);
  };
  
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <PrintLibIntro/>
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
      <button type={"submit" as "submit"} className={styles.loginButton}>Login</button>
      <button type={"register" as "button"} className={styles.registerButton} onClick={onRegister}>Click here to register!</button>
    </form>
  );
};

export default  LoginForm;
