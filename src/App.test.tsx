import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders experience question and can click checkbox', () => {
  render(<App />);
  const text = screen.getByText(/What kind of tutoring experience do you have?/i);
  expect(text).toBeInTheDocument();

  const checkbox = screen.getAllByRole("checkbox")[0];
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox)

  expect(checkbox).toBeChecked();
});

test('alert appears when input empty', () => {
  render(<App />);
  const text = screen.getByText(/How much overall experience do you have??/i);
  expect(text).toBeInTheDocument();
  const alertMock = jest.spyOn(window,'alert').mockImplementation(); 

  const checkbox = screen.getAllByRole("checkbox")[0];

  fireEvent.click(checkbox)

  const reset = screen.getAllByRole("button")[0];
  const submit = screen.getAllByRole("button")[1];

  fireEvent.click(reset);
  fireEvent.click(submit);

  expect(alertMock).toHaveBeenCalledTimes(1)
});

