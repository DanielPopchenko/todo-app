import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import PropTypes from 'prop-types';

const CreateTodoForm = ({ handleAddingTodo, text, setText }) => {
  return (
    <form className="form" onSubmit={(e) => handleAddingTodo(e)}>
      <button type="button">
        <AiOutlinePlus fill="#181820" fontSize={25} />
      </button>
      <input type="text" placeholder="Type text" value={text} onChange={(e) => setText(e.target.value)} />
    </form>
  );
};

CreateTodoForm.propTypes = {
  handleAddingTodo: PropTypes.func,
  text: PropTypes.string,
  setText: PropTypes.func,
};

export default CreateTodoForm;
