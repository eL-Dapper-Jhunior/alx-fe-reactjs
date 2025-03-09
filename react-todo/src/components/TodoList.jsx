// src/components/TodoList.jsx
import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <div className="todos">
        {todos.length === 0 ? (
          <p className="empty-message">No todos yet! Add one above.</p>
        ) : (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;