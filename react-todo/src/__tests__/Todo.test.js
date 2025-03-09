import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from '../components/Todo';

describe('Todo Component', () => {
  const mockTodo = {
    id: 1,
    text: 'Test todo',
    completed: false
  };
  
  const mockCompletedTodo = {
    id: 2,
    text: 'Completed todo',
    completed: true
  };
  
  const mockToggleTodo = jest.fn();
  const mockDeleteTodo = jest.fn();

  test('renders a todo item correctly', () => {
    render(
      <Todo 
        todo={mockTodo} 
        toggleTodo={mockToggleTodo} 
        deleteTodo={mockDeleteTodo} 
      />
    );
    
    // Check if todo text is displayed
    expect(screen.getByText('Test todo')).toBeInTheDocument();
    
    // Check if delete button is displayed
    expect(screen.getByText('Delete')).toBeInTheDocument();
    
    // Check if the todo item doesn't have the completed class
    expect(screen.getByTestId('todo-item')).not.toHaveClass('completed');
  });

  test('renders a completed todo correctly', () => {
    render(
      <Todo 
        todo={mockCompletedTodo} 
        toggleTodo={mockToggleTodo} 
        deleteTodo={mockDeleteTodo} 
      />
    );
    
    // Check if the completed todo has the completed class
    expect(screen.getByTestId('todo-item')).toHaveClass('completed');
  });

  test('calls toggleTodo when todo text is clicked', () => {
    render(
      <Todo 
        todo={mockTodo} 
        toggleTodo={mockToggleTodo} 
        deleteTodo={mockDeleteTodo} 
      />
    );
    
    // Click on the todo text
    fireEvent.click(screen.getByTestId('todo-text'));
    
    // Check if toggleTodo was called with the correct id
    expect(mockToggleTodo).toHaveBeenCalledWith(mockTodo.id);
  });

  test('calls deleteTodo when delete button is clicked', () => {
    render(
      <Todo 
        todo={mockTodo} 
        toggleTodo={mockToggleTodo} 
        deleteTodo={mockDeleteTodo} 
      />
    );
    
    // Click on the delete button
    fireEvent.click(screen.getByTestId('delete-button'));
    
    // Check if deleteTodo was called with the correct id
    expect(mockDeleteTodo).toHaveBeenCalledWith(mockTodo.id);
  });
});