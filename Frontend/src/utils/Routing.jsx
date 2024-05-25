import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Dashboard from "../components/Dashboard";
import CreateBasket from "../components/CreateBasket";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/dashboard/:name" element={<Dashboard />} />
      <Route path="/create-basket" element={<CreateBasket />} />
    </Routes>
  );
};

export default Routing;
