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
    <header className="header">
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
                <div className="header__location-content">
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
                <div className="header__location-content">
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
                <Link className="no-underline text-black" to="/home">
                  <i className="ri-home-5-line text-gray-500"></i>
                </Link>
              </button>
              <button className="text-2xl mr-6">
                {user.user_id ? (
                  <Link className="no-underline text-black" to="/order">
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
                    className="no-underline text-black"
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
                            <ArrowUturnLeftIcon className="h-4 w-4 mr-2" />
                            Đăng xuất
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  ))
                : (console.log(2),
                  (
                    <div className="header__top__right d-flex align-items-center justify-content-end gap-3 hover:bg-gray-200 p-1 rounded-lg">
                      <Link
                        to="/login"
                        className="d-flex align-items-center gap-1 "
                      >
                        <i className="ri-user-line text-gray-500 text-2xl"></i>
                        <span className="text-gray-500 font-semibold">
                          Đăng nhập
                        </span>
                      </Link>
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