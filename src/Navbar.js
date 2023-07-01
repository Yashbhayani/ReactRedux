import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

export const Navbar = () => {

  const amount = useSelector(state => state.amount)
/*  useEffect(() => {
    document.title = "My Page Title";
  }, []);
  console.log(props.title)*/

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Link</a>
            </li>
          </ul>
          <div className="d-flex">
            <button type="button" disabled={true} className="btn btn-primary">
              Your Balance : {amount}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};



Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Yash",
};
