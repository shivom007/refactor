import React from "react";
import { Link } from "react-router-dom";

const BasketItem = ({ title, description }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="text-gray-400">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

const Baskets = () => {
  const baskets = [
    {
      title: "Banking",
      description:
        "Quick feedback for all of your questions from the community",
    },
    {
      title: "Health Care",
      description:
        "Updates thoughts, new lessons or anything you’d like to share",
    },
    {
      title: "Oil and Gas",
      description:
        "Public insights of movement in stock, crypto, alternative assets market",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 lg:p-8 border-2 border-purple-200 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl lg:text-2xl font-semibold mb-4">Your baskets</h2>
      {baskets.map((basket, index) => (
        <BasketItem
          key={index}
          title={basket.title}
          description={basket.description}
        />
      ))}
      <Link to="/create-basket">
        <div className="flex items-center justify-between p-4 bg-blue-50 border-b border-gray-200 hover:bg-blue-100 cursor-pointer mt-5">
          <div>
            <h3 className="text-lg font-bold text-blue-600">
              Create New Basket
            </h3>
          </div>
          <div className="text-blue-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Baskets;
