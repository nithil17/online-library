import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";


function BookDetails() {

    const {id} = useParams();

    const books = useSelector(
        (state)=> state.books.booksAll
    );

    const selectedBook = books.find(
        (book)=> String(book.id) === id
    )

    if (!selectedBook) {
        return (
            <div>
                <Navbar/>
                <main className="details-page">
                    <section className="not-found-panel">
                        <h1>Book Not Found</h1>
                        <Link className="details-link" to="/books">Back to Browse</Link>
                    </section>
                </main>
            </div>
        );
    }

  return (

    <div>
        <Navbar/>
        <main className="details-page">
            <article className="details-card">
                <div className="details-cover">
                    <img src={selectedBook.image} alt={selectedBook.title} />
                </div>

                <div className="details-content">
                    <p className="book-category">{selectedBook.category}</p>
                    <h1>{selectedBook.title}</h1>
                    <p className="details-author">by {selectedBook.author}</p>
                    <p className="details-rating">{selectedBook.rating}/5 rating</p>
                    <p className="details-description">{selectedBook.description}</p>

                    <Link className="details-link" to="/books">Back to Browse</Link>
                </div>
            </article>
        </main>

    </div>

  );
}

export default BookDetails;
