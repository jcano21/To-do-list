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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Iniciar Sesión</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;