import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <h2>
          created by <a href="https://cjhoulihan.com">C.J.Houlihan</a>
        </h2>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
