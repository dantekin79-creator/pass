import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  /**
   * Test: App renders both PasswordInput and SubmitButton
   * Ensures the main application renders the complete form
   */
  test('renders App component with PasswordInput and SubmitButton', () => {
    render(<App />);

    // Check for input element
    const inputElement = screen.getByDisplayValue('');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'password');

    // Check for button element
    const buttonElement = screen.getByText('Submit Password');
    expect(buttonElement).toBeInTheDocument();
  });

  /**
   * Test: App integrates PasswordInput correctly
   * Verifies PasswordInput component is rendered and functional
   */
  test('PasswordInput component is functional in App', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<App />);
    const inputElement = screen.getByDisplayValue('');

    await user.type(inputElement, 'test');

    expect(consoleSpy).toHaveBeenCalledWith('Entering password…');

    consoleSpy.mockRestore();
  });

  /**
   * Test: App integrates SubmitButton correctly
   * Verifies SubmitButton component is rendered and functional
   */
  test('SubmitButton component is functional in App', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<App />);
    const buttonElement = screen.getByText('Submit Password');

    await user.hover(buttonElement);
    expect(consoleSpy).toHaveBeenCalledWith('Mouse Entering');

    await user.unhover(buttonElement);
    expect(consoleSpy).toHaveBeenCalledWith('Mouse Exiting');

    consoleSpy.mockRestore();
  });

  /**
   * Test: Both components work together
   * Simulates user interaction with both PasswordInput and SubmitButton
   */
  test('both components work together seamlessly', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<App />);

    // Type in password input
    const inputElement = screen.getByDisplayValue('');
    await user.type(inputElement, 'mypassword');

    // Hover over button
    const buttonElement = screen.getByText('Submit Password');
    await user.hover(buttonElement);

    // Verify all expected console logs
    const calls = consoleSpy.mock.calls.map(call => call[0]);
    expect(calls).toContain('Entering password…');
    expect(calls).toContain('Mouse Entering');

    consoleSpy.mockRestore();
  });

  /**
   * Test: Edge case - complete user flow
   * Simulates realistic user interaction: type password, hover button, unhover, etc.
   */
  test('handles complete user flow (edge case)', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<App />);

    const inputElement = screen.getByDisplayValue('');
    const buttonElement = screen.getByText('Submit Password');

    // User types password
    await user.type(inputElement, 'securepass123!@#');
    expect(consoleSpy).toHaveBeenCalledWith('Entering password…');

    // User hovers over button
    await user.hover(buttonElement);
    expect(consoleSpy).toHaveBeenCalledWith('Mouse Entering');

    // User moves mouse away
    await user.unhover(buttonElement);
    expect(consoleSpy).toHaveBeenCalledWith('Mouse Exiting');

    // User hovers again and types more
    await user.hover(buttonElement);
    await user.type(inputElement, 'more');
    expect(consoleSpy).toHaveBeenCalledWith('Mouse Entering');
    expect(consoleSpy).toHaveBeenCalledWith('Entering password…');

    consoleSpy.mockRestore();
  });

  /**
   * Test: Edge case - rapid interactions
   * Tests that rapid typing and mouse movements don't cause issues
   */
  test('handles rapid interactions (edge case)', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<App />);

    const inputElement = screen.getByDisplayValue('');
    const buttonElement = screen.getByText('Submit Password');

    // Rapid typing
    await user.type(inputElement, 'rapid', { delay: 5 });

    // Rapid hovering
    for (let i = 0; i < 3; i++) {
      await user.hover(buttonElement);
      await user.unhover(buttonElement);
    }

    expect(consoleSpy).toHaveBeenCalledWith('Entering password…');
    expect(consoleSpy).toHaveBeenCalledWith('Mouse Entering');
    expect(consoleSpy).toHaveBeenCalledWith('Mouse Exiting');

    consoleSpy.mockRestore();
  });
});
