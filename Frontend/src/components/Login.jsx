// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setUser } from "../store/reducers/UserReducers";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3001/login", {
//         email,
//         password,
//       });
//       if (response.data.message === "success") {
//         const userDetails = response.data.userDetails;
//         dispatch(setUser(userDetails));
//         navigate(`/dashboard/${userDetails.name}`);
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Login failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="p-8 bg-white shadow-md rounded-lg max-w-sm w-full"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//         >
//           Login
//         </button>
//         <div className="text-center mt-4">
//           <span className="text-gray-600 text-sm">Don't have an account?</span>
//           <a
//             href="/register"
//             className="text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out"
//           >
//             Sign up here
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { asyncUser } from "../store/actions/UserAction"; // Import async action

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3001/login", {
//         email,
//         password,
//       });
//       if (response.data.message === "success") {
//         const userDetails = response.data.userDetails;
//         dispatch(asyncUser(userDetails.name)); // Dispatch async action with username
//         navigate(`/dashboard/${userDetails.name}`);
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Login failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="p-8 bg-white shadow-md rounded-lg max-w-sm w-full"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//         >
//           Login
//         </button>
//         <div className="text-center mt-4">
//           <span className="text-gray-600 text-sm">Don't have an account?</span>
//           <a
//             href="/register"
//             className="text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out"
//           >
//             Sign up here
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { asyncUser } from "../store/actions/UserAction"; // Correctly import the async action

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3001/login", {
//         email,
//         password,
//       });
//       if (response.data.message === "success") {
//         const userDetails = response.data.userDetails;
//         dispatch(asyncUser(userDetails.name)); // Dispatch async action with username
//         navigate(`/dashboard/${userDetails.name}`);
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Login failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="p-8 bg-white shadow-md rounded-lg max-w-sm w-full"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//         >
//           Login
//         </button>
//         <div className="text-center mt-4">
//           <span className="text-gray-600 text-sm">Don't have an account?</span>
//           <a href="/register">Sign up here</a>

//           <Link to="/register" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncUser } from "../store/actions/UserAction"; // Correctly import the async action

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      if (response.data.message === "success") {
        const userDetails = response.data.userDetails;
        dispatch(asyncUser(userDetails.name)); // Dispatch async action with username
        navigate(`/dashboard/${userDetails.name}`);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white shadow-md rounded-lg max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>
        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">Don't have an account? </span>
          <Link
            to="/register"
            className="text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out"
          >
            Sign up here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
