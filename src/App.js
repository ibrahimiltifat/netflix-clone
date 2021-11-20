import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Row title="Netflix originals" fetchURL={requests.fetchTopRated} />
      {/* <Row title="Trending" fetchURL={requests.fetchTrending} /> */}
    </div>
  );
}

export default App;
