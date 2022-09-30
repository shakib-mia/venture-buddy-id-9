import React from "react";

const FAQ = () => {
  return (
    <div className="faq container-fluid px-5 pb-5 mb-5">
      <div className="d-flex title justify-content-center">
        Frequently Asked Questions
      </div>

      <div
        class="accordion accordion-flush col-6 mx-auto"
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What are the investment terms?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="d-flex">
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero doloremque facere placeat. Omnis suscipit perferendis
                  est amet et. Ipsam, nisi!
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              How does the Venturebuddy valuation tool work?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="d-flex">
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero doloremque facere placeat. Omnis suscipit perferendis
                  est amet et. Ipsam, nisi!
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Is there a sample report or a free trial available?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="d-flex">
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero doloremque facere placeat. Omnis suscipit perferendis
                  est amet et. Ipsam, nisi!
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingfour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapsefour"
              aria-expanded="false"
              aria-controls="flush-collapsefour"
            >
              What is the authenticity of the tool?
            </button>
          </h2>
          <div
            id="flush-collapsefour"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingfour"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="d-flex">
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero doloremque facere placeat. Omnis suscipit perferendis
                  est amet et. Ipsam, nisi!
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingfive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapsefive"
              aria-expanded="false"
              aria-controls="flush-collapsefive"
            >
              How does Venturebuddy protect my data?
            </button>
          </h2>
          <div
            id="flush-collapsefive"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingfive"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="d-flex">
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero doloremque facere placeat. Omnis suscipit perferendis
                  est amet et. Ipsam, nisi!
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
