import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateTodoForm from './components/createTodoForm/CreateTodoForm';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import TasksList from './components/tasksList/TasksList';
import { addTodo } from './store/TodoSlice';

const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTodo({ text }));

    setText('');
  };

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
