import React from "react";
import Feature from "../Feature/Feature";

const Priceoption = ({ priceoption }) => {
  const { price, features } = priceoption;
  return (
    <div className="bg-blue-500 m-5 p-5 flex flex-col gap-4">
      <h3 className="text-4xl">{price}/Mon</h3>
      <h2 className="text-6xl">Membership</h2>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>

      <button className="w-full bg-green-400">Buy Now</button>
    </div>
  );
};

export default Priceoption;
