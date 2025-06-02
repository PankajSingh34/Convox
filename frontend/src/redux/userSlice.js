import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    authUser: null,
    otherUsers: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setOtherUser: (state, action) => {
      state.otherUsers = action.payload;
    },
  },
});
export const { setAuthUser, setOtherUser } = userSlice.actions;
export default userSlice.reducer;
