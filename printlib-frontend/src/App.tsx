import React, { useEffect } from 'react';
import LoginForm from './components/LoginForm';
import './styles/theme.scss';
import { login } from './api/auth';

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
    // TODO: store token or redirect
  } catch (error) {
    console.error('Login failed:', error);
  }
};


  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
