import React, { useState } from 'react';
import AddList from './AddList';
import './App.css';
import List from './DisplayList';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    // Add the inputValue to the todoList
    setTodoList([...todoList, inputValue]);
    setInputValue(''); // Clear inputValue
  };

  return (
    <div className="Main">
      <div className="wrapper">
        <div className="inner">
          <h1 style={{ textAlign: 'center' }}>ToDo List</h1>
        </div>
        <AddList
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleChange={handleChange}
          handleClick={handleClick}
        />
        <List items={todoList} /> 
      </div>
    </div>
  );
}

export default App;
