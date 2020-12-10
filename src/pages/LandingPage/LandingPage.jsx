import React from "react";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";
import AboutUs from "../../components/AboutUs/AboutUs";
import ContactUs from "../../components/ContactUs/ContactUs";
import Testimony from "../../components/Testimony/Testimony";
import Feedback from "../../components/Feedback/Feedback";
import Bestsellers from "../../components/Bestsellers/Bestsellers";
// import NavBar from "../../components/NavBar/NavBar"
import "./LandingPage.css"

const LandingPage = (props) => {
  return (
    <div>
      <body id="page-top" className="index">
        <div class="master-wrapper">
          <div className="preloader">
            <div className="preloader-img">
              <span className="loading-animation animate-flicker">
                <img src="assets/img/loading.GIF" />
              </span>
            </div>
          </div>

          {/* <NavBar/> */}

          {/* <!-- Header --> */}
          <LandingPageHeader />

          {/* About Us */}
          <AboutUs />

          {/* Add a makeup quote */}

          <div
            className="light-wrapper light-opaqued"
            data-parallax="scroll"
            data-speed="0.7"
          >
            <div className="section-inner">
              <div className="wow fadeIn">
                <div className="container text-center the-date">
                  <div className="row">
                    <div className="col-xs-12">
                      <p className="change-font">
                        "Where's all your money?" ... "It's on my face."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <ContactUs />

          {/* Testimony page */}
          <Testimony />

          {/* bestsellers */}
          <Bestsellers />

          {/* feedback */}

          <Feedback />
        </div>
      </body>
    </div>
  );
};

export default LandingPage;
