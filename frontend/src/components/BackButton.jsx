import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const BackButton = ({ destination }) => {
  return (
    <div className="flex">
      <Link
        to={destination ? destination.returnPath : "/dashboard"}
        className="p-4">
        <IoChevronBack className="text-4xl cursor-pointer" />
      </Link>
    </div>
  );
};

export default BackButton;
