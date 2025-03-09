import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList with initial todos', () => {
    render(<TodoList />);
    
    // Check if the heading is present
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo app')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    
    // Verify we have 3 todo items
    expect(screen.getAllByTestId('todo-item')).toHaveLength(3);
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    
    // Get the input field and add button
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Type a new todo and submit
    fireEvent.change(input, { target: { value: 'Test adding todo' } });
    fireEvent.click(addButton);
    
    // Check if the new todo is added
    expect(screen.getByText('Test adding todo')).toBeInTheDocument();
    
    // Verify we now have 4 todo items
    expect(screen.getAllByTestId('todo-item')).toHaveLength(4);
    
    // Verify input is cleared after adding
    expect(input.value).toBe('');
  });

  test('can toggle todo completion status', () => {
    render(<TodoList />);
    
    // Get the first todo text element
    const todoText = screen.getAllByTestId('todo-text')[0];
    const todoItem = screen.getAllByTestId('todo-item')[0];
    
    // Check initial state (not completed)
    expect(todoItem).not.toHaveClass('completed');
    
    // Toggle the todo
    fireEvent.click(todoText);
    
    // Check if it's now completed
    expect(todoItem).toHaveClass('completed');
    
    // Toggle it back
    fireEvent.click(todoText);
    
    // Check if it's back to not completed
    expect(todoItem).not.toHaveClass('completed');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    
    // Get initial count of todos
    const initialTodos = screen.getAllByTestId('todo-item');
    expect(initialTodos).toHaveLength(3);
    
    // Get the first delete button
    const deleteButton = screen.getAllByTestId('delete-button')[0];
    
    // Delete the first todo
    fireEvent.click(deleteButton);
    
    // Verify we now have 2 todo items
    expect(screen.getAllByTestId('todo-item')).toHaveLength(2);
    
    // Verify the "Learn React" todo is no longer in the document
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('does not add empty todos', () => {
    render(<TodoList />);
    
    // Get the initial count of todos
    const initialTodos = screen.getAllByTestId('todo-item');
    
    // Get the input field and add button
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Try to add an empty todo
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(addButton);
    
    // Verify the count hasn't changed
    expect(screen.getAllByTestId('todo-item')).toHaveLength(initialTodos.length);
  });

  test('does not add todos with only whitespace', () => {
    render(<TodoList />);
    
    // Get the initial count of todos
    const initialTodos = screen.getAllByTestId('todo-item');
    
    // Get the input field and add button
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Try to add a todo with only spaces
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Verify the count hasn't changed
    expect(screen.getAllByTestId('todo-item')).toHaveLength(initialTodos.length);
  });

  test('shows empty message when all todos are deleted', async () => {
    render(<TodoList />);
    
    // Delete all todos
    const deleteButtons = screen.getAllByTestId('delete-button');
    fireEvent.click(deleteButtons[0]);
    fireEvent.click(deleteButtons[1]);
    fireEvent.click(deleteButtons[2]);
    
    // Check if empty message is displayed
    expect(screen.getByText('No todos yet! Add one above.')).toBeInTheDocument();
  });
});