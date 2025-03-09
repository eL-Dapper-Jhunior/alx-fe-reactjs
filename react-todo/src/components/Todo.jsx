// src/components/Todo.jsx
import React from "react";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo">
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;