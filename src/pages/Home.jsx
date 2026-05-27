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
            <h1>Welcome to Online Library</h1>

            <h2>Categories</h2>

            {
                categories.map((category, index)=>(
                    <p key={index}>{category}</p>
                ))

            }
        </div>
        
    );
}

export default Home;