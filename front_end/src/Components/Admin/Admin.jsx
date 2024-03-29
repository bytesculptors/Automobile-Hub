import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import TopNav from './TopNav/TopNav';
import Dashboard from './Pages/Dashboard';
import Booking from './Pages/Booking';
import Setting from './Pages/Setting';
import Supplier from './Pages/ManageSuppliers';
import "../Admin/Pages/Styles/Admin.css"
import Buyer from './Pages/ManageBuyers';
import Product from './Pages/ManageProducts';
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
            <Route path="dashboard/suppliers" element={<Supplier />}></Route>
            <Route path="dashboard/buyers" element={<Buyer />}></Route>
            <Route path="dashboard/products" element={<Product />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin
