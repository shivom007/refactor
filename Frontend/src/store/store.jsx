// import { configureStore } from "@reduxjs/toolkit";
// import UserReducers from "./reducers/UserReducers";
// // import userReducer from "./reducers/userSlice";

// const store = configureStore({
//   reducer: {
//     UserReducers: UserReducers,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserReducers"; // Ensure correct import

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
