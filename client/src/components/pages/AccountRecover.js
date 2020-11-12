import React from "react";
import { Link } from "react-router-dom";

const AccountRecover = () => {
  return (
    <div>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-2">
            <form class="js-validate">
              <div class="mb-5 mb-md-7">
                <h1 class="h2">Forgot your password?</h1>
                <p>
                  Enter your email address below and we'll get you back on
                  track.
                </p>
              </div>

              <div class="js-form-message form-group">
                <label class="input-label" for="signinSrEmailExample2">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="signinSrEmailExample2"
                  placeholder="Email address"
                  aria-label="Email address"
                  required
                  data-msg="Please enter a valid email address."
                />
              </div>

              <div class="row align-items-center mb-5">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <Link class="font-size-1 font-weight-bold" to="/login">
                    <i class="fas fa-angle-left fa-sm mr-1"></i> Back to sign in
                  </Link>
                </div>

                <div class="col-sm-6 text-sm-right">
                  <button
                    type="submit"
                    class="btn btn-primary transition-3d-hover"
                  >
                    Request Reset Link
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

export default AccountRecover;
