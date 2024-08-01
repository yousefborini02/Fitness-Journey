import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
// import 'boxicons/css/boxicons.min.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className=" bg-opacity-20 backdrop-blur-lg border-2 border-gray-300 shadow-lg rounded-lg p-12 w-full max-w-lg mx-4 lg:mx-0 relative">
        <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 bg-gray-300 px-8 py-2 rounded-b-2xl">
          <span className="text-xl font-bold text-black">Sign Up</span>
        </div>
        <form action="#" method="post" encType="multipart/form-data" className="space-y-6 mt-12">
          <div className="relative">
            <input
              type="text"
              id="username"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              required
              className="w-full h-14 bg-transparent text-white border-2 border-gray-300 rounded-full pl-10 pr-16 focus:outline-none"
            />
            <label htmlFor="username" className={`absolute left-10 top-0 text-gray-300 transform transition-all ${formValues.username ? '-translate-y-6 bg-gray-300 text-black px-2' : 'top-4'}`}>
              Username
            </label>
            <i className="bx bx-user text-xl absolute right-5 top-4 text-gray-300"></i>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
              className="w-full h-14 bg-transparent text-white border-2 border-gray-300 rounded-full pl-10 pr-16 focus:outline-none"
            />
            <label htmlFor="email" className={`absolute left-10 top-0 text-gray-300 transform transition-all ${formValues.email ? '-translate-y-6 bg-gray-300 text-black px-2' : 'top-4'}`}>
              Email
            </label>
            <i className="bx bx-envelope text-xl absolute right-5 top-4 text-gray-300"></i>
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              required
              className="w-full h-14 bg-transparent text-white border-2 border-gray-300 rounded-full pl-10 pr-16 focus:outline-none"
            />
            <label htmlFor="password" className={`absolute left-10 top-0 text-gray-300 transform transition-all ${formValues.password ? '-translate-y-6 bg-gray-300 text-black px-2' : 'top-4'}`}>
              Password
            </label>
            <i className={`bx ${showPassword ? 'bx-show' : 'bx-hide'} text-xl absolute right-5 top-4 text-gray-300 cursor-pointer`} onClick={togglePasswordVisibility}></i>
            <i className="bx bx-lock-alt text-xl absolute right-16 top-4 text-gray-300"></i>
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              required
              className="w-full h-14 bg-transparent text-white border-2 border-gray-300 rounded-full pl-10 pr-16 focus:outline-none"
            />
            <label htmlFor="confirmPassword" className={`absolute left-10 top-0 text-gray-300 transform transition-all ${formValues.confirmPassword ? '-translate-y-6 bg-gray-300 text-black px-2' : 'top-4'}`}>
              Confirm Password
            </label>
            <i className={`bx ${showPassword ? 'bx-show' : 'bx-hide'} text-xl absolute right-5 top-4 text-gray-300 cursor-pointer`} onClick={togglePasswordVisibility}></i>
            <i className="bx bx-lock-alt text-xl absolute right-16 top-4 text-gray-300"></i>
          </div>
          <div className="flex justify-between items-center text-white text-sm">
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>
          </div>
          <div>
            <Link to="/login">
            <input type="submit" value="Sign Up" className="w-full h-12 bg-gray-300 text-black rounded-full cursor-pointer hover:bg-white transition-all" />
            </Link>
          </div>
          <div className="text-center">
            <span className="text-white">Already have an account? <Link to="/login" className="font-medium hover:underline">Login</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
