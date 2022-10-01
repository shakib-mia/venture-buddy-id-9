import React from "react";
import search from "./../utils/search.png";

const Options = ({ handleText, setRevenue, setTech, setSector }) => {
  const handleRevenueChange = (e) => {
    setRevenue(e.target.value);

    if (e.target.value !== "Revenue") {
      e.target.style.backgroundColor = "#39b54a";
      e.target.style.boxShadow = "0 0 5px #39b54a";
    } else {
      e.target.style.backgroundColor = "#fff";
      e.target.style.boxShadow = "none";
    }
  };
  const handleTechChange = (e) => {
    setTech(e.target.value);
    if (e.target.value !== "Tech") {
      e.target.style.backgroundColor = "#39b54a";
      e.target.style.boxShadow = "0 0 5px #39b54a";
    } else {
      e.target.style.backgroundColor = "#fff";
      e.target.style.boxShadow = "none";
    }
  };
  const handleSectorChange = (e) => {
    setSector(e.target.value);
    if (e.target.value !== "Sector") {
      e.target.style.backgroundColor = "#39b54a";
      e.target.style.boxShadow = "0 0 5px #39b54a";
    } else {
      e.target.style.backgroundColor = "#fff";
      e.target.style.boxShadow = "none";
    }
  };

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

      <select
        className={`form-select border-0 rounded-pill`}
        id="sectorOptions"
        onChange={handleSectorChange}
      >
        <option selected>Sector</option>
        <option value="arts">Arts & Entertainment</option>
        <option value="Edtech">Edtech</option>
        <option value="Finetch">Finetch</option>
        <option value="foodAndDrinks">Food & Drinks</option>
        <option value="healthAndWellness">Health & wellness</option>
        <option value="Healthcare">Healthcare</option>
        <option value="realEstate">Real estate</option>
        <option value="transportation">Transportation</option>
        <option value="travel">Travel & Hospitality</option>
      </select>

      <select
        className={`form-select border-0 rounded-pill`}
        id="techOptions"
        onChange={handleTechChange}
      >
        <option selected>Tech</option>
        <option value="arts">Arts & Entertainment</option>
        <option value="Edtech">Edtech</option>
        <option value="Finetch">Finetch</option>
        <option value="foodAndDrinks">Food & Drinks</option>
        <option value="healthAndWellness">Health & wellness</option>
        <option value="Healthcare">Healthcare</option>
        <option value="realEstate">Real estate</option>
        <option value="transportation">Transportation</option>
        <option value="travel">Travel & Hospitality</option>
      </select>

      <select
        className={`form-select border-0 rounded-pill`}
        id="revenueOptions"
        onChange={handleRevenueChange}
      >
        <option selected>Revenue</option>
        <option value="arts">Arts & Entertainment</option>
        <option value="Edtech">Edtech</option>
        <option value="Finetch">Finetch</option>
        <option value="foodAndDrinks">Food & Drinks</option>
        <option value="healthAndWellness">Health & wellness</option>
        <option value="Healthcare">Healthcare</option>
        <option value="realEstate">Real estate</option>
        <option value="transportation">Transportation</option>
        <option value="travel">Travel & Hospitality</option>
      </select>
    </div>
  );
};

export default Options;
