import React, { useState } from 'react';
import AddList from './AddList';
import './App.css';
import List from './DisplayList';

function App() {
  const [addTask, setaddTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setaddTask(event.target.value);
  };
  const handleAddTask = () => {
    if (addTask.trim() !== '') {
      setTodoList([...todoList, { task: addTask, status: 'Pending' }]);
      setaddTask('');
    }
  };

  return (
    <div className="Main">
      <div className="wrapper">
        <div className="inner">
          <h1 style={{ textAlign: 'center' }}>ToDo List</h1>
        </div>
        <AddList
          inputValue={addTask}
          handleChange={handleChange}
          handleClick={handleAddTask}
        />
        <List items={addTask} setTodoList={setTodoList} todoList={todoList} />
      </div>
    </div>
  );
}

export default App;
