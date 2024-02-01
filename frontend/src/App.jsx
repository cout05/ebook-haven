import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/books/create" element={<CreateBook />}></Route>
      <Route path="/books/details/:id" element={<ShowBook />}></Route>
      <Route path="/books/edit/:id" element={<EditBook />}></Route>
      <Route path="/books/delete/:id" element={<DeleteBook />}></Route>
    </Routes>
  );
}

export default App;
