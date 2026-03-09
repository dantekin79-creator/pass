import React from 'react';

const PasswordInput = () => {
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
