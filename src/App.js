
import './App.css';
import Reg from './component/Registration/Reg'
import Login from './component/Login/Login';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
 
      {/* <Reg/> */}
      {/* <Login/> */}
 
      <Routes>
        <Route path="/" element={ <Reg/> } />
        <Route path="/login" element={ <Login/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>


    </>
  );
}

export default App;
