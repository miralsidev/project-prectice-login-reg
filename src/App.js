
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
import Protecter from './component/Protected/Protected';
// import NavBar from './component/NavBar/NavBar';
function App() {
  return (
    <>
      {/* <NavBar/> */}
      <Routes>
        {/* <Route path="/" element={<Reg />} /> */}
        <Route path="/reg" element={<Reg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ForgotPasswordForm" element={<ForgotPasswordForm />} />
        <Route path='/OTPVerificationForm' element={<OTPVerificationForm />} />
        <Route path='/UpdatePassword' element={<UpdatePassword />} />
        {/* <Route path='/Home' element={<Home />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/book/:carId' element={<Book />} />
      </Routes>
      {/* <Routes>
        <Route path="/*" element={<Home />}> */}
      {/* <Route path="deshbord" element={<Protecter Component={Deshbord} />} />
          <Route path="user" element={<Protecter Component={User} />} /> */}
      {/* <Route path="user" element={<User />} /> */}
      {/* <Route path="home" element={<Protecter Component={Home} />} /> */}

      {/* <Route path="profile" element={<Protecter Component={Cars} />} /> */}
      {/* <Route path="*" element={<Navigate to="deshbord" />} /> */}
      {/* <Route path='CarsForm' element={<Protecter Component={CarsForm} />} />
          <Route path='BlogForm' element={<Protecter Component={BlogForm} />} /> */}
      {/* <Route path='Home' element={<Protecter Component={Home} />} />
          <Route path='Contact' element={<Protecter Component={Contact} />} />
          <Route path='Profile' element={<Protecter Component={Profile} />} />
          <Route path="blogs" element={<Protecter Component={Blog} />} />
        </Route>
    
        
      </Routes> */}
    </>
  );
}
export default App;
