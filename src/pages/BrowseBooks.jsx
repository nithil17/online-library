import Navbar from "../components/Navbar";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

function BrowseBooks(){


    const books = useSelector((state)=>state.books.booksAll);

    return(
        <div>
            <Navbar/>

            <main className="browse-page">
                <div className="browse-header">
                    <div>
                        <p className="section-label">Library Collection</p>
                        <h1>Browse Books</h1>
                    </div>

                    <p className="book-count">{books.length} books</p>
                </div>

                <div className="books-grid">
                    {
                        books.map((book)=>(
                            <article className="book-card" key={book.id}>
                                <div className="book-cover">
                                    <img src={book.image} alt={book.title} />
                                </div>

                                <div className="book-card-content">
                                    <p className="book-category">{book.category}</p>
                                    <h2>{book.title}</h2>
                                    <p className="book-author">by {book.author}</p>

                                    <Link className="details-link" to={`/book/${book.id}`}>
                                        View Details
                                    </Link>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </main>
        </div>

    );
    
}

export default BrowseBooks;
