import React from 'react';

function TaskList({ tasks, updateTask, deleteTask, toggleTaskCompletion }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none'
            }}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;