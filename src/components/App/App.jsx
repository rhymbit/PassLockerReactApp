import React, { useState } from 'react'
import logo from '../../images/logo.svg'
import HomePage from '../Homepage/Homepage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HomePage />
  )
}

export default App
