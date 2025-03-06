import { useState } from 'react';
import Login from './components/Login';
import CreateTask from './components/CreateTask';

function App() {
  const [userEmail, setUserEmail] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const handleLogin = (email) => {
    setUserEmail(email);
  };

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks({});
      setTasks(data);
    } catch (err) {
      setError('Error al cargar las tareas');
    }
  };



  if (!userEmail) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">
        Lista de Tareas - {userEmail}
      </h1>
      <CreateTask userEmail={userEmail} onTaskCreated={fetchTasks} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;