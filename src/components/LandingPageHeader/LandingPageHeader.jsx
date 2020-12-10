import React from 'react';
import "./LandingPageHeader.css"

const LandingPageHeader = (props) => {
    return (
      <div>
        <header id="headerwrap" className="backstretched fullheight">
          <canvas id="fettiwrap"></canvas>
          <div className="container vertical-center">
            <div className="intro-text vertical-center text-center smoothie">
              <div className="intro-heading wow fadeIn heading-font">
                <div className="center-font">
                <span className="secondary-font">Welcome to</span> Our Little
                Secret
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );

} 

export default LandingPageHeader;