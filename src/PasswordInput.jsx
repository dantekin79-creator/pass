import React from 'react';

/**
 * PasswordInput Component
 *
 * Renders a password input field that tracks user typing for anti-bot security purposes.
 *
 * Functionality:
 * - Displays a password type input element
 * - Logs "Entering password…" to the console when the user types in the input
 * - Used to help security engineers monitor user typing cadence
 *
 * Events:
 * - onChange: Triggered when the user types in the input field
 *
 * Connected to: App.jsx (parent component)
 */
const PasswordInput = () => {
  /**
   * Handles the change event when user types in the password input.
   * Logs typing activity for anti-bot monitoring.
   *
   * @param {Event} event - The change event from the input element
   */
  const handleChange = () => {
    console.log("Entering password…");
  };

  return (
    <input
      type="password"
      onChange={handleChange}
    />
  );
};

export default PasswordInput;
