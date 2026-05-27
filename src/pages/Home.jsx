import Navbar from "../components/Navbar";

function Home(){

    const categories = [
        "Sci-Fi",
        "History",
        "Self Help"
    ];
    return (
        <div>

            <Navbar/>
            <h1 className="hero-title">Welcome to Online Library</h1>

            <h2>Categories</h2>

            <div className="categories">

            {
            categories.map((category, index) => (
                <div className="category-card" key={index}>
                {category}
                </div>
            ))
            }

            </div>
        </div> 
        
    );
}

export default Home;