
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
import Logout from './component/Logout/Logout';
import Profile from './component/Profile/Profile';
import Book from './component/Bookings/Book';

function App() {
  return (
    <>
  
      <Routes>
   
        <Route path="/reg" element={<Reg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ForgotPasswordForm" element={<ForgotPasswordForm />} />
        <Route path='/OTPVerificationForm' element={<OTPVerificationForm />} />
        <Route path='/UpdatePassword' element={<UpdatePassword />} />

        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/book/:carId' element={<Book />} />
      </Routes>

    </>
  );
}
export default App;
