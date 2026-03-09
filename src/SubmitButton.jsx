import React from 'react';

/**
 * SubmitButton Component
 *
 * Renders a submit button that tracks mouse hover events for anti-bot security purposes.
 *
 * Functionality:
 * - Displays a button with the text "Submit Password"
 * - Logs "Mouse Entering" when the user hovers over the button
 * - Logs "Mouse Exiting" when the user moves the mouse away from the button
 * - Used to help security engineers monitor user mouse movement patterns
 *
 * Events:
 * - onMouseEnter: Triggered when the user's mouse enters the button area
 * - onMouseLeave: Triggered when the user's mouse leaves the button area
 *
 * Connected to: App.jsx (parent component), used alongside PasswordInput
 */
const SubmitButton = () => {
  /**
   * Handles the mouse enter event when user hovers over the button.
   * Logs mouse entry for anti-bot monitoring.
   *
   * @param {Event} event - The mouse enter event from the button element
   */
  const handleEnter = (event) => {
    console.log("Mouse Entering");
  };

  /**
   * Handles the mouse leave event when user moves mouse away from the button.
   * Logs mouse exit for anti-bot monitoring.
   *
   * @param {Event} event - The mouse leave event from the button element
   */
  const handleLeave = (event) => {
    console.log("Mouse Exiting");
  };

  return (
    <button
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  );
};

export default SubmitButton;
