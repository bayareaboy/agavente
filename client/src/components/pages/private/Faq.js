import React from "react";

const Faq = () => {
  return (
    <div>
      <div class="container space-1">
        <h2>Basics</h2>

        <div id="basicsAccordion">
          <div class="card shadow-none mb-3">
            <div class="card-header card-collapse" id="basicsHeadingOne">
              <a
                class="btn btn-link btn-block d-flex justify-content-between card-btn collapsed bg-white px-0"
                href="javascript:;"
                role="button"
                data-toggle="collapse"
                data-target="#basicsCollapseOne"
                aria-expanded="false"
                aria-controls="basicsCollapseOne"
              >
                Do you have any built-in caching?
                <span class="card-btn-toggle">
                  <span class="card-btn-toggle-default">+</span>
                  <span class="card-btn-toggle-active">−</span>
                </span>
              </a>
            </div>
            <div
              id="basicsCollapseOne"
              class="collapse"
              aria-labelledby="basicsHeadingOne"
              data-parent="#basicsAccordion"
            >
              <div class="card-body px-0">
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod.
                </p>
                <p>
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                  single-origin coffee nulla assumenda shoreditch et. Nihil anim
                  keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident.
                </p>
              </div>
            </div>
          </div>

          <div class="card shadow-none mb-3">
            <div class="card-header card-collapse" id="basicsHeadingTwo">
              <a
                class="btn btn-link btn-block d-flex justify-content-between card-btn collapsed bg-white px-0"
                href="javascript:;"
                role="button"
                data-toggle="collapse"
                data-target="#basicsCollapseTwo"
                aria-expanded="false"
                aria-controls="basicsCollapseTwo"
              >
                Can I add/upgrade my plan at any time?
                <span class="card-btn-toggle">
                  <span class="card-btn-toggle-default">+</span>
                  <span class="card-btn-toggle-active">−</span>
                </span>
              </a>
            </div>
            <div
              id="basicsCollapseTwo"
              class="collapse"
              aria-labelledby="basicsHeadingTwo"
              data-parent="#basicsAccordion"
            >
              <div class="card-body px-0">
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod.
                </p>
                <p>
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                  single-origin coffee nulla assumenda shoreditch et. Nihil anim
                  keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident.
                </p>
              </div>
            </div>
          </div>

          <div class="card shadow-none mb-3">
            <div class="card-header card-collapse" id="basicsHeadingThree">
              <a
                class="btn btn-link btn-block d-flex justify-content-between card-btn collapsed bg-white px-0"
                href="javascript:;"
                role="button"
                data-toggle="collapse"
                data-target="#basicsCollapseThree"
                aria-expanded="false"
                aria-controls="basicsCollapseThree"
              >
                What access comes with my hosting plan?
                <span class="card-btn-toggle">
                  <span class="card-btn-toggle-default">+</span>
                  <span class="card-btn-toggle-active">−</span>
                </span>
              </a>
            </div>
            <div
              id="basicsCollapseThree"
              class="collapse"
              aria-labelledby="basicsHeadingThree"
              data-parent="#basicsAccordion"
            >
              <div class="card-body px-0">
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod.
                </p>
                <p>
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                  single-origin coffee nulla assumenda shoreditch et. Nihil anim
                  keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident.
                </p>
              </div>
            </div>
          </div>

          <div class="card shadow-none mb-3">
            <div class="card-header card-collapse" id="basicsHeadingFour">
              <a
                class="btn btn-link btn-block d-flex justify-content-between card-btn collapsed bg-white px-0"
                href="javascript:;"
                role="button"
                data-toggle="collapse"
                data-target="#basicsCollapseFour"
                aria-expanded="false"
                aria-controls="basicsCollapseFour"
              >
                How do I change my password?
                <span class="card-btn-toggle">
                  <span class="card-btn-toggle-default">+</span>
                  <span class="card-btn-toggle-active">−</span>
                </span>
              </a>
            </div>
            <div
              id="basicsCollapseFour"
              class="collapse"
              aria-labelledby="basicsHeadingFour"
              data-parent="#basicsAccordion"
            >
              <div class="card-body px-0">
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod.
                </p>
                <p>
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                  single-origin coffee nulla assumenda shoreditch et. Nihil anim
                  keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
