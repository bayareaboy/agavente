import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="gradient-x-overlay-sm-indigo overflow-hidden">
        <div class="container space-top-2 space-bottom-1">
          <div class="row justify-content-lg-between align-items-lg-center text-center text-lg-left">
            <div class="col-lg-5 mb-3 mb-lg-0">
              <h2 class="text-indigo">Do you have questions?</h2>
            </div>
            <div class="col-lg-5 text-lg-right">
              <a
                class="btn btn-primary transition-3d-hover btn-pill"
                href="mailto:hello@agavente.com"
              >
                Contact Us
              </a>
            </div>
          </div>

          <hr class="my-9" />

          <div class="row">
          {
            // <div class="col-6 col-lg-3 order-lg-2 mb-7 mb-lg-0">
            //   <h5>Company</h5>

            //   <ul class="nav nav-sm nav-x-0 flex-column">
            //     <li class="nav-item">
            //       <Link class="nav-link" to="/about">
            //         About
            //       </Link>
            //     </li>
            //     <li class="nav-item">
            //       <Link class="nav-link" to="/business">
            //         Business Solutions
            //       </Link>
            //     </li>
            //     <li class="nav-item">
            //       <Link class="nav-link" to="/careers">
            //         Careers{" "}
            //         <span class="badge badge-success badge-pill ml-1">
            //           We're hiring
            //         </span>
            //       </Link>
            //     </li>
            //     <li class="nav-item">
            //       <Link class="nav-link" to="/blog">
            //         Blog
            //       </Link>
            //     </li>
            //   </ul>
            // </div>
          }
            <div class="col-6 col-lg-3 order-lg-3 mb-7 mb-lg-0">
              <h5>Legal</h5>

              <ul class="nav nav-sm nav-x-0 flex-column">
                <li class="nav-item">
                  <a class="nav-link" href="mailto:hello@agavente.com">
                    Contact Us
                  </a>
                </li>
                {
                // <li class="nav-item">
                //   <Link class="nav-link" to="/terms-and-conditions">
                //     Terms & Conditions
                //   </Link>
                // </li>
              }
                <li class="nav-item">
                  <Link class="nav-link" to="/privacy-policy">
                    Privacy & Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div class="col-sm-6 col-lg-3 order-lg-1 mb-3 mb-lg-0">
              <a
                class="d-inline-flex align-items-center"
                href="#"
                aria-label="Front"
              >
                <img
                  class="brand"
                  src="/dist/img/logo/logo-blue.png"
                  alt="Logo"
                />
              </a>
            </div>

            <div class="col-sm-6 col-lg-3 order-lg-4 align-self-center align-self-lg-start">
              <p class="small">© Agavente LLC. 2020.</p>
            </div>
          </div>
        </div>

        <figure class="w-35 position-absolute top-0 right-0 z-index-n1 mt-n11 mr-n11">
          <img
            class="img-fluid"
            src="/dist/svg/components/half-circle-1.svg"
            alt="Image Description"
          />
        </figure>

        <figure class="w-25 position-absolute bottom-0 left-0 z-index-n1 mb-n11 ml-n11">
          <img
            class="img-fluid"
            src="/dist/svg/components/half-circle-2.svg"
            alt="Image Description"
          />
        </figure>
      </footer>
    </div>
  );
};

export default Footer;
