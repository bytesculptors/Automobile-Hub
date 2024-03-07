import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Styles/Setting.css'
import axios from 'axios';
import { updateUser } from '../../../Redux/userSlice';

function Setting() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);
  console.log("user", userData);
  const [user, setUser] = useState({
    access: userData.access,
    user_name: userData.user_name,
    pass_word: userData.pass_word,
    user_email: userData.user_email,
    full_name: userData.full_name,
    citizenID: userData.citizenID,
    phone_number: userData.phone_number,
    user_images: userData.user_images,
    address: userData.address,
    date_of_birth: userData.date_of_birth,
    });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user.user_images)
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8082/profile', user)
      .then(res => {
        console.log(res);
        dispatch(updateUser(user));
        window.location.reload();

      })
      .catch(err => console.log(err));
    console.log(user);
  };

  return (
    <div className='profile_data'>
      <form onSubmit={handleSubmit} className='user_info1'>
        <img className = "avatar" src={user.user_images}/>
        <div className='label'><label htmlFor="user_name">Tên người dùng:</label></div>
        <input className='input' type="text" id="user_name" name="user_name" value={user.user_name} onChange={handleInputChange} /><br /><br />

        <div className='label'><label htmlFor="pass_word">Mật khẩu:</label></div>
        <input className='input' type="password" id="pass_word" name="pass_word" value={user.pass_word} onChange={handleInputChange} /><br /><br />

        <div className='label'><label htmlFor="user_email">Email:</label></div>
        <input className='input readOnly' type="email" id="user_email" name="user_email" value={user.user_email} onChange={handleInputChange} readOnly /><br /><br />

        <div className='label'><label htmlFor="full_name">Họ và tên:</label></div>
        <input className='input readOnly' type="text" id="full_name" name="full_name" value={user.full_name} onChange={handleInputChange} readOnly/><br /><br />

        <div className='label'><label htmlFor="citizenID">Số CMND:</label></div>
        <input className='input readOnly' type="text" id="citizenID" name="citizenID" value={user.citizenID} onChange={handleInputChange} readOnly/><br /><br />

        <div className='label'><label htmlFor="phone_number">Số điện thoại:</label></div>
        <input className='input' type="text" id="phone_number" name="phone_number" value={user.phone_number} onChange={handleInputChange} /><br /><br />

        <div className='label'><label htmlFor='address'>Địa chỉ</label></div>
        <input className='input' type='text' id='address' name='address' value={user.address} onChange={handleInputChange} /> <br /> <br />

        <div className='label'><label htmlFor='date_of_birth'>Ngày sinh</label></div>
        <input className='input' type='text' id='address' name='address' value={new Date(user.date_of_birth).toISOString().slice(0, 10)} onChange={handleInputChange} readnOnly/> <br /> <br />

        <input className='submit_buttom' type="submit" value="Cập nhật" />
      </form>
    </div>
  )
}

export default Setting
