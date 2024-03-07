import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const { car_id, price } = props.item;
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("white");

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi submit mặc định của form

    if (!userData.user_id) {
      // Kiểm tra người dùng đã đăng nhập hay chưa
      alert("Hãy đăng nhập để tiếp tục!");
      return;
    }

    const bookingInfo = {
      price: price * quantity,
      carId: car_id,
      userId: userData.user_id,
      quantity: quantity,
      color: color,
    };

    axios
      .post("http://localhost:8082/new_booking", bookingInfo)
      .then((res) => {
        console.log(res);
        if (res && res.data) {
          window.location.href = "/my_booking";
          alert("Đặt hàng thành công!");
        } else {
          console.log("Response data is null");
          alert("Đặt hàng không thành công!");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(bookingInfo);
      });
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
      <div className="payment text-end">
        <button onClick={submitHandler}>Thêm vào đơn đặt hàng</button>
      </div>
    </div>
  );
};

export default BookingForm;
