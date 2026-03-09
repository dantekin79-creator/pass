import React from 'react'
import PasswordInput from './components/PasswordInput'
import SubmitButton from './components/SubmitButton'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Password Anti-Bot Security</h1>
      <PasswordInput />
      <SubmitButton />
    </div>
  )
}

export default App
