import React, { useState } from 'react';
import './App.css'; // Import CSS for styling

const App: React.FC = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTask = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Add a new task"
          className="todo-input"
        />
        <button onClick={addTask} className="add-button">Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button onClick={() => removeTask(index)} className="remove-button">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

