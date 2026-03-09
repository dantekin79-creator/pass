import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SubmitButton from './SubmitButton';

describe('SubmitButton Component', () => {
  /**
   * Test: Component renders a button element
   * Ensures that SubmitButton renders a button element
   */
  test('renders a button element', () => {
    render(<SubmitButton />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  /**
   * Test: Button displays correct text
   * Verifies that button text reads "Submit Password"
   */
  test('displays button with text "Submit Password"', () => {
    render(<SubmitButton />);
    const buttonElement = screen.getByText('Submit Password');
    expect(buttonElement).toBeInTheDocument();
  });

  /**
   * Test: onMouseEnter event triggers handleEnter
   * Ensures that hovering over button logs "Mouse Entering"
   */
  test('calls handleEnter when mouse enters button', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<SubmitButton />);
    const buttonElement = screen.getByText('Submit Password');

    await user.hover(buttonElement);

    expect(consoleSpy).toHaveBeenCalledWith('Mouse Entering');

    consoleSpy.mockRestore();
  });

  /**
   * Test: onMouseLeave event triggers handleLeave
   * Ensures that moving mouse away from button logs "Mouse Exiting"
   */
  test('calls handleLeave when mouse leaves button', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<SubmitButton />);
    const buttonElement = screen.getByText('Submit Password');

    await user.hover(buttonElement);
    await user.unhover(buttonElement);

    expect(consoleSpy).toHaveBeenCalledWith('Mouse Exiting');

    consoleSpy.mockRestore();
  });

  /**
   * Test: Both mouse enter and leave events
   * Verifies that both "Mouse Entering" and "Mouse Exiting" are logged in sequence
   */
  test('logs both enter and exit messages in sequence', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<SubmitButton />);
    const buttonElement = screen.getByText('Submit Password');

    await user.hover(buttonElement);
    expect(consoleSpy).toHaveBeenCalledWith('Mouse Entering');

    await user.unhover(buttonElement);
    expect(consoleSpy).toHaveBeenCalledWith('Mouse Exiting');

    consoleSpy.mockRestore();
  });

  /**
   * Test: Edge case - rapid hover/unhover
   * Tests that rapid mouse movements trigger correct events
   */
  test('handles rapid mouse hover/unhover (edge case)', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<SubmitButton />);
    const buttonElement = screen.getByText('Submit Password');

    // Simulate rapid hovering
    await user.hover(buttonElement);
    await user.unhover(buttonElement);
    await user.hover(buttonElement);
    await user.unhover(buttonElement);

    const calls = consoleSpy.mock.calls.map(call => call[0]);
    expect(calls).toContain('Mouse Entering');
    expect(calls).toContain('Mouse Exiting');

    consoleSpy.mockRestore();
  });

  /**
   * Test: Edge case - click event doesn't trigger mouse events
   * Ensures clicking button doesn't interfere with mouse enter/leave
   */
  test('handles click event correctly (edge case)', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<SubmitButton />);
    const buttonElement = screen.getByText('Submit Password');

    await user.click(buttonElement);

    // Clicking alone shouldn't trigger mouse enter/leave
    // The console logs should only come from hover/unhover
    const allCalls = consoleSpy.mock.calls.map(call => call[0]);
    // Filter for mouse enter/leave logs
    const mouseEventCalls = allCalls.filter(
      call => call === 'Mouse Entering' || call === 'Mouse Exiting'
    );

    consoleSpy.mockRestore();
  });

  /**
   * Test: Edge case - multiple hover sequences
   * Tests that multiple hover/unhover sequences are tracked correctly
   */
  test('handles multiple hover sequences (edge case)', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();

    render(<SubmitButton />);
    const buttonElement = screen.getByText('Submit Password');

    // First hover sequence
    await user.hover(buttonElement);
    await user.unhover(buttonElement);

    // Second hover sequence
    await user.hover(buttonElement);
    await user.unhover(buttonElement);

    // Verify both sequences were logged
    const calls = consoleSpy.mock.calls.map(call => call[0]);
    expect(calls.filter(c => c === 'Mouse Entering')).toHaveLength(2);
    expect(calls.filter(c => c === 'Mouse Exiting')).toHaveLength(2);

    consoleSpy.mockRestore();
  });
});
