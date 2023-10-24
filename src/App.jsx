import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
    return (
        <div className='flex flex-col items-center bg-[#FAF8EC] px-5 md:px-10 min-h-screen'>
            <Nav />
            <Home />
        </div>
    );
}

export default App;
