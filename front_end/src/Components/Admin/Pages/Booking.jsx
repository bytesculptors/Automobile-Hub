import React, { useContext, useEffect } from 'react'
import { BookingContext } from '../../data/BookingContext'
import './Styles/Booking.css'
function Booking() {
  const { bookingData } = useContext(BookingContext);
  console.log(bookingData);
  useEffect(() => {
    console.log("booking", bookingData);
  }, [bookingData]);

  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().split('T')[0];
  };

  const getStatus = (startDate, endDate) => {
    const currentDate = getCurrentDate();

    if (endDate < currentDate) {
      return 'Đã trả';
    } else if (startDate <= currentDate && endDate >= currentDate) {
      return 'Đang thuê';
    } else if (startDate > currentDate) {
      return 'Chuẩn bị';
    }

    return '';
  };

  return (
    <div className='booking_content'>
      <h1>Booking Data</h1>
      <table className='table table-striped table-info table-hover'>
        <thead>
          <tr>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Total Price</th>
            <th>Car Brand</th>
            <th>Car Model</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {bookingData && bookingData.map(booking => (
            <tr key={booking.booking_id}>
              <td>{new Date(booking.start_date).toISOString().slice(0, 10)}</td>
              <td>{new Date(booking.end_date).toISOString().slice(0, 10)}</td>
              <td>{booking.total_price.toLocaleString("vi-VN")}</td>
              <td>{booking.brand}</td>
              <td>{booking.model}</td>
              <td>{booking.full_name}</td>
              <td>{booking.user_email}</td>
              <td>{getStatus(booking.start_date, booking.end_date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Booking
