import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home(){
    const books = useSelector((state) => state.books.booksAll);
    const popularBooks = books.slice(0, 4);

    const categories = [
        {
            name: "Sci-Fi",
            description: "Explore imaginative ideas, future worlds, and speculative stories."
        },
        {
            name: "History",
            description: "Read stories, biographies, and accounts from the past."
        },
        {
            name: "Self Help",
            description: "Find practical books for growth, habits, and better thinking."
        }
    ];

    return (
        <div>
            <Navbar/>

            <main className="home-page">
                <section className="home-hero">
                    <div className="home-hero-content">
                        <p className="section-label">Online Library</p>
                        <h1 className="hero-title">Find your next good read.</h1>
                        <p className="hero-copy">
                            Browse a focused collection of books across fiction, history, and personal growth.
                        </p>

                        <div className="hero-actions">
                            <Link className="primary-action" to="/books">Browse Books</Link>
                            <Link className="secondary-action" to="/add-book">Add Book</Link>
                        </div>

                        <div className="home-stats">
                            <div>
                                <strong>{books.length}</strong>
                                <span>Books</span>
                            </div>
                            <div>
                                <strong>3</strong>
                                <span>Categories</span>
                            </div>
                            <div>
                                <strong>New</strong>
                                <span>User Adds</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-image-panel" aria-label="Open book illustration">
                        <svg
                            className="book-hero-svg"
                            viewBox="0 0 420 320"
                            role="img"
                            aria-labelledby="bookHeroTitle"
                        >
                            <title id="bookHeroTitle">Open book illustration</title>
                            <defs>
                                <linearGradient id="bookCoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#4fb3a8" />
                                    <stop offset="100%" stopColor="#2f8f86" />
                                </linearGradient>
                                <linearGradient id="bookPageGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#ffffff" />
                                    <stop offset="100%" stopColor="#d9e8ee" />
                                </linearGradient>
                            </defs>

                            <path
                                className="book-shadow"
                                d="M86 246c46 28 98 34 124 15 26 19 78 13 124-15 19-12 30-24 30-35v25c0 13-11 26-30 38-46 28-98 34-124 15-26 19-78 13-124-15-19-12-30-25-30-38v-25c0 11 11 23 30 35Z"
                            />
                            <path
                                className="book-left-cover"
                                d="M56 105c0-18 19-30 50-46 44-22 77-29 104-9v211c-27-20-60-13-104 9-31 16-50 28-50 46V105Z"
                            />
                            <path
                                className="book-right-cover"
                                d="M364 105c0-18-19-30-50-46-44-22-77-29-104-9v211c27-20 60-13 104 9 31 16 50 28 50 46V105Z"
                            />
                            <path
                                className="book-left-page"
                                d="M73 86c45-27 92-34 137-5v169c-44-24-89-19-137 7V86Z"
                            />
                            <path
                                className="book-right-page"
                                d="M347 86c-45-27-92-34-137-5v169c44-24 89-19 137 7V86Z"
                            />
                            <path className="book-spine" d="M210 80v181" />
                            <path className="book-line" d="M99 126c30-13 57-15 84-5" />
                            <path className="book-line" d="M99 158c30-13 57-15 84-5" />
                            <path className="book-line" d="M99 190c30-13 57-15 84-5" />
                            <path className="book-line" d="M237 126c27-10 54-8 84 5" />
                            <path className="book-line" d="M237 158c27-10 54-8 84 5" />
                            <path className="book-line" d="M237 190c27-10 54-8 84 5" />
                            <path
                                className="book-bookmark"
                                d="M275 80v95l22-15 22 15V96c-15-8-29-13-44-16Z"
                            />
                        </svg>
                    </div>
                </section>

                <section className="home-section">
                    <div className="home-section-header">
                        <p className="section-label">Categories</p>
                        <h2>Choose a shelf</h2>
                    </div>

                    <div className="categories">
                        {
                            categories.map((category) => (
                                <Link className="category-card" to={`/books/${encodeURIComponent(category.name)}`} key={category.name}>
                                    <span>{category.name}</span>
                                    <p>{category.description}</p>
                                </Link>
                            ))
                        }
                    </div>
                </section>

                <section className="home-section">
                    <div className="home-section-header">
                        <p className="section-label">Popular Books</p>
                        <h2>Reader picks</h2>
                    </div>

                    <div className="popular-books-grid">
                        {
                            // Popular books come from Redux so newly added books affect this page too.
                            popularBooks.map((book) => (
                                <article className="popular-book-card" key={book.id}>
                                    <img src={book.image} alt={book.title} />
                                    <div className="popular-book-content">
                                        <p className="book-category">{book.category}</p>
                                        <h3>{book.title}</h3>
                                        <p>by {book.author}</p>
                                        <p className="book-rating">{book.rating}/5 rating</p>
                                        <Link className="details-link" to={`/book/${book.id}`}>
                                            View Details
                                        </Link>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </section>
            </main>
        </div> 
        
    );
}

export default Home;
