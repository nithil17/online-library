import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";


function BookDetails() {

    const {id} = useParams();

    const books = useSelector(
        (state)=> state.books.booksAll
    );

    const selecetedBook = books.find(
        (book)=> book.id==id
    )


  return (

    <div>
        <Navbar/>
        <h1>
            {selecetedBook.title}
        </h1>

        <img src={selecetedBook.image} alt="" width="200" />

        <p>{selecetedBook.author}</p>

        <p>{selecetedBook.description}</p>

        <Link to="books">Back to Browse</Link>

    </div>

  );
}

export default BookDetails;