import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Home(){

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
                                <strong>11</strong>
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

                    <div className="hero-image-panel">
                        <img src={heroImage} alt="Books arranged for online library browsing" />
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
                                <Link className="category-card" to="/books" key={category.name}>
                                    <span>{category.name}</span>
                                    <p>{category.description}</p>
                                </Link>
                            ))
                        }
                    </div>
                </section>
            </main>
        </div> 
        
    );
}

export default Home;
