import React from "react";
import { useSelector } from "react-redux";
import JourneySteps from "./JourneySteps";
import Baskets from "./BasketItem";
import CreateBasket from "./CreateBasket";

const Dashboard = () => {
  const user = useSelector((state) => state.user.user); // Select the user data from Redux state

  return (
    <>
      <div className="w-full h-screen">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col mt-8">
            <div className="bg-white border-2 border-teal-300 p-6 rounded-lg shadow-lg">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                Hey {user?.name}!
              </h1>
              <p className="text-sm md:text-base text-gray-500 mb-2">
                Your portfolio of today:
              </p>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mr-2">
                  ₹ 0
                </h2>
                {/* <span className="px-2 py-1 rounded-md bg-green-500 text-xs md:text-sm text-white">
                  +13%
                </span> */}
              </div>
              <p className="text-xs md:text-sm text-gray-500 mb-4">
                People are geting 10% profits? What are you waitimg for?
                <br />
                <span className="   ">
                  <h1 className="mt-3 md:text-2xl lg:text-3xl text-gray-950 font-bold ">
                    Invest Now !
                  </h1>
                </span>
              </p>
              <div className="border-t-2 border-blue-500 pt-4">
                <p className="text-sm md:text-base text-gray-700 font-semibold mb-2">
                  Overall investment:
                </p>
                <div className="">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ">
                    ₹ 0
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <JourneySteps />
          <Baskets />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
