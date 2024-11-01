import { TaskProvider } from './components/TaskContext/TaskContext.jsx';
import TaskInput from './components/TaskInput/TaskInput.jsx';
import TaskList from './components/TaskList/TaskList.jsx';

function App() {
  return (
    <TaskProvider>
      <h1>Мій Задачник</h1>
      <TaskInput />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
