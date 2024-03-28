import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        full_name: "",
        phone_number: "",
        citizenID: "",
        address: "",
        date_of_birth: ""

    })
    const navigate = useNavigate();

    const [errors, setErrors] = useState({

    })
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            console.log(values);
            axios.post('http://localhost:8082/signup', values)
                .then(res => {
                    console.log(res);
                    navigate('/login');
                })
                .catch(err => console.log(err));
        }
    }

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Đăng ký</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Tên </strong></label>
                        <input type='text' placeholder='Nhập tên của bạn' name='name'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email </strong></label>
                        <input type='email' placeholder='Nhập email của bạn' name='email'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" ><strong>Mật khẩu </strong></label>
                        <input type="password" placeholder="Nhập mật khẩu" name='password'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Fullname" ><strong>Họ & tên </strong></label>
                        <input type="fullname" placeholder="Nhập họ tên" name='full_name'
                            onChange={handleInput} className='form-control rounded-0' />
                        {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="CMND" ><strong>Số CMND </strong></label>
                        <input type="CMND" placeholder="CMND" name='citizenID'
                            onChange={handleInput} className='form-control rounded-0' />
                        {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Phone number" ><strong>SĐT</strong></label>
                        <input type="phone_number" placeholder="0xxx" name='phone_number'
                            onChange={handleInput} className='form-control rounded-0' />
                        {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Address" ><strong>Địa chỉ</strong></label>
                        <input type="Address" placeholder="Địa chỉ" name='address'
                            onChange={handleInput} className='form-control rounded-0' />
                        {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
                    </div>

                   

                    <label>
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                        Bạn đồng ý với các điều khoản và chính sách của chúng tôi
                    </label>

                    <button type="submit" className={`btn btn-success w-100 rounded-0 ${isChecked ? "" : "disabled"}`}  disabled={!isChecked} >
                        Đăng ký
                    </button>
                    <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Đăng nhập</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
