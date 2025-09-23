import React, { useEffect } from 'react';
import LoginForm from './components/LoginForm';
import './styles/theme.scss';

function App() {
  useEffect(() => {
    document.body.classList.remove('light-theme'); // default to dark
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
  };

  const handleLogin = (username: string, password: string) => {
    console.log('Logging in with:', username, password);
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
