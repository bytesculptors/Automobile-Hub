import React, { useContext, useEffect } from "react";
import "./Styles/Booking.css";
import { authorsTableData } from "../../data/authors-table-data";

function Product() {
  return (
    <div className="card mt-12">
      <div className="p-6 mx-3 rounded-xl shadow-xl shadow-gray-300 bg-gradient-to-tr from-gray-900 to-gray-800 -mt-10">
        <h6 className="text-white text-lg mb-0">Manage Products</h6>
      </div>
      <div className="card-body overflow-x-scroll px-0 pt-0">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {["id", "product name", "supplier", "status", "product sales"].map(
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
                      <span className="text-xs font-semibold text-blue-gray-600">
                        1
                      </span>
                    </td>
                    <td className={className}>
                      <span className="text-xs font-semibold text-blue-gray-600">
                        Tên sản phẩm
                      </span>
                    </td>
                    <td className={className}>
                      <span className="text-xs font-semibold text-blue-gray-600">
                        Tên nhà cung cấp
                      </span>
                    </td>
                    <td className={className}>
                      <span className="text-xs font-semibold text-blue-gray-600">
                        Đang bán
                      </span>
                    </td>
                    <td className={className}>
                      100
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

export default Product;
