import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div class="gradient-x-overlay-sm-indigo position-relative overflow-hidden">
        <div class="container space-top-3 space-top-lg-4 space-bottom-2">
          <div class="w-lg-60 text-center mx-lg-auto">
            <div class="mb-5">
              <h1 class="display-4 mb-3">
              Treat Back and Joint Pain Effectively.
               
              </h1>
              <p class="lead">
              Minimizing cost of accessing high quality care for people with chronic pain.             
              </p>
            </div>

            <a class="btn btn-primary transition-3d-hover" href="/register">
              Sign up for Beta
            </a>
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
      </div>
    </div>
  );
};

export default Hero;
