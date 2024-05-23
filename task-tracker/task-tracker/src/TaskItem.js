// TaskItem.js
import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  const { id, title, description, completed } = task;

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleComplete(id)}
      />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
