import React from "react";
import search from "./utils/search.png";

const Options = () => {
  return (
    <div className="options d-flex flex-row me-auto mx-5 px-5">
      {/* <img
        src={search}
        className="search-icon"
        height="16px"
        width="16px"
        alt=""
      />
      <input
        type="text"
        id="search"
        className="rounded-pill text-center form-control border-0 ps-4"
        placeholder="Search for interest startups"
      />
      <button className="btn dropdown-toggle rounded-pill">sector</button>

      <button className="btn dropdown-toggle rounded-pill">Tech</button>

      <button className="btn dropdown-toggle rounded-pill">Revenue</button> */}
      <div className="position-relative">
        <img src={search} className="search-icon" alt="" />

        <input
          type="text"
          className="form-control border-0 px-4 rounded-pill"
          placeholder="Search for interest startups"
          id="search-text"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <button className="btn dropdown-toggle rounded-pill">sector</button>

      <button className="btn dropdown-toggle rounded-pill">Tech</button>

      <button className="btn dropdown-toggle rounded-pill">Revenue</button>
    </div>
  );
};

export default Options;
