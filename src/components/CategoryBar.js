import React from "react";
import styles from "../styles/CategoryBar.module.css";
import { NavLink } from "react-router-dom";

const CategoryBar = (props) => {
  const { setFilter } = props;
  console.log(setFilter);
  const handleClick = (e) => {
    const category = e.target.innerText;
    console.log(setFilter)
    setFilter(`category=${category}&`)
  };

  return (
    <div className={styles.categorybar}>
      <span onClick={(e) => handleClick(e)}>Tv</span>
      <NavLink
        exact
        to="/"
        onClick={(e) => handleClick(e)}
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        Mobile Phone
      </NavLink>
      <NavLink
        exact
        to="/"
        className={styles.NavLink}
        activeClassName={styles.Active}
        onClick={(e) => handleClick(e)}
      >
        Tablet
      </NavLink>
      <NavLink
        exact
        to="/"
        className={styles.NavLink}
        activeClassName={styles.Active}
        onClick={(e) => handleClick(e)}
      >
        Tv Accessories
      </NavLink>
      <NavLink
        exact
        to="/"
        className={styles.NavLink}
        activeClassName={styles.Active}
        onClick={(e) => handleClick(e)}
      >
        Mobile Phone Accessories
      </NavLink>
      <NavLink
        exact
        to="/"
        className={styles.NavLink}
        activeClassName={styles.Active}
        onClick={(e) => handleClick(e)}
      >
        Tablet Accessories
      </NavLink>
    </div>
  );
};

export default CategoryBar;
