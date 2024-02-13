import React, { useEffect, useState } from "react";
import Empty from "./Empty";

const Library = () => {
  const [showType, setShowType] = useState("table");

  const handleSelect = (event) => {
    setShowType(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="flex bg-my-background-image bg-gray-900 justify-between items-center py-2 px-4 rounded mb-8">
        <div className="flex">
          <h1 className="text-2xl">Library</h1>
          <div className="flex px-4">
            <select
              value={showType}
              onChange={handleSelect}
              className="text-md font-semibold bg-my-background-image bg-gray-900 outline-none cursor-pointer">
              <option value="table">List</option>
              <option value="card">Card</option>
            </select>
          </div>
        </div>
      </div>
      <Empty />
    </div>
  );
};

export default Library;
