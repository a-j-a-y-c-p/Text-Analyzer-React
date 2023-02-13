import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, SetMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      SetMode('dark')
      document.body.style.backgroundColor = '#1f3350';
    }
    else {
      SetMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="MyApp" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter text here:" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
