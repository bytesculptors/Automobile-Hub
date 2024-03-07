import React from 'react'
import { Link } from "react-router-dom";
import navLinks from '../../data/NavLink'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import "./TopNav.css"

function TopNav() {
  const user = useSelector(state => state.user);


  return (
    <div>
      <div className="top_nav">
        <div className="top_nav_wrapper">
          <div className="top_nav_right">
            <span className='notification'>
              <i className="ri-notification-3-line"></i>
              <span className='badget'>1</span>
            </span>
            
            <div className="profile">
              <Link to='settings'>
                <img className="avatar" src={user.user_images} alt=""></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav
