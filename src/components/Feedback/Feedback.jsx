import React from "react";

const Feedback = (props) => {
  return (
    <footer id="rsvp" className="white-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h4 className="footer-goodbye">
              We would love to get some feedback on our website!
            </h4>
          </div>

          <hr className="col-sm-12 thin-hr" />

          <div className="col-sm-10 col-sm-offset-1 section-inner">
            <div id="message"></div>
            <form
              method="post"
              action=""
              id="contactform"
              className="main-contact-form wow fadeIn"
              data-wow-delay="0.2s"
            >
              <input
                type="text"
                className="form-control col-md-6"
                name="name"
                placeholder="Your Name *"
                id="name"
                required
                data-validation-required-message="Please enter your name."
              />
              <input
                type="text"
                className="form-control col-md-6"
                name="email"
                placeholder="Your Email *"
                id="email"
                required
                data-validation-required-message="Please enter your email address."
              />
              <textarea
                name="comments"
                className="form-control"
                id="comments"
                placeholder="Your Message *"
                required
                data-validation-required-message="Please enter a message."
              ></textarea>
              <input
                class="btn btn-dark mt30"
                type="submit"
                name="submit"
                value="Submit"
              />
            </form>
          </div>

          <div className="col-md-12 text-center wow fadeIn">
            <span className="copyright">Created by Nivetha Nagaratnam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Feedback;
