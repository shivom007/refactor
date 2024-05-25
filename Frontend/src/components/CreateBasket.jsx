import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBasket = () => {
  const [basketType, setBasketType] = useState("");
  const [stocks, setStocks] = useState([{ name: "", quantity: 0 }]);
  const navigate = useNavigate();

  const handleStockChange = (index, event) => {
    const values = [...stocks];
    values[index][event.target.name] = event.target.value;
    setStocks(values);
  };

  const handleAddStock = () => {
    setStocks([...stocks, { name: "", quantity: 0 }]);
  };

  const handleRemoveStock = (index) => {
    const values = [...stocks];
    values.splice(index, 1);
    setStocks(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Assuming you have a token stored in localStorage after login
      const token = localStorage.getItem("token");

      if (!token) {
        // Handle case where token is missing, perhaps redirect to login
        console.error("Authentication token missing!");
        return;
      }

      // Include the token in the request headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post(
        "http://localhost:3001/baskets",
        {
          // Adjust the URL to match your server route
          basketType,
          stocks,
        },
        config
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("There was an error creating the basket!", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 border-2 border-purple-200 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">Create New Basket</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="basketType"
            className="block text-sm font-medium text-gray-700"
          >
            Basket Type
          </label>
          <input
            type="text"
            id="basketType"
            name="basketType"
            required
            value={basketType}
            onChange={(e) => setBasketType(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        {stocks.map((stock, index) => (
          <div key={index} className="mb-4 flex">
            <div className="w-2/3 pr-2">
              <label
                htmlFor={`name-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Stock Name
              </label>
              <input
                type="text"
                id={`name-${index}`}
                name="name"
                required
                value={stock.name}
                onChange={(event) => handleStockChange(index, event)}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div className="w-1/3 pl-2">
              <label
                htmlFor={`quantity-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="number"
                id={`quantity-${index}`}
                name="quantity"
                required
                value={stock.quantity}
                onChange={(event) => handleStockChange(index, event)}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <button
              type="button"
              onClick={() => handleRemoveStock(index)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddStock}
          className="w-full mb-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Add Stock
        </button>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Create Basket
        </button>
      </form>
    </div>
  );
};

export default CreateBasket;
