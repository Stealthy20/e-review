import React from "react";
import styles from "../styles/CategoryBar.module.css";
import { NavLink } from "react-router-dom";

const CategoryBar = (props) => {
  const { setFilter } = props;

  const handleClick = (e) => {
    const category = e.target.innerText;
    setFilter(`category=${category}&`);
  };

  return (
    <div className={styles.CategoryBar}>
        <a
        className={styles.NavLink}
        onClick={() => window.location.reload()}
      >
        All
      </a>
      <a
        className={styles.NavLink}
        onClick={(e) => handleClick(e)}
      >
        Tv
      </a>
      <a
        className={styles.NavLink}
        onClick={(e) => handleClick(e)}
      >
        Mobile Phone
      </a>
      <a
        className={styles.NavLink}
        onClick={(e) => handleClick(e)}
      >
        Tablet
      </a>
      <a
        className={styles.NavLink}
        onClick={(e) => handleClick(e)}
      >
        Tv Accessories
      </a>
      <a
        className={styles.NavLink}
        onClick={(e) => handleClick(e)}
      >
        Mobile Phone Accessories
      </a>
      <a
        className={styles.NavLink}
        onClick={(e) => handleClick(e)}
      >
        Tablet Accessories
      </a>
    </div>
  );
};

export default CategoryBar;
