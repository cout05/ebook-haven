import React from "react";

const Books = () => {
  return (
    <div>
      <section className="p-4">
        <h1>Free books</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 border-black border">
            <img className="w-[150px] h-[150px]" src="books" alt="books" />
            <p>title</p>
            <p>Author</p>
            <p>price</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
