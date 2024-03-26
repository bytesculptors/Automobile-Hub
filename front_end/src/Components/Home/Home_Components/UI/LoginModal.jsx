import React from "react";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../../../Login_Signup/LoginValidation";
import axios from "axios";
import { setUser } from "../../../../Redux/userSlice";


const LoginModal = ({ open, handleClose }) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        userName: "",
        password: "",
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [backendError, setBackendError] = useState([]);

    const handleInput = (event) => {
        setValues((prev) => ({
            ...prev,
            [event.target.name]: [event.target.value],
        }));
    };

    const handleSubmit = (event) => {
        console.log(values)
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        axios
            .post("http://localhost:8082/login", values)
            .then((res) => {
                console.log("data", res.data[0]);

                if (res.data.errors) {
                    setBackendError(res.data.errors);
                } else {
                    setBackendError([]);
                    if (res.data === "Faile") {
                        alert("No record existed");
                    } else {
                        navigate("/");
                        dispatch(setUser(res.data[0]));
                        console.log("data", res.data[0]);
                    }
                }
            })
            .catch((err) => console.log(err));
        //   if (err.userName === "" && err.password === "") {

        //     }
        handleClose()
    };
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-400 bg-white border-2 border-black shadow-md p-4">
            <div className="mb-4">
              <p className="text-gray-600">Sign In</p>
              <h2 className="text-xl font-bold">Join our community</h2>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="userName"
                placeholder="Nhập tên của bạn"
                name="userName"
                onChange={handleInput}
                className="w-full p-3 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600 mb-3"
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                name="password"
                onChange={handleInput}
                class="w-full p-3 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600 mb-3"
              />
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div class="flex items-center justify-between">
              <div>
                <div className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
};

export default LoginModal;
