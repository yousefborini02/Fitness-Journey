import React from "react";
import { useInView } from 'react-intersection-observer';
import PlansCard from "../layouts/PlansCard";

const Plans = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2,    
  });

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center md:px-32 px-5 transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      ref={ref}
    >
      <h1 className="text-4xl font-semibold text-center text-[#3CB347]">Buy a membership</h1>

      <div className="flex flex-col md:flex-row justify-between mt-10 gap-8">
        <PlansCard title="1 Month Plan" price="40" />
        <PlansCard title="3 Months Plan" price="80" />
        <PlansCard title="6 Months Plan" price="140" />
      </div>
    </div>
  );
};

export default Plans;