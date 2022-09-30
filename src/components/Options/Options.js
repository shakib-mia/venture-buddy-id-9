import React from "react";
import search from "./../utils/search.png";

const Options = ({ handleText }) => {
  return (
    <div className="options d-flex flex-row me-auto mx-5 px-5">
      <div className="position-relative">
        <img src={search} className="search-icon" alt="" />

        <input
          type="text"
          className="form-control border-0 rounded-pill"
          placeholder="Search for interest startups"
          id="search-text"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => handleText(e.target.value)}
        />
      </div>
      <button className="btn dropdown-toggle rounded-pill">sector</button>

      <button className="btn dropdown-toggle rounded-pill">Tech</button>

      <button className="btn dropdown-toggle rounded-pill">Revenue</button>
    </div>
  );
};

export default Options;
