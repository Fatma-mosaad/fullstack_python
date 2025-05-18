import React from 'react';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="todo-list">
      <h3>Let's add tasks</h3>
      {todos.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span className={`todo-text ${todo.completed ? 'todo-completed' : ''}`}>
                {todo.text}
              </span>
              <button onClick={() => onDelete(todo.id)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
