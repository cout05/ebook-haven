import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books, mode }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border bg-gray-900 bg-my-background-image border-slate-600 rounded-md">
            No
          </th>
          <th className="border bg-gray-900 bg-my-background-image border-slate-600 rounded-md">
            Title
          </th>
          <th className="border bg-gray-900 bg-my-background-image border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border bg-gray-900 bg-my-background-image border-slate-600 rounded-md max-md:hidden">
            Publish Year
          </th>
          <th className="border bg-gray-900 bg-my-background-image border-slate-600 rounded-md">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border bg-gray-900 bg-my-background-image border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border bg-gray-900 bg-my-background-image border-slate-700 rounded-md text-center">
              {book.title}
            </td>
            <td className="border bg-gray-900 bg-my-background-image border-slate-700 rounded-md text-center max-md:hidden">
              {book.author}
            </td>
            <td className="border bg-gray-900 bg-my-background-image border-slate-700 rounded-md text-center max-md:hidden">
              {book.publishYear}
            </td>
            {mode === "up" && (
              <td className="border bg-gray-900 bg-my-background-image border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link
                    onClick={() => back("/")}
                    to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-[#39ad91]" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-]" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-[#f04963]" />
                  </Link>
                </div>
              </td>
            )}
            {mode === "lib" && (
              <td className="border bg-[#f04963] border-slate-700 rounded-md text-center cursor-pointer">
                <div className="flex justify-center gap-x-4">
                  <p className="">Remove from Library</p>
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
