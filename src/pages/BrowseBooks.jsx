import Navbar from "../components/Navbar";

import { useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function BrowseBooks(){


    const books = useSelector((state)=>state.books.booksAll);
    const { category } = useParams();
    const [searchText, setSearchText] = useState("");

    const decodedCategory = category ? decodeURIComponent(category) : "";

    // Apply both assignment filters: category from the route and title/author from the search box.
    const filteredBooks = books.filter((book) => {
        const matchesCategory = !decodedCategory || book.category === decodedCategory;
        const searchValue = searchText.trim().toLowerCase();
        const matchesSearch =
            !searchValue ||
            book.title.toLowerCase().includes(searchValue) ||
            book.author.toLowerCase().includes(searchValue);

        return matchesCategory && matchesSearch;
    });

    return(
        <div>
            <Navbar/>

            <main className="browse-page">
                <div className="browse-header">
                    <div>
                        <p className="section-label">Library Collection</p>
                        <h1>{decodedCategory || "Browse Books"}</h1>
                    </div>

                    <p className="book-count">{filteredBooks.length} books</p>
                </div>

                <div className="browse-toolbar">
                    <label className="search-field">
                        <span>Search books</span>
                        <input
                            type="search"
                            placeholder="Search by title or author"
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}
                        />
                    </label>

                    <div className="category-filter">
                        <Link className={!decodedCategory ? "active" : ""} to="/books">All</Link>
                        <Link className={decodedCategory === "Sci-Fi" ? "active" : ""} to="/books/Sci-Fi">Sci-Fi</Link>
                        <Link className={decodedCategory === "History" ? "active" : ""} to="/books/History">History</Link>
                        <Link className={decodedCategory === "Self Help" ? "active" : ""} to="/books/Self%20Help">Self Help</Link>
                    </div>
                </div>

                <div className="books-grid">
                    {
                        filteredBooks.map((book)=>(
                            <article className="book-card" key={book.id}>
                                <div className="book-cover">
                                    <img src={book.image} alt={book.title} />
                                </div>

                                <div className="book-card-content">
                                    <p className="book-category">{book.category}</p>
                                    <h2>{book.title}</h2>
                                    <p className="book-author">by {book.author}</p>
                                    <p className="book-rating">{book.rating}/5 rating</p>

                                    <Link className="details-link" to={`/book/${book.id}`}>
                                        View Details
                                    </Link>
                                </div>
                            </article>
                        ))
                    }
                </div>

                {
                    filteredBooks.length === 0 && (
                        <p className="empty-state">No books matched your search.</p>
                    )
                }
            </main>
        </div>

    );
    
}

export default BrowseBooks;
