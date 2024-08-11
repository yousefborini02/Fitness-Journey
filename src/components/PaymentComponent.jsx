import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Adjust the import path as needed
import Footer from "./Footer"; // Adjust the import path as needed

const PaymentComponent = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <style>
        {`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(100%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideInUp {
            animation: slideInUp 1s ease-out;
          }
        `}
      </style>
      <Navbar />
      <div className="flex-grow flex items-center justify-center mt-32 mb-20">
        <div
          className={`max-w-5xl w-full bg-[#222] text-white rounded-lg shadow-lg p-8 transform transition-transform duration-500 hover:scale-105 ${
            animate ? "animate-slideInUp" : ""
          }`}
        >
          <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
            {/* Complete Your Purchase Section */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl text-[#3CB347] font-bold mb-6 text-center md:text-left">Complete Your Purchase</h2>
              <form className="space-y-6">
                <div className="animate-slideInUp">
                  <label className="block text-sm font-medium mb-1">Credit Card</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#333] text-white border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CB347]"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div className="animate-slideInUp">
                  <label className="block text-sm font-medium mb-1">Name on Card</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#333] text-white border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CB347]"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full md:w-1/2 animate-slideInUp">
                    <label className="block text-sm font-medium mb-1">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-[#333] text-white border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CB347]"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div className="w-full md:w-1/2 animate-slideInUp">
                    <label className="block text-sm font-medium mb-1">CVV Code</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-[#333] text-white border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CB347]"
                      placeholder="123"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4 mt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#3CB347] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CB347] focus:ring-opacity-50 transform transition-transform duration-300 hover:scale-105"
                  >
                    Pay Now
                  </button>
                  <button
                    type="button"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transform transition-transform duration-300 hover:scale-105"
                  >
                    Pay with PayPal
                  </button>
                </div>
              </form>
            </div>

            {/* Your Trial Section */}
            <div className="w-full md:w-1/3 mt-0 md:mt-0 md:ml-8 animate-slideInUp">
              <h3 className="text-lg text-[#3CB347] font-semibold mb-4 text-center md:text-left">Your Plan</h3>
              <div className="bg-[#333] p-4 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
                <p className="text-md mb-2">1 month Plan</p>
                {/* <div className="flex justify-between items-center mb-2">
                  <span>Total Due Today</span>
                  <span className="font-bold">$0</span>
                </div> */}
                <div className="flex justify-between items-center">
                  <span>Total price</span>
                  <span className="font-bold">$40.00</span>
                </div>
                <a
                  href="#"
                  className="mt-4 block text-center text-[#3CB347] hover:underline"
                >
                  Apply Coupon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentComponent;
