import React from "react";
import Deals from "../subcomponents/Deals/Deals";

const Closed = ({ deals }) => {
  return (
    <div className="livedeals container-fluid px-5">
      <div className="ps-2 title">Closed Deals</div>
      <div className="ps-2 sub-title">30 Opportunities.</div>

      <div className="row">
        {deals.map((deal) => (
          <Deals deal={deal} closed={true} />
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <div className="btn btn-outline-dark-blue">View more</div>
      </div>
    </div>
  );
};

export default Closed;
