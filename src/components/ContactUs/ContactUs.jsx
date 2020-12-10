import React from "react";
import "./ContactUs.css"
import { Facebook } from 'react-feather';
import { Twitter } from 'react-feather';
import { Instagram } from 'react-feather';

const ContactUs = (props) => {
  return (
    <div id="wedding-date" className="light-wrapper">
      <div className="section-inner">
        <div className="wow fadeIn">
          <div className="container text-center">
            <div className="row">
              <div className="col-xs-12" role="tabpanel">
                <div className="row">
                  <div className="col-xs-4 col-sm-12">
                    {/* <!-- Nav tabs --> */}
                    <ul className="nav icon-tabs ul-fix " id="nav-tabs" role="tablist">
                      <li role="presentation" className="active">
                        <a
                          href="#when"
                          aria-controls="daksh"
                          role="tab"
                          data-toggle="tab"
                        >
                          <span className="tabtitle heading-font">
                            Contact Us
                          </span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#where"
                          aria-controls="dustin"
                          role="tab"
                          data-toggle="tab"
                        >
                          <span className="tabtitle heading-font">
                            Follow Us On Social Media
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-8 col-sm-12 mt60">
                    {/* <!-- Tab panes --> */}
                    <div className="tab-content" id="tabs-collapse">
                      <div
                        role="tabpanel"
                        className="tab-pane fade in active"
                        id="when"
                      >
                        <div className="tab-inner">
                          <p className="lead secondary-font">416-mak-eup!</p>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="where">
                        <div className="tab-inner">
                          <div className="row">
                            <div className="ul-fix2 ">
                              <a className="lead"><Facebook className="fa-facebook " color="white" size={52}/> </a>
                              <a><Twitter className="fa-twitter " size={52}/></a>
                              <a><Instagram className="fa-instagram " size={52}/></a>
                            </div>
                            <div className="col-sm-5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default ContactUs;