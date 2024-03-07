import React from 'react'
import navLinks from '../../data/NavLink'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Sidebar.css"
import { useDispatch } from 'react-redux';
import { clearUser } from '../../../Redux/userSlice';




function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/home")
  };


  return (
    <div>
      <div className='sidebar'>
        <div className='sidebar_top'>
          <h2>
            <span>
              <i className="ri-taxi-line"></i>
            </span>
            GreenCar
          </h2>
        </div>
        <div className='sidebar_content'>
          <div className="menu">
            <ul className="nav_list">
              {
                navLinks.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink to={item.path} className={navClass => navClass
                      .isActive ? 'nav_active nav_link' : 'nav_link'}>
                      <i className={item.icon}></i>
                      <span>{item.display}</span>
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className='sidebar_bottom'>
          <span onClick={handleLogout}>
            <i className="ri-logout-circle-r-line"></i> Logout
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
