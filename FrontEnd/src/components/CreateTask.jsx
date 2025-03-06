import { useState } from 'react';
import { createTask } from '../services/endpoints';

const CreateTask = ({ userEmail, onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
        //Llama al endpoint CreateTask y se le envía el email y el titulo de la tarea 
      await createTask({ user_email: userEmail, title });
      setTitle('');
      //Se actualiza la lista de tareas
      onTaskCreated();
    } catch (err) {
      setError('Error, no se ha podido crear la tarea!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Agregar una Tarea"
          className="form-control"
          required
        />
        <button type="submit" className="btn btn-success">
          Agregar
        </button>
      </div>
      {error && <p className="text-danger mt-2">{error}</p>}
    </form>
  );
};
export default CreateTask;