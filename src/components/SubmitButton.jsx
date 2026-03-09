import React from 'react';

const SubmitButton = () => {
  const handleEnter = () => {
    console.log("Mouse Entering");
  };

  const handleLeave = () => {
    console.log("Mouse Exiting");
  };

  return (
    <div>
      <button 
        onMouseEnter={handleEnter} 
        onMouseLeave={handleLeave}
      >
        Submit Password
      </button>
    </div>
  );
};

export default SubmitButton;
