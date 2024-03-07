import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_id: 0,
  user_name: "",
  pass_word: "",
  user_email: "",
  full_name: "",
  phone_number: "",
  citizenID: "",
  access: "",
  user_images:"",
  address: "",
  date_of_birth: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user_id = action.payload.user_id;
      state.user_name = action.payload.user_name;
      state.pass_word = action.payload.pass_word;
      state.user_email = action.payload.user_email;
      state.full_name = action.payload.full_name;
      state.phone_number = action.payload.phone_number;
      state.citizenID = action.payload.citizenID;
      state.access = action.payload.access;
      state.user_images = action.payload.user_images;
      state.address = action.payload.address;
      state.date_of_birth = action.payload.date_of_birth;
    },
    clearUser: (state) => {
      // Object.assign(state, initialState);
      state.user_id = 0;
      state.user_name = "";
      state.pass_word = "";
      state.user_email = "";
      state.full_name = "";
      state.phone_number = "";
      state.citizenID = "";
      state.access = "";
      state.user_images = "";
      state.address = "";
      state.date_of_birth = "";
    },
    updateUser: (state, action) => {
      state.user_id = action.payload.user_id;
      state.user_name = action.payload.user_name;
      state.pass_word = action.payload.pass_word;
      state.user_email = action.payload.user_email;
      state.full_name = action.payload.full_name;
      state.phone_number = action.payload.phone_number;
      state.citizenID = action.payload.citizenID;
      state.access = action.payload.access;
      state.user_images = action.payload.user_images;
      state.address = action.payload.address;
      state.date_of_birth = action.payload.date_of_birth;
    },
  },
  },
);

export const { setUser, clearUser, updateUser } = userSlice.actions;

export default userSlice.reducer;