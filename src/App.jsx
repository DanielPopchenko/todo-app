import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateTodoForm from './components/createTodoForm/CreateTodoForm';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import TasksList from './components/tasksList/TasksList';
import { addTodo } from './store/TodoSlice';

// const s = 'aabbbcccc' // returned value a2b3c4

const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTodo({ text }));

    setText('');
  };

  const updateString = (string) => {};

  const string = 'aabbbcccc'; // returned value a2b3c4
  const arr = string.split('');

  for (let i = 0; i === arr.length; i++) {
    console.log(i);
  }

  // const updatedString = arr.forEach((char, idx) => {
  //   const updatedArr = [];

  //   console.log(char, idx);

  //   // (char === arr[0] ? console.log(char) : console.log('no'))
  // });

  // console.log(updatedString);

  return (
    <>
      <Header />

      <div className="divided-container">
        <Sidebar />

        <div className="content">
          <CreateTodoForm handleAddingTodo={handleAddTask} text={text} setText={setText} />
          <TasksList />
        </div>
      </div>
    </>
  );
};

export default App;
