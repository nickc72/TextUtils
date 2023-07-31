
import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#10123a'
      showAlert('Dark mode has been enabled','success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled','success')
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
