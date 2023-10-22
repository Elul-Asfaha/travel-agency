import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
    return (
        <div className='flex flex-col items-center bg-[#FAF8EC] min-h-screen'>
            <Nav />
            <Home />
        </div>
    );
}

export default App;
