import React from "react";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div>
      <form className="form-inline">
        <div className="mb-3">
          <button
            type="checkCurrentLocation"
            className="btn btn-outline-light w-100"
          >
            <i className="fas fa-map-marker-alt"></i> Use current location
          </button>
          <input
            type="city"
            className="form-control text-center"
            placeholder="Enter city"
          />{" "}
          <button type="submit" className="btn btn-outline-light w-100">
            <i className="fas fa-search-location"></i> Search
          </button>
        </div>
      </form>
    </div>
  );
}
