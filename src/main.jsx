import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Input from './components/Input.jsx'
import InputForm from './components/InputContainer.jsx'
import InputSelection from './components/InputSelection.jsx'
import InputContainer from './components/InputContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
