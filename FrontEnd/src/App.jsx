import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [userEmail, setUserEmail] = useState(null);
  const [error, setError] = useState('');

  const handleLogin = (email) => {
    setUserEmail(email);
  };

  if (!userEmail) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <h1>Lista de Tareas - {userEmail}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;