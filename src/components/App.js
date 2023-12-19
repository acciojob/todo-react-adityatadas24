
import React from "react";
import './../styles/App.css';

const App = ()=> {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTodo = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTodo = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter your task"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
