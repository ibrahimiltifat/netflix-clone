import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Row
        title="Netflix originals"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /> */}
      {/* <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /> */}
      {/* <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> */}
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
      {/* <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /> */}
      {/* <Row title="Trending" fetchURL={requests.fetchTrending} /> */}
    </div>
  );
}

export default App;
