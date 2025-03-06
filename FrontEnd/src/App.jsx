import { useState,useEffect } from 'react';
import Login from './components/Login';
import CreateTask from './components/CreateTask';
import { getTasks } from './services/endpoints';
import List from './components/List';

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

  useEffect(() => {
    if (userEmail) fetchTasks();
  }, [userEmail]);

  if (!userEmail) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="page-wrapper">
    <div className="container mt-3">
      {/* Título */}
      <h1 className="mb-2">To do: </h1>

      {/* Lista de tareas */}
      <List tasks={tasks} onTaskUpdated={fetchTasks} />

      {/* Botón para agregar tarea */}
      <CreateTask userEmail={userEmail} onTaskCreated={fetchTasks} />

      {error && <p className="text-danger mt-3 text-center">{error}</p>}
    </div>
    </div>
  );
}

export default App;