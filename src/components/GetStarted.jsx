import React from "react";

const GetStarted = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-semibold text-center py-8 text-white">
        Get moving with Fitness Journey!
      </h1>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* First Image */}
          <div className="flex-1 min-w-[200px] max-w-[300px] text-center mb-4 relative">
            <img
              src="https://media.discordapp.net/attachments/1260281491930222605/1266841493604401203/image1-Photoroom.png?ex=66a69d94&is=66a54c14&hm=4c4585fdf528ff9af058fd08e60c3418f607a9b70df3f59475391f3dbfb18b54&=&format=webp&quality=lossless&width=415&height=375"
              alt="Buy a membership"
              className="mb-2 mx-auto rounded-lg"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
            <h4 className="text-2xl  text-white mb-2">1-Buy a membership</h4>
          </div>

          {/* Points between first and second images */}
          <div className="hidden md:flex flex-col items-center justify-center mx-4">
            <div className="flex  space-x-2">
              <span className="bg-white rounded-full h-2 w-2"></span>
              <span className="bg-white rounded-full h-2 w-2"></span>
              <span className="bg-white rounded-full h-2 w-2"></span>
              <span className="bg-white rounded-full h-2 w-2"></span>
              <span className="bg-white rounded-full h-2 w-2"></span>
              <span className="bg-white rounded-full h-2 w-2"></span>
            </div>
          </div>

          {/* Second Image */}
          <div className="flex-1 min-w-[200px] max-w-[300px] text-center mb-4 relative">
            <img
              src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg"
              alt="Choose sport facility"
              className="mb-2 mx-auto rounded-lg"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
            <h4 className="text-2xl  text-white mb-2">2-Choose sport facility</h4>
          </div>

          {/* Points between second and third images */}
          <div className="hidden md:flex flex-col items-center justify-center mx-4">
            <div className="flex  space-x-2">
              <span className="bg-white rounded-full h-2 w-2"></span>
              <span className="bg-white rounded-full h-2 w-2"></span>
              <span className="bg-white rounded-full h-2 w-2"></span>
              <span className="bg-white rounded-full h-2 w-2"></span>
              <span className="bg-white rounded-full h-2 w-2"></span>
              <span className="bg-white rounded-full h-2 w-2"></span>
            </div>
          </div>

          {/* Third Image */}
          <div className="flex-1 min-w-[200px] max-w-[300px] text-center mb-4 relative">
            <img
              src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Start training"
              className="mb-2 mx-auto rounded-lg"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
            <h4 className="text-2xl  text-white mb-2">3-Start training</h4>
          </div>
        </div>

        {/* Points between the images on small screens */}
        <div className="md:hidden flex flex-col items-center justify-center mt-8">
          <div className="flex flex-col space-y-2 mb-4">
            <span className="bg-[#3CB347] rounded-full h-2 w-2"></span>
            <span className="bg-[#3CB347] rounded-full h-2 w-2"></span>
            <span className="bg-[#3CB347] rounded-full h-2 w-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
