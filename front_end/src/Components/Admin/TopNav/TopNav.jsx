import React from 'react'
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
 
} from "@material-tailwind/react";
import { useSelector } from 'react-redux';
import "./TopNav.css"
import {
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../Redux/userSlice";


function TopNav() {
  const user = useSelector(state => state.user);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(pathname)
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const paths = pathname.split("/").filter((el) => el !== "");
  // const handleLogout = () => {
  //   dispatch(clearUser());
  //   navigate("/home");
  // };
  const breadcrumbs = paths.map((path, index) => {
    const url = `/${paths.slice(0, index + 1).join("/")}`;
    const label = path.charAt(0).toUpperCase() + path.slice(1);
     if (index === 0) {
       return (
         <span key={index} className="opacity-60 text-black text-lg">
           {label}
         </span>
       );
     } else {
       return (
         <a
           key={index}
           href={url}
           className="opacity-60 text-black text-lg no-underline"
         >
           {label}
         </a>
       );
     }
  });
  return (
    
    <Navbar color="transparent" className="pl-0 pr-1">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Breadcrumbs separator="/" className="text-black items-center m-0">
            {breadcrumbs}
          </Breadcrumbs>
          {/* You can add additional content here, such as page title */}
        </div>
        <div className="profile">
          <Menu>
            <MenuHandler>
              <img
                className="avatar cursor-pointer"
                src={user.user_images}
                alt=""
              ></img>
            </MenuHandler>
            <MenuList className="w-max border-0 list-menu p-1">
              <MenuItem
                color="lightBlue"
                ripple="light"
                className="flex items-center py-2 px-4 hover:bg-gray-100"
                onClick={() => {
                  navigate("/dashboard/profile");
                }}
              >
                <UserIcon className="h-4 w-4 mr-2" /> {/* Add user icon */}
                Profile
              </MenuItem>
              <MenuItem
                color="lightBlue"
                ripple="light"
                className="flex items-center py-2 px-4 hover:bg-gray-100"
                onClick={() => {
                   dispatch(clearUser());
                   navigate("/home");
                }}
              >
                <ArrowLeftStartOnRectangleIcon className="h-4 w-4 mr-2 font-semibold" />
                Log out
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Navbar>
  );
}

export default TopNav
