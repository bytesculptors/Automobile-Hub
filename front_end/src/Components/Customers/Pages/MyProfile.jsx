import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateUser } from '../../../Redux/userSlice';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Styles/main.css'


function MyProfile() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

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
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8082/profile', user)
      .then(res => {
        console.log(res);
        dispatch(updateUser(user));
        window.location.reload();
        alert('Updated profile');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container emp-profile">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src={user.user_images ? user.user_images : "https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="" />

            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h3>
                {user.full_name}
              </h3>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="/thong_tin" role="tab" aria-controls="home" aria-selected="true">Thông tin cá nhân</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="booking-tab" data-toggle="tab" href="/my_booking" role="tab" aria-controls="booking" aria-selected="false">Đơn đặt của tôi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="booking-tab" data-toggle="tab" href="/update_password" role="tab" aria-controls="booking" aria-selected="false">Thay đổi mật khẩu</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Lưu" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>THÔNG TIN CÁ NHÂN</p>
              <div className="form-group">
                <label>Tên đăng nhập</label>
                <input type="text" className="form-control" name="user_name" value={user.user_name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Họ và tên</label>
                <input type="text" className="form-control" name="full_name" value={user.full_name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="user_email" value={user.user_email} onChange={handleInputChange} readOnly />
              </div>
              <div className="form-group">
                <label>Số CMND</label>
                <input type="text" className="form-control" name="citizenID" value={user.citizenID} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input type="text" className="form-control" name="phone_number" value={user.phone_number} onChange={handleInputChange} />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                  <div className="col-md-6">
                    <label>Địa chỉ</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyProfile;