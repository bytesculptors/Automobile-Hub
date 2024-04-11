import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/header.css";
import { clearUser } from '../../../../Redux/userSlice';
import Dropdown from 'react-bootstrap/Dropdown'
import { Badge } from "@mui/material";
import LoginModal from "../UI/LoginModal";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  UserIcon,
  ArrowUturnLeftIcon,
  ShoppingBagIcon
} from "@heroicons/react/24/solid";

const navLinks = [
  {
    path: "/home",
    display: "Trang chủ",
  },
  {
    path: "/cars",
    display: "Sản phẩm",
  },
  {
    path: "/contact",
    display: "Liên hệ",
  }
];

const Header = () => {
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const handleLogout = () => {
    dispatch(clearUser());
    window.localStorage.clear();
    window.location.reload();
    navigate("/home");
    
  };
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header bg-black">
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    <span>
                      Automobile <br />
                      Hub
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content text-white">
                  <h4>Cầu Giấy</h4>
                  <h6>Hà Nội, Việt Nam</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content text-white">
                  <h4>Thứ 2 đến thứ 7</h4>
                  <h6>9h - 20h</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="text-2xl mr-6">
                <Link className="no-underline text-gray-500" to="/home">
                  <i className="ri-home-5-line text-gray-500"></i>
                </Link>
              </button>
              <button className="text-2xl mr-6">
                {user.user_id ? (
                  <Link className="no-underline text-gray-500" to="/order">
                    {user.order_items.length === 0 ? (
                      <i className="ri-shopping-cart-line text-gray-500"></i>
                    ) : (
                      <Badge
                        badgeContent={user.order_items.length}
                        color="error"
                      >
                        <i class="ri-shopping-cart-line text-gray-500"></i>
                      </Badge>
                    )}
                  </Link>
                ) : (
                  <div
                    className="no-underline text-gray-500"
                    onClick={() => {
                      setOpenLoginModal(true);
                    }}
                  >
                    <i class="ri-shopping-cart-line"></i>
                  </div>
                )}
              </button>
              {user.user_name
                ? (console.log(1),
                  (
                    <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                      <Menu>
                        <MenuHandler>
                          <i className="ri-user-line text-gray-500 text-2xl cursor-pointer"></i>
                        </MenuHandler>
                        <MenuList className="w-max border-0 list-menu p-1">
                          <MenuItem
                            color="lightBlue"
                            ripple="light"
                            className="flex items-center py-2 px-4 hover:bg-gray-100"
                            onClick={() => {
                              navigate("/thong_tin");
                            }}
                          >
                            <UserIcon className="h-4 w-4 mr-2" />
                            Thông tin cá nhân
                          </MenuItem>
                          <MenuItem
                            color="lightBlue"
                            ripple="light"
                            className="flex items-center py-2 px-4 hover:bg-gray-100"
                            onClick={() => {
                              navigate("/my_booking");
                            }}
                          >
                            <ShoppingBagIcon className="h-4 w-4 mr-2" />
                            Đơn mua của tôi
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-2 font-bold"
                              viewBox="0 0 512 512"
                            >
                              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                            </svg>
                            Đăng xuất
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  ))
                : (console.log(2),
                  (
                    <div className="header__top__right d-flex align-items-center justify-content-end gap-3 hover:bg-gray-200 p-1 rounded-lg">
                      <Tooltip title="Đăng nhập tài khoản">
                        <Link
                          to="/login"
                          className="d-flex align-items-center gap-1 "
                        >
                          <i className="ri-user-shared-line text-gray-500 text-2xl"></i>
                        </Link>
                      </Tooltip>
                    </div>
                  ))}
            </Col>
          </Row>
        </Container>
      </div>
      <LoginModal
        open={openLoginModal}
        handleClose={() => {
          setOpenLoginModal(false);
        }}
      />
    </header>
  );
};

export default Header;