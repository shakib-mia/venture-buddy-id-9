import React from "react";
import styles from "./Deals.module.css";
import rupee from "./../../utils/rupee.png";

const Deals = ({ deal, closed }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 p-0">
      <div className="card" id={styles.card}>
        {closed ? <div className="closed">closed</div> : <></>}
        <img
          src={deal.cover}
          alt="cover"
          id={styles.cardImg}
          className="card-img-top rounded-0"
        />

        <div className="card-body bg-white position-relative">
          <div className={styles.cardTexts}>
            <img
              src={deal.profile}
              className="profile"
              height="56px"
              width="56px"
              alt=""
            />
            <div className="card-title">{deal.title}</div>
            <div className="card-text">{deal.content}</div>

            <div className={styles.cardOptions}>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div className="d-flex align-items-baseline">
                    <img src={rupee} alt="" id={styles.rupee} />
                    <span className={`${styles.large} pe-1`}>453,699</span>
                    <span className={styles.small}>raised</span>
                  </div>
                </li>
                <li class="list-group-item">
                  <span className={styles.large}>613</span>{" "}
                  <span className={styles.small}>investers</span>
                </li>
                <li class="list-group-item">
                  <img src={rupee} alt="" id={styles.rupee} />
                  <span className={styles.large}>699</span>{" "}
                  <span className={styles.small}>min investment</span>
                </li>
                <li class="list-group-item">
                  <img src={rupee} alt="" id={styles.rupee} />
                  <span className={styles.large}>1cr</span>{" "}
                  <span className={styles.small}>Market value</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-footer" id={styles.cardFooter}>
          <button className="btn btn-custom">{deal.btn1}</button>
          <button className="btn btn-custom">{deal.btn2}</button>
        </div>
      </div>
    </div>
  );
};

export default Deals;
