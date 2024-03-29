import React from "react";
import navLinks from "../../data/NavLink";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../Redux/userSlice";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/home");
  };

  return (
    <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 h-100vh w-72 transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100">
      <div className={`relative`}>
        <div className="text-center py-6 px-8">
          <Typography variant="h4" color="white">
            <i className="ri-taxi-line mr-2"></i>
            Automobile Hub
          </Typography>
        </div>
        <div className="m-4">
          {navLinks.map((item, index) => (
            <li className="nav-item list-none" key={index}>
              <NavLink
                to={item.path}
                className={(navClass) =>
                  navClass.isActive ? "nav_active nav_link" : "nav_link"
                }
              >
                {({ isActive }) => (
                  <Button
                    variant={isActive ? "gradient" : "text"}
                    color={isActive ? "blue" : "white"}
                    className="flex items-center gap-4 capitalize"
                    fullWidth
                  >
                    <span className="text-2xl font-thin">
                      <i className={item.icon}></i>
                    </span>
                    <Typography
                      color="inherit"
                      className="font-medium capitalize text-base m-0"
                    >
                      {item.display}
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
