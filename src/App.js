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
  const [completeList, setCompleteList] = useState([]);


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
    <div style={{ display: 'flex', backgroundColor: '#f0f0f0', height: "100vh", justifyContent: 'center' }}>
      <div className="left-wrapper">
        <div className="inner">
          <h1 style={{ textAlign: 'center' }}>ToDo List</h1>
        </div>
        <div className='addlist'>
          <AddList inputValue={addTask} handleChange={handleChange}
            handleClick={handleAddTask} isEditing={isEditing}
          />
        </div>
        <List items={addTask} setTodoList={setTodoList}
          todoList={todoList} editTask={editTask} setCompleteList={setCompleteList} completeList={completeList}/>

      </div>

      <div className="right-wrapper" style={{ marginLeft: '20px' }}>
        <div className="inner">
          <h1 style={{ textAlign: 'center' }}>Completed List</h1>

        </div>

        <CompleteList completeList={completeList} setTodoList={setTodoList}
          todoList={todoList} setCompleteList={setCompleteList} />
      </div>
    </div>


  );
}

export default App;
