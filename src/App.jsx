import { useState, useEffect } from 'react'
import { defaultResume } from './data'
import InputContainer from './components/InputContainer';

import './styles/App.css'

export default function App() {

  const [info, setInfo] = useState(() => {
    
    const saved = localStorage.getItem("resumeInfo");
    const savedInfo = JSON.parse(saved);
    return savedInfo || defaultResume;
  });

  useEffect(() => {
    localStorage.setItem("resumeInfo", JSON.stringify(info))
  }, [info]) 

  return (
    <>
      <div className="input-container">
        <InputContainer info={info} setInfo={setInfo}/>
      </div>
      <div className="display-container">

      </div>
    </>
  )
}

