
import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
import About from './Component/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      showAlert('Dark mode has been enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Routes>
            <Route  path='/about' element={<About/>}></Route>
            <Route  path='/' element={<TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter >
    </>
  );
}

export default App;
