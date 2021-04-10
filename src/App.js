import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <h5>
          <a href="https://github.com/cxr2/dictionaryapp">open-source code</a>{" "}
          by <a href="https://cjhoulihan.com">C.J.Houlihan</a>
        </h5>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      </div>
    </div>
  );
}

export default App;
