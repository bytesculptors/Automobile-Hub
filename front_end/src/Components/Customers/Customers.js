import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Home/pages/Home'
import About from "../Home/pages/About";
import CarListing from "../Home/pages/CarListing";
import CarDetails from "../Home/pages/CarDetails";
import Blog from "../Home/pages/Blog";
import BlogDetails from "../Home/pages/BlogDetails";
import NotFound from "../Home/pages/NotFound";
import Contact from "../Home/pages/Contact";
import Header from '../../Components/Home/Home_Components/Header/Header'
import Footer from '../../Components/Home/Home_Components/Footer/Footer'
import MyProfile from './Pages/MyProfile';
import UpdatePassword from './Pages/UpdatePassword';
import MyBooking from './Pages/MyBooking';





function Customers() {
  function handleLoginSuccess() {
    return <Navigate to='/home' replace />;
  }

  return (
    <div className='layout'>
      <div className='main_layout'>
        <div className='content'>
        <Header/>
          <Routes>  
              
            <Route path='/home' element={<Home onLoginSuccess={handleLoginSuccess} />}  />
            <Route path='/about' element={<About onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/cars" element={<CarListing onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/cars/:slug" element={<CarDetails onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/blogs" element={<Blog onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/blogs/:slug" element={<BlogDetails onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/contact" element={<Contact onLoginSuccess={handleLoginSuccess} />} />
            <Route path='thong_tin' element = {<MyProfile/>}></Route>
            <Route path='/update_password' element = {<UpdatePassword/>}></Route>
            <Route path='/my_booking' element = {<MyBooking/>}></Route>
            <Route path='/' element={<Home onLoginSuccess={handleLoginSuccess} />}  />    
            {/* <Route path='bookings' element = {<Booking/>}></Route>
            <Route path='profile' element = {<Setting/>}></Route> */}
            <Route path="*" element={<NotFound onLoginSuccess={handleLoginSuccess} />} />
          </Routes>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Customers;