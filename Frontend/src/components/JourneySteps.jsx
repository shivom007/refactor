import React, { useState, useEffect } from "react";
import { GoChecklist } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";

const JourneySteps = () => {
  const [selectedSteps, setSelectedSteps] = useState([false, false, false]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleStepClick = (index) => {
    const updatedSelectedSteps = [...selectedSteps];
    updatedSelectedSteps[index] = !updatedSelectedSteps[index];
    setSelectedSteps(updatedSelectedSteps);

    // Check if all steps are selected
    if (updatedSelectedSteps.every((step) => step)) {
      setIsCompleted(true);
    }
  };

  useEffect(() => {
    if (isCompleted) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Set the timeout for 3 seconds

      return () => clearTimeout(timer); // Cleanup the timeout if the component is unmounted
    }
  }, [isCompleted]);

  if (!isVisible) {
    return null;
  }

  if (isCompleted) {
    return (
      <div className="border border-red-800 rounded-lg mt-3 p-6 bg-white shadow-lg">
        <h2 className="text-lg font-semibold text-center">Thank you!</h2>
      </div>
    );
  }

  const steps = [
    {
      icon: <GoChecklist size={24} />,
      title: "Add money to the account",
      description:
        "Quick feedback for all of your questions from the community",
    },
    {
      icon: <FaRegFileAlt size={24} />,
      title: "Choose your Basket",
      description:
        "Updates thoughts, new lessons or anything you’d like to share",
    },
    {
      icon: <BsFileBarGraph size={24} />,
      title: "See your wealth grow!",
      description:
        "Public insights of movement in stock, crypto, alternative assets market",
    },
  ];

  return (
    <div className="border border-red-800 rounded-lg mt-3 p-6 bg-white shadow-lg">
      <h2 className="text-lg font-semibold mb-4">
        Follow these steps and start your journey.
      </h2>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg flex items-center justify-between mb-4 cursor-pointer transition-colors ${
            selectedSteps[index] ? "bg-green-100" : "bg-blue-50"
          }`}
          onClick={() => handleStepClick(index)}
        >
          <div className="flex items-center">
            <div className="mr-3 text-teal-600">{step.icon}</div>
            <div>
              <h3 className="text-md font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
          <button
            className={`w-6 h-6 border-2 rounded flex justify-center items-center ${
              selectedSteps[index]
                ? "bg-green-500 border-green-500"
                : "bg-white border-gray-400"
            }`}
          >
            <svg
              className={`w-4 h-4 ${
                selectedSteps[index] ? "text-white" : "text-gray-400"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default JourneySteps;
