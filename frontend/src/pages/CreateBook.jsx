import { useState, useContext } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [bookCover, setBookCover] = useState(null); // Add state for the cover image
  const [loading, setLoading] = useState(false);
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = new FormData();
    data.append("userId", userId);
    data.append("title", title);
    data.append("author", author);
    data.append("publishYear", publishYear);
    data.append("bookCover", bookCover); // Append the cover image to the FormData

    setLoading(true);
    axios
      .post("http://localhost:5555/books", data, {
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
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Cover Image</label>
          <input
            type="file"
            onChange={(e) => setBookCover(e.target.files[0])} // Set the selected file to the state
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
