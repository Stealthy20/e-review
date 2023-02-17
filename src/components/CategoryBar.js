import React from "react";
import styles from "../styles/CategoryBar.module.css";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

const CategoryBar = (props) => {
  const { setFilter } = props;

  const handleClick = (e) => {
    const category = e.target.innerText;
    setFilter(`category=${category}&`);
  };

  return (
    <div>
      <div className={`d-none d-md-block ${styles.CategoryBar}`}>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link
              className={styles.NavLink}
              onClick={() => window.location.reload()}
            >
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              className={styles.NavLink}
              onClick={(e) => handleClick(e)}
            >
              Tv
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              className={styles.NavLink}
              onClick={(e) => handleClick(e)}
            >
              Mobile Phone
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              className={styles.NavLink}
              onClick={(e) => handleClick(e)}
            >
              Tablet
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              className={styles.NavLink}
              onClick={(e) => handleClick(e)}
            >
              Tv Accessories
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              className={styles.NavLink}
              onClick={(e) => handleClick(e)}
            >
              Mobile Phone Accessories
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              className={styles.NavLink}
              onClick={(e) => handleClick(e)}
            >
              Tablet Accessories
            </Nav.Link>
          </Nav.Item>
          </Nav>
          </div>
          <Dropdown className={`d-md-none ${styles.DropDownSmall}`} as={NavItem}>
            <Dropdown.Toggle className="font-weight-bold" as={NavLink}>Categories</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                className={styles.NavLink}
                onClick={() => window.location.reload()}
              >
                All
              </Dropdown.Item>
              <Dropdown.Item
                className={styles.NavLink}
                onClick={(e) => handleClick(e)}
              >
                Tv
              </Dropdown.Item>
              <Dropdown.Item
                className={styles.NavLink}
                onClick={(e) => handleClick(e)}
              >
                Mobile Phone
              </Dropdown.Item>
              <Dropdown.Item
                className={styles.NavLink}
                onClick={(e) => handleClick(e)}
              >
                <Dropdown.Item
                  className={styles.NavLink}
                  onClick={(e) => handleClick(e)}
                ></Dropdown.Item>
                Tablet
              </Dropdown.Item>
              <Dropdown.Item
                className={styles.NavLink}
                onClick={(e) => handleClick(e)}
              >
                Mobile Phone Accessories
              </Dropdown.Item>
              <Dropdown.Item
                className={styles.NavLink}
                onClick={(e) => handleClick(e)}
              >
                Tablet Accessories
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  );
};

export default CategoryBar;
