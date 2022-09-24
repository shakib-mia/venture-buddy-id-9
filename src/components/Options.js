import React from "react";
import search from "./utils/search.svg";

const Options = () => {
  return (
    <div className="options d-flex flex-row ">
      <img
        src={search}
        className="search-icon"
        height="16px"
        width="16px"
        alt=""
      />
      <input
        type="text"
        id="search"
        className="rounded-pill text-center border-0"
        placeholder="Search for interest startups"
      />
      <button className="btn dropdown-toggle rounded-pill">sector</button>

      <button className="btn dropdown-toggle rounded-pill">Tech</button>

      <button className="btn dropdown-toggle rounded-pill">Revenue</button>
    </div>
  );
};

export default Options;
