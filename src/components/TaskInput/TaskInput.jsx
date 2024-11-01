import { useContext, useRef, useState } from 'react';
import { TaskContext } from '../TaskContext/TaskContext.jsx';

const TaskInput = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
    inputRef.current.focus();  
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Введіть нову задачу"
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default TaskInput;