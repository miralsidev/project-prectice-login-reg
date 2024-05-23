
import './App.css';
import Reg from './component/Registration/Reg'
import Login from './component/Login/Login';
import ForgotPasswordForm from './component/ForgotPass/ForgotPasswordForm';
import OTPVerificationForm from './component/ForgotPass/OTPVerificationForm';
import { Routes, Route } from "react-router-dom"
import UpdatePassword from './component/ForgotPass/UpdatePassword';
import Home from './component/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Reg/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/ForgotPasswordForm" element={ <ForgotPasswordForm/> } />
        <Route path='/OTPVerificationForm' element={ <OTPVerificationForm/> } />
        <Route path='/UpdatePassword' element={ <UpdatePassword/> } />
        
        <Route path='/Home' element={ <Home/> } />
      </Routes>

    </>
  );
}

export default App;
