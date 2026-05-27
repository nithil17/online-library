import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/books">Browse Books</Link>
            <Link to = "/add-book">Add Books</Link>

        </nav>
    );
}

export default Navbar;