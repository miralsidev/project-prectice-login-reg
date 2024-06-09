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
import Payment from './component/Bookings/Payment';
import Protecter from './component/Protected/Protecter';
import MyBooking from './component/MyBooking/MyBooking';
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
        <Route path='/book/:carId' element={<Protecter Component={Book} />} />
        {/* <Route path='/book/:carId' element={<Book />} /> */}
         <Route path='/payment' element={<Payment/>}/>
         <Route path='/MyBooking' element={<Protecter Component={MyBooking} />}/>
        {/* <Route path='/Product' element={<Product/>}/> */}
      </Routes>

    </>
  );
}
export default App;
