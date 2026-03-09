import React from 'react';
import './App.css';

const PasswordInput = () => {
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <input 
      type="password" 
      onChange={handleChange} 
    />
  );
};

const SubmitButton = () => {
  const handleEnter = () => {
    console.log("Mouse Entering");
  };

  const handleLeave = () => {
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

function App() {
  return (
    <>
      <PasswordInput />
      <SubmitButton />
    </>
  );
}

export default App;
