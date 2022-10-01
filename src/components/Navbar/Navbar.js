import React, { useEffect, useState } from "react";

import logo from "./../utils/logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={`bg-white sticky-top py-0`}>
      <nav
        className={`navbar navbar-expand-lg fw-bold mt-0`}
        id={styles.navbar}
      >
        <div
          className="col-4 col-lg-2 order-1 mx-auto fixed-sm-top mx-lg-0 order-lg-0 top-0 py-3 py-lg-0 my-auto"
          id={styles.logo}
        >
          <a href="">
            <img src={logo} className="img-fluid col-10 col-lg-8" alt="" />
          </a>
        </div>
        <div className="container-fluid py-0">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto gap-4 mb-2 mb-lg-0">
              <li className="nav-item text-light py-0">
                <a href="#" className="nav-link" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item text-light py-0">
                <a href="#" className="nav-link">
                  Invest and Raise
                </a>
              </li>
              <li className="nav-item text-light py-0">
                <a href="#" className="nav-link">
                  Valuation calculator
                </a>
              </li>
              <li className="nav-item text-light py-0 border-bottom d-lg-none border-3">
                <a href="#" className="nav-link">
                  Contact us
                </a>
              </li>
              <li className="nav-item text-light">
                <a
                  href="#"
                  className="py-0 nav-link border-end d-none d-lg-block border-3"
                  style={{ marginTop: 9, paddingRight: "32px" }}
                >
                  Contact us
                </a>
              </li>
              <li className="py-0 my-auto">
                <a href="#" className="nav-link">
                  Login & Signup
                </a>
              </li>
              <li
                className="nav-item px-4 ps-4 py-0"
                id={styles.animatedButton}
              >
                <div className={styles.outline}></div>
                <a
                  href="https://tiny-marzipan-457afd.netlify.app/"
                  className={`${styles.liveDeals}`}
                >
                  Live Deals
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
