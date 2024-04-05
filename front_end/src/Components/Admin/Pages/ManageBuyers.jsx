import React, { useContext, useEffect } from "react";
import "./Styles/Booking.css";
import { authorsTableData } from "../../data/authors-table-data";

function Buyer() {
  return (
    <div className="card mt-12">
      <div className="p-6 mx-3 rounded-xl shadow-xl shadow-gray-300 bg-gradient-to-tr from-gray-900 to-gray-800 -mt-10">
        <h6 className="text-white text-lg mb-0">Manage Buyers</h6>
      </div>
      <div className="card-body overflow-x-scroll px-0 pt-0">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {[
                "id",
                "username",
                "buyer name",
                "order number",
                "phone number",
                "email",
              ].map((el, index) => (
                <th
                  key={index}
                  className="border-b border-blue-gray-50 py-3 px-5 text-left"
                >
                  <span className="text-[11px] font-bold uppercase text-blue-gray-400">
                    {el}
                  </span>
                </th>
              ))}
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
                      <div className="flex items-center gap-4">1</div>
                    </td>
                    <td className={className}>
                      <span className="text-xs font-semibold text-blue-gray-600">
                        account1
                      </span>
                    </td>
                    <td className={className}>
                      <span className="text-xs font-semibold text-blue-gray-600">
                        Tên người bán
                      </span>
                    </td>
                    <td className={className}>
                      <span className="text-xs font-semibold text-blue-gray-600">
                        30
                      </span>
                    </td>
                    <td className={className}>
                      <span className="text-xs font-semibold text-blue-gray-600">
                        +84912345344
                      </span>
                    </td>
                    <td className={className}>
                      <span className="text-xs font-semibold text-blue-gray-600">
                        supplier@gmail.com
                      </span>
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

export default Buyer;
