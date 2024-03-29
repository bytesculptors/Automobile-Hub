import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import TopNav from './TopNav/TopNav';
import Dashboard from './Pages/Dashboard';
import Booking from './Pages/Booking';
import Setting from './Pages/Setting';

function Admin() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main_layout xl:ml-80 pb-4 pr-2">
        <TopNav />
        <div className="content ml-4">
          <Routes>
            <Route
              path="/"
              element={
                <Navigate to="dashboard/analytics" element={<Dashboard />} />
              }
            ></Route>
            <Route path="dashboard/analytics" element={<Dashboard />}></Route>
            <Route path="dashboard/transaction" element={<Booking />}></Route>
            <Route path="dashboard/profile" element={<Setting />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin
