import { useContext } from 'react';
import { TaskContext } from '../TaskContext/TaskContext'
const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default TaskList;