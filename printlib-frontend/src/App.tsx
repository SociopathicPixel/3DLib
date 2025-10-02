import React, { useEffect } from 'react';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/RegisterForm';
import { login, register } from './api/auth';
import './styles/theme.scss';

function App() {
  useEffect(() => {
    document.body.classList.remove('light-theme'); // default to dark
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
  };


  const handleLogin = async (username: string, password: string) => {
    try {
      const result = await login(username, password);
      console.log('Login success:', result);
    } catch (error) {
      console.error('Login failed:', error);
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
      setShowRegister(false); // go back to login
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const [showRegister, setShowRegister] = React.useState(false);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {showRegister ? (
        <RegisterForm 
          onRegister={handleRegister}
          onBack={() => setShowRegister(false)}
        />
      ) : (
        <LoginForm
          onLogin={handleLogin}
          onRegister={() => setShowRegister(true)}
        />
      )}
    </div>
  );
}

export default App;
