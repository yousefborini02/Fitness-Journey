import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const login = (e) => {
    e.preventDefault();
    const uname = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    if (uname === 'Ajmal' && password === 'Ajmal07') {
      alert('Successfully Verified');
    } else {
      alert('Enter Your Details');
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      <div className="relative w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 backdrop-blur-lg border-2 border-white shadow-lg rounded-lg p-12 text-white bg-opacity-20">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-[#3CB347] w-36 h-16 rounded-b-2xl">
          <span className="text-2xl text-white">Login</span>
        </div>
        <form onSubmit={login} className="pt-10">
          <div className="relative flex flex-col my-6">
            <input type="email" placeholder='Email' id="user" className="w-full h-14 text-lg bg-transparent text-white px-5 border-2 border-gray-300 rounded-2xl outline-none peer" required />
           
            <i className="bx bx-user absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl"></i>
          </div>
          <div className="relative flex flex-col my-6">
            <input type={showPassword ? 'text' : 'password'} placeholder='Password' id="pass" className="w-full h-14 text-lg bg-transparent text-white px-5 border-2 border-gray-300 rounded-2xl outline-none peer" autoComplete="off" required />
           
            {/* <i className="bx bx-lock-alt absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl"></i> */}
            {/* <i className={`bx ${showPassword ? 'bx-show' : 'bx-hide'} absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl cursor-pointer`} onClick={handleShowPassword}></i> */}
          </div>
          <div className="flex justify-between text-sm">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="hover:underline">Forgot password</a>
          </div>
          <div className="my-6">
            <Link to="/">
            <input type="submit" className="w-full h-12 bg-[#3CB347] text-white text-lg font-medium rounded-2xl cursor-pointer hover:bg-[#36973e] transition-all" value="Login" />
            </Link>
          </div>
          <div className="text-center">
            <span>Don't have an account?  <Link to="/signup" className="text-[#3CB347] font-medium hover:underline">Register</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
