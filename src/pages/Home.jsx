import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/TodoSlice';
import { TodoList } from '../components/tasksList/TodoList';

import { Header } from '../components/header/Header';
import CreateTodoForm from '../components/createTodoForm/CreateTodoForm';

const Home = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text }));

    setText('');
  };
  return (
    <>
      <Header />
      <div className="divided-container">
        <div className="content">
          <CreateTodoForm handleAddingTodo={handleAddTask} text={text} setText={setText} />
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default Home;
