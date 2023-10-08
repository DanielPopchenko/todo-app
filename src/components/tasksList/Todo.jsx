/* eslint-disable react/prop-types */
import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../store/TodoSlice';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onRemoveTodo = () => {
    dispatch(removeTodo({ todo }));
  };

  return (
    <li className="todo">
      <p>{todo.text}</p>
      <RxCross2 fontSize={24} onClick={onRemoveTodo} />
    </li>
  );
};

export default Todo;
