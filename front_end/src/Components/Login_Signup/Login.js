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
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Đăng nhập</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='userName'><strong>Tên đăng nhập </strong></label>
                        <input type='userName' placeholder='Nhập tên của bạn' name='userName'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.userName && <span className='text-danger'>{errors.userName}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" ><strong>Mật khẩu </strong></label>
                        <input type="password" placeholder="Nhập mật khẩu" name='password'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>

                    <button type='submit' className=' btn btn-success w-100 rounded-0'>Đăng nhập</button>
                    <p>Bạn đồng ý với các điều khoản và chính sách của chúng tôi</p>
                    <Link to='/home' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Quay trờ về trang chủ</Link>
                    <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Tạo tài khoản mới</Link>
                </form>
            </div>
        </div>
    )
}

export default Login
