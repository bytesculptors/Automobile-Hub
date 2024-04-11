import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/userSlice';

function Login() {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        userName: '',
        password: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState([])
    const [backendError, setBackendError] = useState([])

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        console.log(values)
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        // let check = false;
        if (err.userName === "" && err.password === "") {
            axios.post('http://localhost:8082/login', values)
                .then(res => {
                    console.log("data", res.data[0])
                    
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
                .catch(err => console.log(err));
        }
    }

    return (
      <div class="h-screen flex">
        <div class="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
          <div>
            <h1 class="text-white font-bold text-4xl font-sans">
              Automobile Hub
            </h1>
            <p class="text-white mt-1">
              Chào mừng đến với hệ thống của chúng tôi
            </p>
          </div>
        </div>
        <div class="flex w-1/2 justify-center items-center bg-white">
          <form class="bg-white" action="" onSubmit={handleSubmit}>
            <h1 class="text-gray-800 font-bold text-2xl mb-1">
              Automobile Hub
            </h1>
            <p class="text-sm font-normal text-gray-600 mb-7">Xin chào!</p>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none"
                type="userName"
                name="userName"
                id=""
                placeholder="Username"
                onChange={handleInput}
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none"
                type="password"
                name="password"
                id=""
                placeholder="Password"
                onChange={handleInput}
              />
            </div>
            <button
              type="submit"
              class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <Link to='/signup' class="text-sm ml-2 hover:text-blue-500 cursor-pointer text-gray-500 no-underline">
              Bạn chưa có tài khoản ?
            </Link>
          </form>
        </div>
      </div>
    );
}

export default Login
