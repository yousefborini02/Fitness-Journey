import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
// import 'boxicons/css/boxicons.min.css';

const SignUp = () => {
  // const [showPassword, setShowPassword] = useState(false);
  // const [formValues, setFormValues] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className=" bg-opacity-20 backdrop-blur-lg border-2 border-white shadow-lg rounded-lg p-12 w-full max-w-lg mx-4 lg:mx-0 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-[#3CB347] w-36 h-16 rounded-b-2xl">
          <span className="text-2xl text-white">Sign Up</span>
        </div>
        <form action="#" method="post" encType="multipart/form-data" className="space-y-6 mt-12">
        <div className="relative flex flex-col my-6">
            <input type="text" id="user" placeholder='Username' className="w-full h-14 text-lg bg-transparent text-white px-5 border-2 border-gray-300 rounded-2xl outline-none peer" required />
            {/* <label htmlFor="user" className="absolute left-5 top-3 text-lg text-gray-400 transition-all duration-200 peer-focus:-top-4 peer-focus:text-sm peer-focus:bg-gray-300 peer-focus:px-1 peer-focus:rounded-md peer-focus:text-black">
              Username
            </label> */}
            <i className="bx bx-user absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl"></i>
          </div>
          <div className="relative flex flex-col my-6">
            <input type="Email" id="user" placeholder='Email' className="w-full h-14 text-lg bg-transparent text-white px-5 border-2 border-gray-300 rounded-2xl outline-none peer" required />
            {/* <label htmlFor="user" className="absolute left-5 top-3 text-lg text-gray-400 transition-all duration-200 peer-focus:-top-4 peer-focus:text-sm peer-focus:bg-gray-300 peer-focus:px-1 peer-focus:rounded-md peer-focus:text-black">
              Username
            </label> */}
            {/* <i className="bx bx-user absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl"></i> */}
            <i className="bx bx-envelope text-xl absolute right-5 top-4 text-gray-300"></i>
          </div>
          <div className="relative flex flex-col my-6">
            <input type={showPassword ? 'text' : 'password'} placeholder='Password' id="pass" className="w-full h-14 text-lg bg-transparent text-white px-5 border-2 border-gray-300 rounded-2xl outline-none peer" autoComplete="off" required />
           
            {/* <i className="bx bx-lock-alt absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl"></i> */}
            {/* <i className={`bx ${showPassword ? 'bx-show' : 'bx-hide'} absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl cursor-pointer`} onClick={handleShowPassword}></i> */}
          </div>
          <div className="relative flex flex-col my-6">
            <input type={showPassword ? 'text' : 'password'} placeholder='Confirm Password' id="pass" className="w-full h-14 text-lg bg-transparent text-white px-5 border-2 border-gray-300 rounded-2xl outline-none peer" autoComplete="off" required />
            
            {/* <i className="bx bx-lock-alt absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl"></i> */}
            {/* <i className={`bx ${showPassword ? 'bx-show' : 'bx-hide'} absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl cursor-pointer`} onClick={handleShowPassword}></i> */}
          </div>
          <div className="flex justify-between items-center text-white text-sm">
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>
          </div>
          <div>
            <Link to="/login">
            <input type="submit" value="Sign Up" className="w-full h-12 bg-[#3CB347] text-white text-lg font-medium rounded-2xl cursor-pointer hover:bg-[#36973e] transition-all" />
            </Link>
          </div>
          <div className="text-center">
            <span className="text-white">Already have an account? <Link to="/login" className="text-[#3CB347] font-medium hover:underline">Login</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
