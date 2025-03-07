import TaskItem from './Task';

const List = ({ tasks, onTaskUpdated }) => {
    return (
        <ul className="list-group shadow-sm">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onTaskUpdated={onTaskUpdated} />
          ))}
        </ul>
      );
};

export default List;