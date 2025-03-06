import { updateTask, deleteTask } from '../services/endpoints';
import { RiDeleteBin5Fill } from "react-icons/ri";

const Task = ({ task, onTaskUpdated }) => {
  const handleToggle = async () => {
    await updateTask(task.id);
    onTaskUpdated();
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    onTaskUpdated();
  };

  return (
    <li
      className="list-group-item d-flex align-items-center justify-content-between custom-task-item mb-2 rounded"
    >
      <div className="d-flex align-items-center">
        <input
          type="radio"
          checked={task.is_completed}
          onChange={handleToggle}
          className="form-check-input me-3"
        />
        <div>
          <span
            className={`${
              task.is_completed ? 'text-muted text-decoration-line-through' : 'text-light'
            } fw-medium`}
          >
            {task.title}
          </span>
          <br />
        </div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <button
          onClick={handleDelete}
          className="btn btn-outline-danger custom-delete-btn"
          title="Eliminar tarea"
        >
            <RiDeleteBin5Fill className="delete-icon" />
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;