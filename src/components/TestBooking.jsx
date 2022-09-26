import React from "react";

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />

const TestBooking = () => {
  return (
    <>
      <div class="container" style={{ marginTop: "8%" }}>
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-8 border">
            <div
              class="d-flex justify-content-start"
              style={{ backgroundColor: "#02457A" }}
            >
              <picture>
                <img
                  src={require("../logo.png")}
                  alt="logo"
                  class="img-thumbnail"
                  style={{ backgroundColor: "#02457A", width: "15%" }}
                />
              </picture>
            </div>
            <div class="col">NAME:</div>
            <div class="d-flex justify-content-start">
              <div class="col-4"> FROM:</div>
              <div class="col-4"> TO:</div>
            </div>
            <div class="d-flex justify-content-start">
              <div class="col-3"> FLIGHT:</div>
              <div class="col-3"> DATE:</div>
              <div class="col-3"> SEAT:</div>
            </div>
            <div class="d-flex justify-content-start">
              <div class="col-4"> GATE:</div>
              <div class="col-4"> BORADING TIME:</div>
            </div>
          </div>
          <div class="col-sm-3 col-md-6 col-lg-4 border">
            <div class="col" style={{ width: "50%"}}><i class="bi bi-patch-check-fill"></i> สถานะ : ชำระแล้ว</div>
            <div class="col">NAME:</div>
            <div class="col">FROM:</div>
            <div class="col">TO:</div>
            <div class="d-flex justify-content-start">
              <div class="col-2"> DATE:</div>
              <div class="col-2"> TIME:</div>
            </div>
            <div class="d-flex justify-content-start">
              <div class="col-2"> SEAT:</div>
              <div class="col-2"> GATE:</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestBooking;
