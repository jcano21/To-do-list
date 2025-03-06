import { useState } from 'react';
import { login } from '../services/endpoints';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(email);
      localStorage.setItem('token', token);
      onLogin(email);
    } catch (err) {
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        {/* Seccion Izquierda*/}
        <div className="login-form">
          <h2 className="login-title">¡Bienvenido a To-do-List!</h2>
          <p className="login-subtitle">Ingresa tu e-mail para ver tu lista de tareas!</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu e-mail"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Iniciar Sesión
            </button>
          </form>
          {error && <p className="text-danger mt-3 text-center">{error}</p>}
        
          
        </div>

        {/* Sección derecha - Imagen */}
        <div className="login-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png"
            alt="Login Visual"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;