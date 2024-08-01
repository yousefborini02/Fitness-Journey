import React from "react";
import Navbar from "./Navbar"; // Adjust the import path as needed
import Footer from "./Footer"; // Adjust the import path as needed

const PaymentComponent = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="flex-grow flex items-center justify-center mt-32 mb-20"> {/* Adjusted top and bottom margin */}
        <div className="max-w-5xl w-full bg-[#222] text-white rounded-lg shadow-lg p-8 transform transition-transform duration-500 hover:scale-105">
          <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
            {/* Complete Your Purchase Section */}
            <div className="w-full md:w-2/3 animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Complete Your Purchase</h2>
              <form className="space-y-6">
                <div className="animate-slideInLeft">
                  <label className="block text-sm font-medium mb-1">Credit Card</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#333] text-white border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CB347]"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div className="animate-slideInRight">
                  <label className="block text-sm font-medium mb-1">Name on Card</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#333] text-white border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CB347]"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 animate-fadeIn">
                  <div className="w-full md:w-1/2">
                    <label className="block text-sm font-medium mb-1">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-[#333] text-white border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CB347]"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
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
            <div className="w-full md:w-1/3 mt-0 md:mt-0 md:ml-8 animate-fadeIn">
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Your Trial</h3>
              <div className="bg-[#333] p-4 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
                <p className="text-sm mb-2">30 Day Free Trial</p>
                <div className="flex justify-between items-center mb-2">
                  <span>Total Due Today</span>
                  <span className="font-bold">$0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>After Trial</span>
                  <span className="font-bold">$35.00</span>
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
