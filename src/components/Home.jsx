import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-end md:px-32 px-5 bg-[url('https://fetchpik.com/images/fetchpik.com-7dVaxFnlLp.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center md:w-1/3 text-left">
        <h1 className="text-8xl font-semibold">Discover your strength!</h1>

        <div className="mt-5 flex justify-center">
          <Link to="/gymcatalog">
          <Button title="Find Gym" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
