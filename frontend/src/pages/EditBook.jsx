import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
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
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        alert("Book Edited successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        alert("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="md:p-4 bg-my-background-image bg-[#39ad91] h-screen text-[#EFECEC]">
      <BackButton />
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col gap-1 bg-my-background-image bg-gray-900 text-[#EFECEC] rounded-xl md:w-[600px] p-4 md:px-10 mx-3 md:mx-auto">
        <h1 className="text-2xl text-center">Upload a Book</h1>
        <div className="flex flex-col gap-1">
          <label className="block mb-2 text-sm font-medium ">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-transparent outline-none border-b-2 border-[#efecec] text-1xl  w-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block mb-2 text-sm font-medium ">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
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
            className="bg-transparent outline-none border-b-2 border-[#efecec] text-1xl   w-full "
          />
        </div>
        <div className="flex flex-col gap-1">
          <label class="block mb-2 text-sm font-medium " for="file_input">
            Upload file
          </label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />
        </div>
        <button
          className="p-2 bg-[#f04963] m-8 rounded font-semibold"
          onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
