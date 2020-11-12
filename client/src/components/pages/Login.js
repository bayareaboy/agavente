import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <main id="content" role="main">
        <div class="d-flex align-items-center position-relative vh-lg-100">
          <div class="container">
            <div class="row no-gutters">
              <div class="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-top-3 space-lg-0">
                <form class="js-validate" onSubmit={(e) => onSubmit(e)}>
                  <div class="mb-5 mb-md-7">
                    <h1 class="h2">Welcome back</h1>
                    <p>Login to manage your account.</p>
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
                      tabindex="1"
                      placeholder="Email address"
                      aria-label="Email address"
                      required
                      data-msg="Please enter a valid email address."
                    />
                  </div>

                  <div class="js-form-message form-group">
                    <label
                      class="input-label"
                      for="signinSrPassword"
                      tabindex="0"
                    >
                      <span class="d-flex justify-content-between align-items-center">
                        Password
                        <Link
                          class="link-underline text-capitalize font-weight-normal"
                          to="/account-recover"
                        >
                          Forgot Password?
                        </Link>
                      </span>
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      id="signinSrPassword"
                      tabindex="2"
                      placeholder="********"
                      aria-label="********"
                      required
                      data-msg="Your password is invalid. Please try again."
                    />
                  </div>

                  <div class="row align-items-center mb-5">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <span class="font-size-1 text-muted">
                        Don't have an account?
                      </span>
                      <Link class="font-size-1 font-weight-bold" to="/register">
                        {" "}
                        Signup
                      </Link>
                    </div>

                    <div class="col-sm-6 text-sm-right">
                      <button
                        type="submit"
                        class="btn btn-primary transition-3d-hover"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
