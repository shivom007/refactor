// import axios from "axios";

// import { getusers } from "../reducers/UserReducers";

// export const asyncUser = () => async (dispatch, getstate) => {
//   try {
//     const response = await axios.get("/login/:username");
//     dispatch(getusers(response.data));
//     dispatch(getusers(response.data));
//   } catch (error) {
//     console.log(error);
//   }
// };

// import axios from "axios";
// import { getUsers } from "../reducers/UserReducers"; // Ensure correct import

// export const asyncUser = (username) => async (dispatch) => {
//   // Pass username as a parameter
//   try {
//     const response = await axios.get(`http://localhost:3001/login/${username}`); // Correct URL
//     dispatch(getUsers(response.data)); // Dispatch action to set users
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// };

import axios from "axios";
import { getUser } from "../reducers/UserReducers"; // Correctly import the action

export const asyncUser = (username) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/login/${username}`);
    dispatch(getUser(response.data)); // Dispatch the getUser action with the fetched data
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
