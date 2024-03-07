import React, { useContext, useEffect, useState } from 'react'
import { BookingContext } from '../../data/BookingContext'
import { useDispatch, useSelector } from 'react-redux'
import './Styles/main.css'


function Booking() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);
  const { bookingData } = useContext(BookingContext);
  const user_email = userData.user_email;

  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    console.log("booking", bookingData);
    if (bookingData) {
      const filtered = bookingData.filter(item => item.user_email === user_email);
      setFilteredArray(filtered);
      console.log(filtered);
    }
  }, [bookingData, user_email]);

  return (



    <div className='booking_content'>

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="home-tab" data-toggle="tab" href="/thong_tin" role="tab" aria-controls="home" aria-selected="true">Thông tin cá nhân</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="booking-tab" data-toggle="tab" href="/my_booking" role="tab" aria-controls="booking" aria-selected="false">Đơn đặt của tôi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="booking-tab" data-toggle="tab" href="/update_password" role="tab" aria-controls="booking" aria-selected="false">Thay đổi mật khẩu</a>
        </li>
      </ul>


      <h1>Đơn đặt của tôi:</h1>

      <table className='table table-striped table-info table-hover'>
        <thead>
          <tr>
            <th>Ngày bắt đầu thuê</th>
            <th>Ngày kết thúc thuê</th>
            <th>Tổng tiền</th>
            <th>Hãng xe</th>
            <th>Mẫu xe</th>
            <th>Tên người dùng</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredArray && filteredArray.map(booking => (
            <tr key={booking.booking_id}>
              <td>{booking.start_date}</td>
              <td>{booking.end_date}</td>
              <td>{booking.total_price}</td>
              <td>{booking.brand}</td>
              <td>{booking.model}</td>
              <td>{booking.full_name}</td>
              <td>{booking.user_email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Booking
