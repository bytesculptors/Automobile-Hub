import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useState } from "react";

import {
  clearOrderItems,
  updateOrderItems,
  updateOrderQuantity,
} from "../../../Redux/userSlice";

const OrderPage = () => {
  const dispatch = useDispatch();
  const getOrderData = useSelector((state) => state.user.order_items);
  const [orderData, setOrderData] = useState(getOrderData);
  console.log(orderData);
  const submit = () => {
    console.log(orderData);
    dispatch(clearOrderItems());
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">
        Thông tin đơn đặt hàng
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {orderData.map((item, index) => (
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src={orderData[index].car_img}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {orderData[index].car_name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">Màu sắc: Trắng</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span
                      onClick={() => {
                        const currentQuantity = orderData[index].quantity - 1;
                        dispatch(
                          updateOrderItems({
                            car_name: orderData[index].car_name,
                            quantity: currentQuantity,
                          })
                        );
                      }}
                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    >
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      value={orderData[index].quantity}
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">259.000 ₭</p>
                    <div
                      onClick={() => {
                        const updatedOrderData = [...orderData];
                        updatedOrderData.splice(index, 1);
                        dispatch(updateOrderItems(updatedOrderData));
                        setOrderData(updatedOrderData);
                      }}
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-full w-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Giá trị đơn dự kiến:</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Phí giao hàng:</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Tổng</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            </div>
          </div>
          <button
            onClick={submit}
            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
          >
            Gửi yêu cầu đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
