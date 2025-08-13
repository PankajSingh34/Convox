import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authUser: null,
    otherUsers: [],
    selectedUser: null,
    onlineUsers: [],
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
  },
});

export const { setAuthUser, setOtherUsers, setSelectedUser, setOnlineUsers } =
  userSlice.actions;

export default userSlice.reducer;

//THEORY

//USERSLICE
// 1 NAME
// 2 INITALSTATE
// 3 REDUCERS (PROPERTY, FUNCTION(STATE,ACTION))
// 4 EXPORT FUNCTIONALITIES
// 5 NOW GO TO STORE
// 6 STORE REDUCER
