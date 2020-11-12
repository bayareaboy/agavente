import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match.", "danger");
    } else {
      register({ name, email, password });
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/thankyou" />;
  }

  return (
    <div>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-3">
            <form class="js-validate" onSubmit={(e) => onSubmit(e)}>
              <div class="mb-5 mb-md-7">
                <h1 class="h2">Welcome to Agavente Health.</h1>
                <p>Sign up now and get invited to be the first to try our product.</p>
              </div>
              <div class="js-form-message form-group">
                <label class="input-label" for="name">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  tabindex="1"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  required
                  data-msg="How should we call you?"
                />
              </div>
              <div class="js-form-message form-group">
                <label class="input-label" for="signinSrEmail">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  id="signinSrEmail"
                  tabindex="2"
                  placeholder="Email address"
                  aria-label="Email address"
                  required
                  data-msg="Please enter a valid email address."
                />
              </div>

              <div class="js-form-message form-group">
                <label class="input-label" for="signinSrPassword" tabindex="0">
                  <span class="d-flex justify-content-between align-items-center">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  id="signinSrPassword"
                  tabindex="3"
                  placeholder="********"
                  aria-label="********"
                  required
                  data-msg="Your password is invalid. Please try again."
                />
              </div>
              <div class="js-form-message form-group">
                <label class="input-label" for="signinSrPassword" tabindex="0">
                  <span class="d-flex justify-content-between align-items-center">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  class="form-control"
                  name="password2"
                  value={password2}
                  onChange={(e) => onChange(e)}
                  id="signinSrPassword2"
                  tabindex="4"
                  placeholder="********"
                  aria-label="********"
                  required
                  data-msg="Your password is invalid. Please try again."
                />
              </div>

              <div class="row align-items-center mb-5">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <span class="font-size-1 text-muted">
                   By signing up you agree to our
                  </span>
                  <Link class="font-size-1 font-weight-bold" to="/privacy-policy">
                    {" "}
                   Privacy Policy.
                  </Link>
                </div>

                <div class="col-sm-6 text-sm-right">
                  <button
                    type="submit"
                    class="btn btn-primary transition-3d-hover"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
