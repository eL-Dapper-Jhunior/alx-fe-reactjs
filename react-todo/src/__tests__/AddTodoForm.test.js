import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm Component', () => {
  test('renders the form correctly', () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);
    
    // Check if input and button are rendered
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
  });

  test('calls addTodo function when form is submitted with valid input', () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);
    
    // Get the input field and add button
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Type into the input and submit
    fireEvent.change(input, { target: { value: 'New test todo' } });
    fireEvent.click(addButton);
    
    // Check if addTodo was called with the correct argument
    expect(mockAddTodo).toHaveBeenCalledWith('New test todo');
  });

  test('does not call addTodo function when form is submitted with empty input', () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);
    
    // Get the add button
    const addButton = screen.getByTestId('add-button');
    
    // Submit without changing the input (it's empty by default)
    fireEvent.click(addButton);
    
    // Check that addTodo was not called
    expect(mockAddTodo).not.toHaveBeenCalled();
  });

  test('clears input after successful submission', () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);
    
    // Get the input field and add button
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Type into the input and submit
    fireEvent.change(input, { target: { value: 'New test todo' } });
    fireEvent.click(addButton);
    
    // Check if input is cleared
    expect(input.value).toBe('');
  });
});