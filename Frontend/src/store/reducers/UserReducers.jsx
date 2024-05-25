// import { createSlice } from "@reduxjs/toolkit";

// // Initial State
// const initialState = {
//   users: [],
// };

// export const UserSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     getusers: (state, action) => {
//       state.users = action.payload;
//     },
//   },
// });

// export default UserSlice.reducer;

// export const { getusers } = UserSlice.actions;

// import { createSlice } from "@reduxjs/toolkit";

// // Initial State
// const initialState = {
//   users: [],
// };

// const UserSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     getUsers: (state, action) => {
//       // Note the camelCase convention
//       state.users = action.payload;
//     },
//   },
// });

// export const { getUsers } = UserSlice.actions; // Ensure consistent naming

// export default UserSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Ensure initial state is set to null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { getUser } = userSlice.actions; // Export the action correctly

export default userSlice.reducer;
