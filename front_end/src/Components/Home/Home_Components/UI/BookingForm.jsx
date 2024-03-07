import React, { useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {

  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);
  const { car_id, price } = props.item;
  const navigate = useNavigate();



  const [bookingInfo, setBookingInfo] = useState({
    pRice: price,
    carId: car_id,
    userId: userData.user_id,
    startDate: "",
    endDate: ""

  });

  const handleInput = (event) => {
    setBookingInfo(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
}
console.log(bookingInfo);


  const submitHandler = (event) => {
    if (!userData.user_id) { // Kiểm tra người dùng đã đăng nhập hay chưa
      alert('Hãy đăng nhập để tiếp tục!');
      return;
    }
      
    axios.post('http://localhost:8082/new_booking', bookingInfo)
      .then(res => {
        console.log(res);
        if (res && res.data) {
          window.location.href = "/my_booking";
          alert('Đặt hàng thành công!');
        } else {
          console.log('Response data is null');

          alert('Đặt hàng không thành công!');
        }
      })
      .catch(error => {
        console.log(error);
        console.log(bookingInfo);
      });

  };


  return (
    <div className="d-flex flex-column align-items-start mb-5">
      <Form className="d-flex" onSubmit={submitHandler}>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <h6>Ngày nhận</h6>
          <input type="date" name="startDate" value={bookingInfo.startDate} onChange={handleInput} placeholder="Ngày nhận" />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <h6>Ngày trả</h6>
          <input type="date" name="endDate" value={bookingInfo.endDate} onChange={handleInput} placeholder="Ngày trả" />
        </FormGroup>
      </Form>
      <div className="payment text-end mt-5">
        <button onClick={() => submitHandler()}>Phân phối đi</button>
      </div>
    </div>
  );
};

export default BookingForm;
