import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        alert("Book Deleted successfully", { variant: "success" });
        navigate("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        alert("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="bg-my-background-image bg-[#023530] h-screen text-[#EFECEC]">
      <BackButton destination={"/dashboard"} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center items-center h-[80vh]">
          {" "}
          <div className="flex flex-col gap-2 items-center bg-my-background-image bg-gray-900  rounded-xl md:w-[600px] p-4 mx-4 md:p-8 md:mx-auto">
            <h1 className="text-3xl font-semibold">Delete Book</h1>
            <h3 className="text-2xl">
              Are You Sure You want to delete this book?
            </h3>
            <button
              className="p-4 rounded bg-[#f04963] text-white my-4 mx-8 w-full"
              onClick={handleDeleteBook}>
              Yes, Delete it
            </button>
            <Link to="/dashboard">No</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
