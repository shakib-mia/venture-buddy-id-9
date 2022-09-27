import React from "react";

const Deals = ({ deal, closed }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        {closed ? <div className="closed">closed</div> : <></>}
        <img src={deal.cover} alt="cover" className="card-img-top" />
        <img
          src={deal.profile}
          className="profile"
          height="56px"
          width="56px"
          alt=""
        />
        <div className="card-body">
          <div className="card-title">{deal.title}</div>
          <div className="card-text">{deal.content}</div>
        </div>
        <div className="card-footer">
          <button className="btn btn-custom">{deal.btn1}</button>
          <button className="btn btn-custom">{deal.btn2}</button>
        </div>
      </div>
    </div>
  );
};

export default Deals;
