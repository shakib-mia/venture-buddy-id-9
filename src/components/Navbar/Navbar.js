import React from "react";
import logo from "./../utils/logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="nav container-fluid px-5" height="80px">
      <div className="navbar-container align-items-center h-full w-100 d-flex">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" />
        </a>
        <ul className="navbar-nav align-items-center d-flex flex-row ms-auto me-0">
          <a className="nav-link" href="/">
            Home
          </a>
          <a className="nav-link" href="/">
            Invest and Raise
          </a>
          <a className="nav-link" href="/">
            Valuation calculator
          </a>
          <a className="nav-link" href="/">
            Contact us
          </a>
          <div className="nav-link" href="/">
            |
          </div>
          <a className="nav-link" href="/">
            Login & Signup
          </a>
          <li className="nav-item px-4 ps-4 py-0" id={styles.animatedButton}>
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
    </nav>
  );
};

export default Navbar;
