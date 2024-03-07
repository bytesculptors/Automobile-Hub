import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Admin from './Components/Admin/Admin';
import Login from './Components/Login_Signup/Login';
import Signup from './Components/Login_Signup/Signup';
import Home from './Components/Home/Home';
import { useSelector } from 'react-redux';
import { CarDataProvider } from './Components/data/CarDataContext';
import CarsData from './Components/data/CarsData';
import { UserDataProvider } from './Components/data/UserContext';
import UserData from './Components/data/UserData';
import { BookingDataProvider } from './Components/data/BookingContext';
import BookingData from './Components/data/BookingData';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Customers from './Components/Customers/Customers';


function App() {
  // const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log(user);


  return (
    <CarDataProvider>
      <UserDataProvider>
        <BookingDataProvider>
          <CarsData />
          <UserData />
          <BookingData />
          <BrowserRouter>
            <Routes>
              <Route path='*' element={user.access === 'admin' ? (
                <Admin />
              ) : user.access === 'user' ? (
              <Customers />
              ) : (
              <Home />
              )}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </BookingDataProvider>
    </UserDataProvider>
    </CarDataProvider >
  );
}


export default App;



// // : user.access === 'user' ? (
//   <Customer />
//   ) 
