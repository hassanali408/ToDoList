import React, { useState } from 'react';
import AddList from './AddList';
import './App.css';
import List from './DisplayList';
import CompleteList from './CompleteList';

function App() {
  const [addTask, setaddTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (event) => {
    setaddTask(event.target.value);
  };
  const handleAddTask = () => {
    if (addTask.trim() !== '') {
      if (isEditing && editIndex !== null) {
        const updatedTodoList = [...todoList];
        updatedTodoList[editIndex].task = addTask;
        setTodoList(updatedTodoList);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setTodoList([...todoList, { task: addTask, status: 'Pending' }]);
      }
      setaddTask('');
    }
  };

  function editTask(index) {
    setIsEditing(true);
    setEditIndex(index);
    setaddTask(todoList[index].task); 
  };

  return (
    <div style={{display:'flex',flexDirection:'row', backgroundColor:'#f0f0f0'}}>
    <div className="Main">
      <div className="wrapper">
        <div className="inner">
          <h1 style={{ textAlign: 'center' }}>ToDo List</h1>
        </div>
        <AddList
          inputValue={addTask}
          handleChange={handleChange}
          handleClick={handleAddTask}
          isEditing={isEditing}
        />
        <List items={addTask} setTodoList={setTodoList} todoList={todoList} editTask={editTask} />

        
      </div>
   
    </div>
    <div className="right" style={{ marginLeft: '20px' }}>
        <div className="inner">
          <h1 style={{ textAlign: 'center' }}>Completed List</h1>
        </div>
        <CompleteList todoList={todoList}/>
      </div>
    </div>
  );
}

export default App;
