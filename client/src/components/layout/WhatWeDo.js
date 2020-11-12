import React from "react";

const WhatWeDo = () => {
  return (
    <div>
      <div id='about' class="container space-2">
        <div class="w-lg-65 text-center mx-auto mb-5 mb-sm-9">
          <h2 class="h1">Overcome Back and Joint Pain like never before.</h2>
          <p>
            We got inspired to start Agavente Health after we went through
            painful lower back pain experience that affected our lives, work and
            happiness. So we built a service we wish we had back then.
          </p>
        </div>

        <div class="row">
          <div class="col-md-4 mb-7">
            <div class="text-center px-lg-3">
              <figure class="max-w-8rem mx-auto mb-4">
                <img
                  class="img-fluid"
                  src="/dist/svg/icons/icon-41.svg"
                  alt="SVG"
                />
              </figure>
              <h3>Unlimited Live Excercise Sessions.</h3>
              <p>
                The best way to stay healthy is to regularly excercise. Get access to 
                unlimited live excercise sessions with our best in field health coaches.
              </p>
            </div>
          </div>

          <div class="col-md-4 mb-7">
            <div class="text-center px-lg-3">
              <figure class="max-w-8rem mx-auto mb-4">
                <img
                  class="img-fluid"
                  src="/dist/svg/icons/icon-18.svg"
                  alt="SVG"
                />
              </figure>
              <h3>Personalized Care. Individual Attention.</h3>
              <p>
                Access the best Physical and Occupational therapists. Have 1 on 1 
                personalized sessions and get the best care you deserve.
              </p>
            </div>
          </div>

          <div class="col-md-4 mb-7">
            <div class="text-center px-lg-3">
              <figure class="max-w-8rem mx-auto mb-4">
                <img
                  class="img-fluid"
                  src="/dist/svg/icons/icon-16.svg"
                  alt="SVG"
                />
              </figure>
              <h3>Get Answers to Your Health Questions.</h3>
              <p>
                You don't have to make an appointment to get answers to your questions.
                Ask anything you want from our doctors, all from your phone.
              </p>
            </div>
          </div>
        </div>

        <img
          class="img-fluid d-none d-md-block w-75 mx-auto mb-7"
          src="/dist/svg/components/three-pointers.svg"
          alt="SVG Arrow"
        />

        <div class="w-md-60 w-lg-50 text-center mx-auto mb-7">
          <p class="text-dark">
            <span class="font-weight-bold">
              Accessing physical therapists and treating back and joint pain
              wasn't this easy before.
            </span>{" "}
          </p>
        </div>

        <div class="w-50 w-md-40 w-lg-30 text-center mx-auto">
          <a href="/register" className="btn btn-primary btn-pill">
           Beta Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
