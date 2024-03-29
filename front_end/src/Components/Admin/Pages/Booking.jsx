import React, { useContext, useEffect } from 'react'
import { BookingContext } from '../../data/BookingContext'
import { authorsTableData } from "../../data/authors-table-data";

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
    <div className="card mt-12">
      <div className="p-6 mx-3 rounded-xl shadow-xl shadow-gray-300 bg-gradient-to-tr from-gray-900 to-gray-800 -mt-10">
        <h6 className="text-white text-lg mb-0">Manage Transactions</h6>
      </div>
      <div className="card-body overflow-x-scroll px-0 pt-0">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {["author", "function", "status", "employed", ""].map(
                (el, index) => (
                  <th
                    key={index}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <span className="text-[11px] font-bold uppercase text-blue-gray-400">
                      {el}
                    </span>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {authorsTableData.map(
              ({ img, name, email, job, online, date }, key) => {
                const className = `py-3 px-5 ${
                  key === authorsTableData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={name}>
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <img
                          src={img}
                          alt={name}
                          className="rounded-full w-8 h-8"
                        />
                        <div>
                          <span className="text-blue-gray font-semibold">
                            {name}
                          </span>
                          <span className="text-xs font-normal text-blue-gray-500">
                            {email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <span className="text-xs font-semibold text-blue-gray-600">
                        {job[0]}
                      </span>
                      <span className="text-xs font-normal text-blue-gray-500">
                        {job[1]}
                      </span>
                    </td>
                    <td className={className}>
                      <span
                        className={`py-0.5 px-2 text-[11px] font-medium w-fit ${
                          online
                            ? "bg-green-500 text-white"
                            : "bg-blue-gray-500 text-white"
                        }`}
                      >
                        {online ? "online" : "offline"}
                      </span>
                    </td>
                    <td className={className}>
                      <span className="text-xs font-semibold text-blue-gray-600">
                        {date}
                      </span>
                    </td>
                    <td className={className}>
                      <a
                        href="#"
                        className="text-xs font-semibold text-blue-gray-600"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booking
