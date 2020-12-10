import React from "react";

const Bestsellers = (props) => {
  return (
    <div id="gifts">
      <div className="section-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb100 wow fadeIn">
              <h2 className="section-heading">Bestsellers</h2>
              <hr className="thin-hr" />
              <h3 className="section-subheading secondary-font">
                Some of Our Customer's Favourites.
              </h3>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {/* add makeup images */}
              <ul
                className="owl-carousel-paged testimonial-owl wow fadeIn list-unstyled"
                data-items="3"
                data-items-desktop="[1200,3]"
                data-items-desktop-small="[980,3]"
                data-items-tablet="[768,3]"
                data-items-mobile="[479,2]"
              >
                <li>
                  <img
                    src="assets/img/logo/natasha-eyepalette.png"
                    className="img-responsive"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="assets/img/logo/laura-powder.png"
                    className="img-responsive"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="assets/img/logo/tarte-blush.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="assets/img/logo/colourpop-eyepallette.png"
                    className="img-responsive"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="assets/img/logo/benefit-bronzer.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                </li>
                
                <li>
                  <img
                    src="assets/img/logo/milani-blush.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="assets/img/logo/twoface-mascara.png"
                    className="img-responsive"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bestsellers;
