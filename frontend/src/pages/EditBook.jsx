import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const [bookCover, setBookCover] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Chack console");
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = new FormData();
    data.append("title", title);
    data.append("author", author);
    data.append("description", description);
    data.append("publishYear", publishYear);
    data.append("bookCover", bookCover); // Append the cover image to the FormData

    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to multipart/form-data for file uploads
        },
      })
      .then(() => {
        setLoading(false);
        alert("Book Created successfully", { variant: "success" });
        navigate("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Check console');
        alert("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="md:p-4 bg-my-background-image bg-[#023530] h-screen text-[#EFECEC]">
      <BackButton />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-1 bg-my-background-image bg-gray-900 text-[#EFECEC] rounded-xl md:w-[600px] p-4 md:px-10 mx-3 md:mx-auto">
          <h1 className="text-2xl text-center">Update Book</h1>
          <div className="flex flex-col gap-1">
            <label className="block mb-2 text-sm font-medium ">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-transparent outline-none border-b-2 border-[#efecec] text-1xl  w-full font-semibold text-[#f04963]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="block mb-2 text-sm font-medium ">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="bg-transparent outline-none border-b-2 border-[#efecec] text-1xl   w-full font-semibold text-[#f04963] "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="block mb-2 text-sm font-medium ">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-transparent outline-none border-b-2 border-[#efecec] text-1xl   w-full "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="block mb-2 text-sm font-medium ">
              Publish Year
            </label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="bg-transparent outline-none border-b-2 border-[#efecec] text-1xl   w-full font-semibold text-[#f04963] "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="block mb-2 text-sm font-medium ">
              Upload file
            </label>
            <input
              className="block w-full font-semibold text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              onChange={(e) => setBookCover(e.target.files[0])}
              type="file"
            />
          </div>
          <button
            className="p-2 bg-[#f04963] m-8 rounded font-semibold"
            onClick={handleEditBook}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;
