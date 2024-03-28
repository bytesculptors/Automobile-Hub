import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateUser } from '../../../Redux/userSlice';
import { Avatar } from '@material-tailwind/react';

function Setting() {
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
    date_of_birth: userData.date_of_birth,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8082/profile', user)
      .then(res => {
        dispatch(updateUser(user));
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2">
        {/* Left Side */}
        <div className="w-full md:w-3/12 md:mx-2">
          {/* Profile Card */}
          <div className="bg-white p-3 border-t-4 border-green-400">
            <div className="image overflow-hidden">
              <Avatar
                src={user.user_images}
                variant="rounded"
                alt="avatar"
                size="xxl"
              />
            </div>
            
          </div>
          {/* End of profile card */}
        </div>
        {/* Right Side */}
        <div className="w-full md:w-9/12 mx-2 h-64">
          {/* Profile tab */}
          {/* About Section */}
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-green-500">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Access</div>
                  <div className="px-4 py-2">{user.access}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Username</div>
                  <div className="px-4 py-2">{user.user_name}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Password</div>
                  <div className="px-4 py-2">{user.pass_word}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email</div>
                  <div className="px-4 py-2">
                    <a className="text-blue-800" href={`mailto:${user.user_email}`}>{user.user_email}</a>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Full Name</div>
                  <div className="px-4 py-2">{user.full_name}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Citizen ID</div>
                  <div className="px-4 py-2">{user.citizenID}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Phone Number</div>
                  <div className="px-4 py-2">{user.phone_number}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Date of Birth</div>
                  <div className="px-4 py-2">{user.date_of_birth}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Address</div>
                  <div className="px-4 py-2">{user.address}</div>
                </div>
              </div>
            </div>
            <button
              className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
              Cập nhật thông tin
            </button>
          </div>
          {/* End of about section */}
          <div className="my-4"></div>
          
        </div>
      </div>
    </div>
  );
}

export default Setting;
