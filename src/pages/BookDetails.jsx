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
                <h1>Book Not Found</h1>
                <Link to="/books">Back to Browse</Link>
            </div>
        );
    }

  return (

    <div>
        <Navbar/>
        <h1>
            {selectedBook.title}
        </h1>

        <img src={selectedBook.image} alt={selectedBook.title} width="200" />

        <p>{selectedBook.author}</p>

        <p>{selectedBook.description}</p>

        <Link to="/books">Back to Browse</Link>

    </div>

  );
}

export default BookDetails;
