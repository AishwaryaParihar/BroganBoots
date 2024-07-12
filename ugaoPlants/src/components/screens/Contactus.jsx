import React from "react";
import Map from "./Map";

const Contactus = () => {
  return (
    <div>
      <div class="section section-padding pt-5">
      <div className="container pt-5">
      {/* Contact Information Start */}
      <div className="row mt-5">
        <h4 className="text-center text-decoration-underline">Cont<span className="text-primary">act</span> Us</h4>
        <div className="col-lg-5 col-md-5 col-12 mt-4">
          {/* Section Title Start */}
          <div className="mb-4">
            <h2 className="h3">K<span className="text-primary">ee</span>p in <span className="text-primary">Tou</span>ch with us</h2>
            <p>
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days. We will be happy
              to answer your questions.
            </p>
          </div>
          {/* Section Title End */}

          <div className="ps-3">
          <div className="mb-4">
            <h4 className="h6">ADDRESS</h4>
            <span className="d-block">
              <i className="fa fa-map-marker" aria-hidden="true"></i> 63-B,
              Pocket-B, DDA Flats, Hari Nagar, Near Tilak Nagar Metro
              Station, New Delhi – 110064
            </span>
          </div>

          <div className="mb-4">
            <h4 className="h6">CONTACT</h4>
            <span className="d-block">
              <i className="fa fa-phone-square" aria-hidden="true"></i> Mobile: +91 76111 89837
            </span>
          </div>

          <div>
            <h4 className="h6">EMAIL</h4>
            <span className="d-block">
              <i className="fa fa-envelope " aria-hidden="true"></i>{" "} 
              <a href="mailto:broganboots19@gmail.com" className="nolink">broganboots19@gmail.com</a>
            </span>
          </div>
          </div>
        </div>

        {/* Contact Form Section Start */}
        <div className="col-lg-7 col-12 mx-auto mb-4 border rounded-3 mt-3 p-4">
          <div className="mb-4">
            <h2 className="h3">Se<span className="text-primary">n</span>d a <span className="text-primary">Mess</span>age</h2>
          </div>

          <div>
            <form action="#" method="post">
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name *"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6 ">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile Number *"
                    name="mobile"
                    required
                  />
                </div>
                <div className="form-group col-md-12 pt-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email *"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group col-12 py-3">
                  <textarea
                    name="msg"
                    className="form-control"
                    placeholder="Message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="form-group col-12 text-center">
                  <button type="submit" name="sub_us" className="btn btn-dark">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <p className="form-message"></p>
          </div>
        </div>
        {/* Contact Form Section End */}
      </div>
    </div>
      </div>
      <Map/>
    </div>
  );
};

export default Contactus;
