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
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left flex items-center">
                <span>Bạn cần giúp đỡ?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +84 384103659
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              {user.user_name
                ? (console.log(1),
                  (
                    <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                      {/* <Link
                        to="/thong_tin"
                        className="d-flex align-items-center gap-1"
                      >
                        <i className="ri-login-circle-line"></i> Trang cá nhân
                      </Link>
                      <span onClick={handleLogout}>
                        <Link
                          to="/home"
                          className="d-flex align-items-center gap-1"
                        >
                          <i className="ri-user-line"></i> Đăng xuất
                        </Link>
                      </span> */}
                      <Menu>
                        <MenuHandler>
                          <Avatar
                            alt="Remy Sharp"
                            src={
                              user.user_images
                                ? user.user_images
                                : "https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            }
                            className="cursor-pointer"
                          />
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
                    <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                      <Link
                        to="/login"
                        className="d-flex align-items-center gap-1"
                      >
                        <i className="ri-login-circle-line"></i> Đăng nhập
                      </Link>
                      <Link
                        to="/signup"
                        className="d-flex align-items-center gap-1"
                      >
                        <i className="ri-user-line"></i> Đăng ký
                      </Link>
                    </div>
                  ))}
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
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
              <button className="text-3xl">
                {user.user_id ? (
                  <Link className="no-underline text-black" to="/order">
                    {user.order_items.length === 0 ? (
                      <i class="ri-shopping-cart-2-fill"></i>
                    ) : (
                      <Badge
                        badgeContent={user.order_items.length}
                        color="error"
                      >
                        <i class="ri-shopping-cart-2-fill"></i>
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
                    <i class="ri-shopping-cart-2-fill"></i>
                  </div>
                )}
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
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