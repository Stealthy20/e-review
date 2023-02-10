import React from "react";
import styles from "../styles/CategoryBar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar} >
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.Active}
          >
            Tv
          </NavLink>{" "}
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.Active}
          >
            Mobile Phone
          </NavLink>{" "}
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.Active}
          >
            Tablet
          </NavLink>{" "}
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.Active}
          >
            Tv Accessories
          </NavLink>{" "}
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.Active}
          >
            Mobile Phone Accessories
          </NavLink>
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.Active}
          >
            Tablet Accessories
          </NavLink>
        </div>
  );
};

export default Sidebar;
