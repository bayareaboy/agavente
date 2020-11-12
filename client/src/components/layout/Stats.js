import React from "react";

const Stats = () => {
  return (
    <div>
      <div class="container space-2">
        <div class="row justify-content-lg-between">
          <div class="col-lg-5 order-lg-2 pl-lg-0">
            <div
              class="bg-img-hero h-100 min-h-450rem rounded"
              style={{
                backgroundImage: "url(/dist/img/900x900/img19.jpg)",
              }}
            ></div>
          </div>

          <div class="col-lg-6 order-lg-1">
            <div class="pt-8 pb-lg-8">
              <div class="mb-5 mb-md-7">
                <h2 class="mb-3">
                  Working to make Musculoskeletal Treatment affordable,
                  convenient and accessible to everyone.
                </h2>
                <p>
                  1 in 2 Americans suffer from musculoskeletal pain and costs
                  them $213 billion in annual costs for treatment. This not only
                  limits the mobility of patients but also keeps them out of
                  work, causes mental problems and stops them from experiencing
                  life to the fullest.
                </p>
              </div>
              <a href="/register" className="btn btn-primary btn-pill">
                Beta Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
