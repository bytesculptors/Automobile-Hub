import React, { useContext, useEffect, useState } from "react";
import { BookingContext } from "../../data/BookingContext";
import { useDispatch, useSelector } from "react-redux";
import "./Styles/main.css";
import { useNavigate } from "react-router-dom";

function Booking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const { bookingData } = useContext(BookingContext);
  const user_email = userData.user_email;

  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    console.log("booking", bookingData);
    if (bookingData) {
      const filtered = bookingData.filter(
        (item) => item.user_email === user_email
      );
      setFilteredArray(filtered);
      console.log(filtered);
    }
  }, [bookingData, user_email]);

  return (
    <div className="booking_content mx-20">
      <h3>Danh sách đơn đặt hàng</h3>
      <div className="flex-auto block overflow-x-auto mb-12">
        <table className="w-full my-0 align-middle text-dark border-neutral-200">
          <thead className="align-bottom">
            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
              <th className="pb-3 text-start min-w-[175px]">Mã đơn hàng</th>
              <th className="pb-3 text-start min-w-[175px]">Tên mặt hàng</th>
              <th className="pb-3 text-start min-w-[100px]">Số lượng</th>
              <th className="pb-3 text-start min-w-[100px]">Nhà cung cấp</th>
              <th className="pb-3 text-start min-w-[100px]">Trạng thái</th>
              <th className="pb-3 text-start min-w-[175px]">Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {filteredArray.map((item) => (
              <tr
                key={item.order_id}
                className="border-b border-dashed last:border-b-0 py-3"
              >
                <td className="pl-0">1</td>
                <td className="pl-0">Ghế Gaming</td>
                <td className="pl-0">100</td>
                <td className="pl-0">FPT</td>
                <td className="pl-0">Đang xử lý</td>
                <td className="pl-0">
                  <button
                    className="relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center"
                    onClick={() => {
                      navigate("/my_booking/detail");
                    }}
                  >
                    <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booking;
