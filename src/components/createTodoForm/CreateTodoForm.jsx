import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const CreateTodoForm = ({ handleAddingTodo, text, setText }) => {
  return (
    <div className="form">
      <button type="button" onClick={handleAddingTodo}>
        <AiOutlinePlus fill="#181820" fontSize={25} />
      </button>
      <input type="text" placeholder="Type text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default CreateTodoForm;
