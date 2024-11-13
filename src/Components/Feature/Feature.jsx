import { FaCircleCheck } from "react-icons/fa6";
const Feature = ({ feature }) => {
  return (
      <div className="flex items-center gap-2">
        <FaCircleCheck></FaCircleCheck>
        <p>{feature}</p>
      </div>
  );
};

export default Feature;
