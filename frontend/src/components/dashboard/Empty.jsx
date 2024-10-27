import React from "react";

const Empty = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="bg-my-background-image bg-gray-900 text-[#EFECEC] rounded-lg p-8">
        <p className="text-lg">No items to display</p>
      </div>
    </div>
  );
};

export default Empty;
