
import './App.css';
import Reg from './component/Registration/Reg'
import Login from './component/Login/Login';
import ForgotPasswordForm from './component/ForgotPass/ForgotPasswordForm';
import OTPVerificationForm from './component/ForgotPass/OTPVerificationForm';
import { Routes, Route } from "react-router-dom"
import UpdatePassword from './component/ForgotPass/UpdatePassword';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';
// import NavBar from './component/NavBar/NavBar';

function App() {
  return (
    <>
    {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<Reg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ForgotPasswordForm" element={<ForgotPasswordForm />} />
        <Route path='/OTPVerificationForm' element={<OTPVerificationForm />} />
        <Route path='/UpdatePassword' element={<UpdatePassword />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
