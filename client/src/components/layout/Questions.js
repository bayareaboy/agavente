import React from "react";

const Questions = () => {
  return (
    <div>
      <div class="container">
        <div class="w-lg-85 mx-lg-auto">
          <div class="card overflow-hidden p-5">
            <div class="row justify-content-md-start align-items-md-center text-center text-md-left">
              <div class="col-md-8 col-lg-5 offset-lg-3 mb-3 mb-md-0">
                <h3 class="h4 text-indigo mb-0">Do you have questions?</h3>
              </div>

              <div class="col-md-4 text-md-right">
                <a class="btn btn-primary transition-3d-hover" href="#">
                  Contact Us
                </a>
              </div>
            </div>

            <figure class="w-35 position-absolute top-0 left-0 mt-n11 ml-n11">
              <img
                class="img-fluid"
                src="/dist/svg/components/half-circle-2.svg"
                alt="Image Description"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
