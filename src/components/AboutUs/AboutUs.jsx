import React from 'react';
import "./AboutUs.css"

const AboutUs = (props) => {
    return (
      <div id="welcome" >
        <div >
          <div >
            <div >
              <div>
                <div className='center'>
                <h2 >A little bit about us!</h2>
                <hr className="thin-hr" />
                <h3 >
                  Hear about our journey
                </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className='test10'>
              <div className="col-md-5 col-md-offset-1 wow fadeIn">
                <img src="assets/img/makeup-store-display-896x686.jpg" className="img-responsive mb30" />
                <p className="text-center">
                  This store was inspired by Nivetha's spending habits!{" "}
                </p>
              </div>

              <div className="col-md-5 wow fadeIn">
                <div className="make-image-bigger">
                <img src="assets/img/Clinique-store-by-Mapos-Hong-Kong09.jpg" className=" make-image-bigger mb30" />
                </div>
                <p className="text-center2">
                  Nivetha's goal was to create a space where women and men can
                  have access to high quality products at a fraction of the
                  price!
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );

} 

export default AboutUs;