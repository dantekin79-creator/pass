import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PasswordInput from './PasswordInput';

describe('PasswordInput Component', () => {
  /**
   * Test: Component renders an input element
   * Ensures that PasswordInput renders a single input element
   */
  test('renders an input element', () => {
    const { container } = render(<PasswordInput />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toBeInTheDocument();
  });

  /**
   * Test: Input has password type
   * Verifies that the input element has type="password"
   */
  test('renders input with password type', () => {
    render(<PasswordInput />);
    const inputElement = screen.getByDisplayValue('');
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  /**
   * Test: onChange event logs to console
   * Ensures that typing in the input triggers console.log with correct message
   */
  test('calls handleChange when user types in input', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<PasswordInput />);
    const inputElement = screen.getByDisplayValue('');

    await user.type(inputElement, 'password123');

    expect(consoleSpy).toHaveBeenCalledWith('Entering password…');
    expect(consoleSpy).toHaveBeenCalledTimes(11); // 11 characters typed

    consoleSpy.mockRestore();
  });

  /**
   * Test: handleChange logs correct message
   * Verifies the exact console.log message for typing events
   */
  test('logs correct message when typing', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<PasswordInput />);
    const inputElement = screen.getByDisplayValue('');

    await user.type(inputElement, 'a');

    expect(consoleSpy).toHaveBeenCalledWith('Entering password…');

    consoleSpy.mockRestore();
  });

  /**
   * Test: Edge case - rapid typing
   * Tests that event handler works correctly with rapid character input
   */
  test('handles rapid typing (edge case)', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<PasswordInput />);
    const inputElement = screen.getByDisplayValue('');

    await user.type(inputElement, 'abc', { delay: 10 });

    expect(consoleSpy).toHaveBeenCalledWith('Entering password…');
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(3);

    consoleSpy.mockRestore();
  });

  /**
   * Test: Edge case - paste event
   * Tests that pasting text also triggers the change event
   */
  test('handles paste event (edge case)', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<PasswordInput />);
    const inputElement = screen.getByDisplayValue('');

    await user.click(inputElement);
    await user.paste('pastedpassword');

    expect(consoleSpy).toHaveBeenCalledWith('Entering password…');

    consoleSpy.mockRestore();
  });

  /**
   * Test: Edge case - special characters
   * Tests that special characters in password input are handled
   */
  test('handles special characters (edge case)', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<PasswordInput />);
    const inputElement = screen.getByDisplayValue('');

    await user.type(inputElement, '!@#$%^&*()', { delay: 5 });

    expect(consoleSpy).toHaveBeenCalledWith('Entering password…');

    consoleSpy.mockRestore();
  });
});
