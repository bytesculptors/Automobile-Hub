import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateUser } from "../../../Redux/userSlice";
import { Avatar } from "@material-tailwind/react";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import { useSpring, animated } from "@react-spring/web";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Setting() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
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
  const [openSnack, setOpenSnack] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedField, setSelectedField] = React.useState("");
  const handleOpen = (field) => {
    setSelectedField(field);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8082/profile", user)
      .then((res) => {
        dispatch(updateUser(user));
        setOpen(false)
        setOpenSnack(true)
      })
      .catch((err) => console.log(err));
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
        <div className="w-full md:w-9/12 mx-2 h-48">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                {/* Access */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Access</div>
                  <div className="px-4 py-2">{user.access}</div>
                </div>
                {/* Username */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Username</div>
                  <div className="px-4 py-2">{user.user_name}</div>
                </div>
                {/* Password */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Password</div>
                  <div className="px-4 py-2">
                    {user.pass_word}
                    <i
                      onClick={() => handleOpen("pass_word")}
                      className="ri-edit-fill ml-2 cursor-pointer"
                    ></i>
                  </div>
                </div>
                {/* Email */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email</div>
                  <div className="px-4 py-2">
                    {user.user_email}
                    <i
                      onClick={() => handleOpen("user_email")}
                      className="ri-edit-fill ml-2 cursor-pointer"
                    ></i>
                  </div>
                </div>
                {/* Full Name */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Full Name</div>
                  <div className="px-4 py-2">
                    {user.full_name}
                    <i
                      onClick={() => handleOpen("full_name")}
                      className="ri-edit-fill ml-2 cursor-pointer"
                    ></i>
                  </div>
                </div>
                {/* Citizen ID */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Citizen ID</div>
                  <div className="px-4 py-2">{user.citizenID}</div>
                </div>
                {/* Phone Number */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Phone Number</div>
                  <div className="px-4 py-2">
                    {user.phone_number}
                    <i
                      onClick={() => handleOpen("phone_number")}
                      className="ri-edit-fill ml-2 cursor-pointer"
                    ></i>
                  </div>
                </div>
                {/* Date of Birth */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Date of Birth</div>
                  <div className="px-4 py-2">{user.date_of_birth}</div>
                </div>
                {/* Address */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Address</div>
                  <div className="px-4 py-2">
                    {user.address}
                    <i
                      onClick={() => handleOpen("address")}
                      className="ri-edit-fill ml-2 cursor-pointer"
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal */}
            <Modal
              aria-labelledby="spring-modal-title"
              aria-describedby="spring-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
            >
              <Fade in={open}>
                <Box sx={style}>
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="field"
                      className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >
                      {selectedField === "full_name"
                        ? "Full Name"
                        : selectedField === "user_email"
                        ? "Email"
                        : selectedField === "pass_word"
                        ? "Password"
                        : selectedField === "phone_number"
                        ? "Phone Number"
                        : selectedField === "address"
                        ? "Address"
                        : ""}
                    </label>

                    <div className="relative">
                      <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                        <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                          <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx={12} cy={7} r={4}></circle>
                          </svg>
                        </div>
                      </div>

                      <input
                        id="field"
                        name={selectedField}
                        type="text"
                        placeholder={
                          selectedField === "full_name"
                            ? "Full Name"
                            : selectedField === "user_email"
                            ? "Email"
                            : selectedField === "pass_word"
                            ? "Password"
                            : selectedField === "phone_number"
                            ? "Phone Number"
                            : selectedField === "address"
                            ? "Address"
                            : ""
                        }
                        value={user[selectedField]}
                        onChange={handleInputChange}
                        className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={handleClose}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-2"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
                    >
                      Submit
                    </button>
                  </div>
                </Box>
              </Fade>
            </Modal>
            <div>
              <Snackbar
                open={openSnack}
                autoHideDuration={6000}
                onClose={() => {
                  setOpenSnack(false);
                }}
              >
                <Alert
                  onClose={() => {
                    setOpenSnack(false);
                  }}
                  severity="success"
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  Cập nhật thông tin thành công!
                </Alert>
              </Snackbar>
            </div>
            {/* End of Modal */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
