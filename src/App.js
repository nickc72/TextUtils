
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3" >
        <TextForm heading="Enter your text to analyze below" />
      </div>
    </>
  );
}

export default App;
