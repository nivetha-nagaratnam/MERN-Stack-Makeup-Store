import React from "react";

const Testimony = (props) => {
  return (
    <div
      className="dark-wrapper opaqued parallax"
      data-parallax="scroll"
      data-image-src="assets/img/bg/bg5.jpg"
      data-speed="0.7"
    >
      <div className="section-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb100 wow fadeIn">
              <h2 className="section-heading">What People Think of Us</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ul
                className="owl-carousel-paged testimonial-owl wow fadeIn list-unstyled"
                data-items="1"
                data-items-desktop="[1200,1]"
                data-items-desktop-small="[980,1]"
                data-items-tablet="[768,1]"
                data-items-mobile="[479,1]"
              >
                <li>
                  <div className="row">
                    <div className="col-xs-10 col-xs-offset-1 item-caption">
                      <div className="row">
                        <div className="col-xs-3">
                          <div>
                            <img
                              src="assets/img/team/small2.jpg"
                              className="img-responsive testimonial-author"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-xs-9">
                          <p className="lead">
                            {" "}
                            This website is my go to place to buy makeup
                            products.
                          </p>
                          <p className="lead secondary-font">Charles Davies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-xs-10 col-xs-offset-1 item-caption">
                      <div className="row">
                        <div className="col-xs-3">
                          <div>
                            <img
                              src="assets/img/team/small1.jpg"
                              className="img-responsive testimonial-author"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-xs-9">
                          <p className="lead">
                            Sephora who? I stopped shopping there after I
                            discovered Our Little Secret.{" "}
                          </p>
                          <p className="lead secondary-font">Charles Davies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
