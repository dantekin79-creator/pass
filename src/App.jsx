import React from 'react';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

/**
 * App Component
 *
 * Main application component that renders the password input form for anti-bot security monitoring.
 *
 * Component Structure:
 * - PasswordInput: Tracks typing activity on password input field
 * - SubmitButton: Tracks mouse hover events on submit button
 *
 * Purpose:
 * This app collects user interaction data (typing cadence and mouse movement)
 * for security engineers to implement anti-bot measures.
 */
function App() {
  return (
    <>
      <PasswordInput />
      <SubmitButton />
    </>
  );
}

export default App;
