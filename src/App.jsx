import { useState } from 'react'
import { defaultResume } from './data'

import './styles/App.css'

function App() {

  const [info, setInfo] = useState(defaultResume);

  return (
    <>
    <InputForm />
    <Display />
      
    </>
  )
}

export default App
