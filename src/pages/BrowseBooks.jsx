import Navbar from "../components/Navbar";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

function BrowseBooks(){


    const books = useSelector((state)=>state.books.booksAll);

    return(
        <div className="books-container"> 
        <Navbar/>
        <h1>Browse Books</h1>
        {
            books.map((book)=>(
                <div className="book-card" key={book.id}>
                    <img src={book.image} width="150" />
                    <h2>{book.title}</h2>

                    <p>{book.author}</p>

                    <Link to={`/book/${book.id}`}>
                    </Link>

                </div>
            ))
        }
    </div>

    );
    
}

