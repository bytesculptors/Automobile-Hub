import React from 'react'
import { useLocation, Link } from "react-router-dom";
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
import navLinks from '../../data/NavLink'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import "./TopNav.css"
import {
  BellIcon,
  Cog6ToothIcon,
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";


function TopNav() {
  const user = useSelector(state => state.user);
  const { pathname } = useLocation();
  console.log(pathname)
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const paths = pathname.split("/").filter((el) => el !== "");
  const breadcrumbs = paths.map((path, index) => {
    const url = `/${paths.slice(0, index + 1).join("/")}`;
    const label = path.charAt(0).toUpperCase() + path.slice(1);
    return (
      <a
        key={index}
        href={url}
        className="opacity-60 text-black text-lg no-underline"
      >
        {label}
      </a>
    );
  });
  return (
    // <Navbar
    //   color="white"
    //   className={`rounded-xl transition-all px-1 py-3`}
    //   fullWidth
    //   blurred={true}
    // >
    //   <div className="justify-between gap-6 md:flex-row md:items-center">
    //     <Breadcrumbs
    //       separator="/"
    //       className="p-0 transition-all text-black"
    //     >
    //       {breadcrumbs}
    //     </Breadcrumbs>
    //     <Typography variant="h6" color="black">
    //       {page}
    //     </Typography>
    //   </div>
    // </Navbar>
    <Navbar color="transparent" className="">
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
            <MenuList className="w-max border-0 list-menu">
              <MenuItem
                color="lightBlue"
                ripple="light"
                className="flex items-center py-2 px-4 hover:bg-gray-100"
              >
                <UserIcon className="h-4 w-4 mr-2" /> {/* Add user icon */}
                Profile
              </MenuItem>
              <MenuItem
                color="lightBlue"
                ripple="light"
                className="flex items-center py-2 px-4 hover:bg-gray-100"
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
