import React from "react";
import Deals from "../subcomponents/Deals/Deals";

const Live = ({ deals }) => {
  return (
    <div className="livedeals container-fluid px-5">
      <div className="ps-2 title">Live Deals</div>
      <div className="ps-2 sub-title">130 Opportunities.</div>

      <div className="row">
        {deals.map((deal) => (
          <Deals deal={deal} closed={false} />
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn-outline-dark-blue">View more</button>
      </div>
    </div>
  );
};

export default Live;
