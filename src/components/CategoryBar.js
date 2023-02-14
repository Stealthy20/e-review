import React from "react";
import styles from "../styles/CategoryBar.module.css";

const CategoryBar = (props) => {
  const { setFilter } = props;

  const handleClick = (e) => {
    const category = e.target.innerText;
    setFilter(`category=${category}&`);
  };

  return (
    <div className={styles.CategoryBar}>
        <span
        className={styles.NavLink}
        onClick={() => window.location.reload()}
      >
        All
      </span>
      <span
        className={styles.NavLink}
        onClick={(e) => handleClick(e)}
      >
        Tv
      </span>
      <span
        className={styles.NavLink}
        onClick={(e) => handleClick(e)}
      >
        Mobile Phone
      </span>
      <span
        className={styles.NavLink}
        onClick={(e) => handleClick(e)}
      >
        Tablet
      </span>
      <span
        className={styles.NavLink}
        onClick={(e) => handleClick(e)}
      >
        Tv Accessories
      </span>
      <span
        className={styles.NavLink}
        onClick={(e) => handleClick(e)}
      >
        Mobile Phone Accessories
      </span>
      <span
        className={styles.NavLink}
        onClick={(e) => handleClick(e)}
      >
        Tablet Accessories
      </span>
    </div>
  );
};

export default CategoryBar;
