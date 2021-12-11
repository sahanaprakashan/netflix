import Navbar from "./components/navbar/Navbar";
import "./app.css"
import Banner from "./components/banner/Banner";
import Rowpost from "./components/rowpost/Rowpost";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost/>
    </div>
  );
}

export default App;
