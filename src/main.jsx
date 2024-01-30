import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import './index.css'
import Food from './Food.jsx'
import TestTitle from './TestTitle.jsx'
import Animals from './Animals.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <Food />
    <TestTitle />
    <Animals />
    

  </React.StrictMode>,
)
