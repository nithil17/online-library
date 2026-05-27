import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBooks } from "../redux/booksSlice";
import Navbar from "../components/Navbar";

function AddBook() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [title, setTitle] = useState("");

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

            <main className="add-book-page">
                <section className="add-book-header">
                    <p className="section-label">Contribute</p>
                    <h1>Add a new book</h1>
                    <p>
                        Add a title, cover image, and short description so it appears in the library collection.
                    </p>
                </section>

                <section className="add-book-layout">
                    <form onSubmit={handleSubmit} className="book-form">
                        <div className="form-grid">
                            <label className="form-field">
                                <span>Title</span>
                                <input
                                    type="text"
                                    placeholder="The Alchemist"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </label>

                            <label className="form-field">
                                <span>Author</span>
                                <input
                                    type="text"
                                    placeholder="Paulo Coelho"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                />
                            </label>

                            <label className="form-field">
                                <span>Category</span>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">Select category</option>
                                    <option value="Sci-Fi">Sci-Fi</option>
                                    <option value="History">History</option>
                                    <option value="Self Help">Self Help</option>
                                </select>
                            </label>

                            <label className="form-field">
                                <span>Rating</span>
                                <input
                                    type="number"
                                    placeholder="4.5"
                                    min="1"
                                    max="5"
                                    step="0.1"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                            </label>
                        </div>

                        <label className="form-field">
                            <span>Image URL</span>
                            <input
                                type="url"
                                placeholder="https://example.com/book-cover.jpg"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </label>

                        <label className="form-field">
                            <span>Description</span>
                            <textarea
                                placeholder="Write a short summary of the book."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>

                        <div className="form-actions">
                            <button type="submit">Add Book</button>
                            <button type="button" className="ghost-button" onClick={() => navigate("/books")}>
                                Cancel
                            </button>
                        </div>
                    </form>

                    <aside className="book-preview">
                        <p className="section-label">Preview</p>
                        <div className="preview-cover">
                            {
                                image ? (
                                    <img src={image} alt={title || "Book cover preview"} />
                                ) : (
                                    <span>Cover</span>
                                )
                            }
                        </div>
                        <h2>{title || "Book title"}</h2>
                        <p className="preview-author">{author || "Author name"}</p>
                        <p className="preview-meta">
                            {category || "Category"} {rating ? `- ${rating}/5` : "- Rating"}
                        </p>
                        <p className="preview-description">
                            {description || "Your book description preview will appear here."}
                        </p>
                    </aside>
                </section>
            </main>
        </div>
  );
}

export default AddBook;
