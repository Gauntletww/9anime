import "./App.css";
import "./Main.css";
import "./Side.css";
import "./TopAnime.css"
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import Side from "./component/Side";

function App() {
  document.body.style.backgroundColor = "#0e0e0e";
  return (
    <div className="container">
      <Navbar />
      <div className="grid_box">
        <Main />
        <Side />
      </div>
    </div>
  );
}

export default App;
