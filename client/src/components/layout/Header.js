import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <div>
      <header id="header" class="header header-sticky-top-lg">
        <div class="header-section">
          <div id="logoAndNav" class="container">
            <nav class="js-mega-menu navbar navbar-expand-lg">
              <Link class="navbar-brand" to="/" aria-label="Front">
                <img src="/dist/img/logo/logo-hq.png" alt="Logo" />
              </Link>

              <button
                type="button"
                å
                class="navbar-toggler btn btn-icon btn-sm rounded-circle"
                aria-label="Toggle navigation"
                aria-expanded="false"
                aria-controls="navBar"
                data-toggle="collapse"
                data-target="#navBar"
              >
                <span class="navbar-toggler-default">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"
                    />
                  </svg>
                </span>
                <span class="navbar-toggler-toggled">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"
                    />
                  </svg>
                </span>
              </button>

              <div id="navBar" class="collapse navbar-collapse">
                <div class="navbar-body header-sticky-top-inner">
                  <ul class="navbar-nav">
                  <li class="navbar-nav-last-item">
                  {" "}
                  <a class=" nav-link " href="/#about">
                    About
                  </a>
                </li>
                  {
                   
                    // <li class="navbar-nav-last-item">
                    //   {" "}
                    //   <Link class=" nav-link " to="/blog">
                    //     Blog
                    //   </Link>
                    // </li>
                    // <li class="navbar-nav-last-item">
                    //   {" "}
                    //   <Link class=" nav-link " to="/about">
                    //     About
                    //   </Link>
                    // </li>
                   

                  
                    // <li class="navbar-nav-last-item">
                    //   {" "}
                    //   <Link class=" nav-link " to="/login">
                    //     Login
                    //   </Link>
                    // </li>
                  }
                    <li class="navbar-nav-last-item">
                      <Link
                        class="btn btn-sm btn-primary transition-3d-hover"
                        to="/register"
                      >
                       Beta Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
