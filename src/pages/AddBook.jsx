import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBooks } from "../redux/booksSlice";

function AddBook() {

    

    const navigate = useNavigate();

    const [title, setTitle] = useState();

    const [author, setAuthor] = useState("");

    const [description, setDescription] = useState("");

    const [image, setImage] = useState("");

    const [rating, setRating] = useState("");

    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(
            !title ||
            !author ||
            !description ||
            !image ||
            !rating ||
            !category
        ){
            alert("Fill all fields")

            return;
        }

        const newBook = {
            id: Date.now(),
            
            title,

            author,

            description,

            image,

            rating,

            category
        }

        dispatch(addBooks(newBook));

        navigate("/books")
    };

      return (
    <div>

      <Navbar />

      <h1>Add Book</h1>

      <form onSubmit={handleSubmit} className="book-form">

        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Rating"
          onChange={(e) => setRating(e.target.value)}
        />

        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">
          Add Book
        </button>

      </form>

    </div>
  );
}

export default AddBook;