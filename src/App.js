import { useState, useEffect } from "react";
import "./App.css";
import MagiCard from "./MagiCard";
import DetailModal from "./DetailModal";

import axios from "axios";

import LoadingGIF from "./assets/loading.gif";
import Heading from "./assets/heading.png";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  useEffect(() => {
    setLoading(true);

    //storing API response
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=rick`)
      .then((res) => {
        setResults(res.data.results);

        // setting a 1s timeout so that we can actually see loading gif 😅
        setTimeout(function () {
          setLoading(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredData(
      results.filter((dat) =>
        dat.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, results]);

  if (loading) {
    //Loading Screen
    return (
      <div className="loadinScreen">
        <div className="loading">
          <img src={LoadingGIF} className="loading-img" alt="loading..." />
        </div>
      </div>
    );
  }

  // called whenever click action is performed on card
  function cardClicked(props) {
    setModalInfo(props);
    setModalShow(true);
  }

  return (
    <div className="App">
      {/* Head👇 */}
      <img src={Heading} className="heading" alt="loading..." />
      {/* Cards👇 */}
      <div className="column-centre">
        {filteredData.map((data, id) => (
          <div
            key={id}
            onClick={() => {
              cardClicked(data);
            }}
          >
            <MagiCard {...data} />
          </div>
        ))}
      </div>
      {/* Searchbar👇 */}
      <input
        className="searchbar"
        type="text"
        placeholder="Search Rick"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {/* Modal👇 */}
      <DetailModal
        {...modalInfo}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
