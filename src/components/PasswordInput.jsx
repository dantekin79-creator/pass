import React from 'react';

const PasswordInput = () => {
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input 
        type="password" 
        onChange={handleChange} 
        placeholder="Password"
      />
    </div>
  );
};

export default PasswordInput;
