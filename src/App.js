import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Searchbar from "./Searchbar";
import Prediction from "./Prediction";

function App() {
  return (
    <div className="Wrapper">
      <div className="App d-flex justify-content-center">
        <div className="container text-center">
          <div className="row h-100">
            <div className="col-md-3 left flex-grow-1">
              <div className="col-md my-auto">
                <Searchbar defaultCity="Zurich" />
              </div>
            </div>
            <div className="col-md-9">
              <div className="row right">
                <div className="col-md"></div>
                <h2> Weather Forecast </h2>
              </div>
              <Prediction />
              <Prediction />
              <Prediction />
              <Prediction />
              <Prediction />
              <Prediction />
              <Prediction />
              <Prediction />
            </div>
          </div>
        </div>
      </div>
      <footer>
        {" "}
        <p className="SourceCode d-flex justify-content-center">
          <a
            href="https://github.com/xeniarth/SheCodes_React_Weahter-App"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code by Xenia Artho
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
