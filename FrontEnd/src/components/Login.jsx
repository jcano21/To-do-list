import { useState } from 'react';
import { login } from '../services/endpoints';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(email);
      //Llama al token guardado en el localstorage
      localStorage.setItem('token', token);
      onLogin(email);
    } catch (err) {

        //Error si el email es invalido
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;