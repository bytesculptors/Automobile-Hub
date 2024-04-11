import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { addOrderItem } from "../../../../Redux/userSlice";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import LoginModal from "./LoginModal";
import {
  Button,
} from "@material-tailwind/react";
const BookingForm = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const orderData = useSelector((state) => state.user.order_items);
  const { car_id, price, car_name, car_img } = props.item;
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("white");
  const [open, setOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false)

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const submitHandler = (event) => {
     window.scrollTo(0, 0);
    if (!userData.user_id) {
      setOpenLoginModal(true);
    } else {
      const numOfCar = quantity;
      dispatch(
        addOrderItem({
          car_name: car_name,
          car_img: car_img,
          quantity: numOfCar,
          price: price,
        })
      );
      event.preventDefault();
      handleClick();
    }


  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };


  return (
    <div className="d-flex flex-column align-items-start mb-5">
      <Form className="d-inline-block me-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <h6 className="mr-4">Số lượng</h6>
            <div className="quantity-container flex items-center">
              <button
                type="button"
                onClick={handleDecrement}
                className="w-8 h-8 bg-gray-300 text-gray-700 flex justify-center items-center"
              >
                -
              </button>

              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 h-8 text-center bg-gray-50"
              />
              <button
                type="button"
                onClick={handleIncrement}
                className="w-8 h-8 bg-gray-300 text-gray-700 flex justify-center items-center"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <h6 className="mr-4">Màu sắc</h6>
          <div className="flex">
            <div
              className={`w-8 h-8 rounded-full mr-2 bg-gray-300 flex items-center justify-center relative`}
              onClick={() => setColor("white")}
            >
              {color === "white" && (
                <i className="ri-check-line text-green-500 absolute text-xl font-semibold"></i>
              )}
            </div>

            <div
              className={`w-8 h-8 rounded-full bg-black flex items-center justify-center relative `}
              onClick={() => setColor("black")}
            >
              {color === "black" && (
                <i className="ri-check-line text-green-500 absolute text-xl font-semibold"></i>
              )}
            </div>
          </div>
        </div>
      </Form>
      <div className="payment text-end ">
        <Button color="gray" className="w-52 bg-black" onClick={submitHandler}>
          Add to Cart
        </Button>
        {/* <button className="bg-black">ADD TO CART</button> */}
      </div>
      <div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Thêm vào đơn hàng thành công!
          </Alert>
        </Snackbar>
      </div>
      <LoginModal
        open={openLoginModal}
        handleClose={() => {
          setOpenLoginModal(false);
        }}
      />
    </div>
  );
};

export default BookingForm;
