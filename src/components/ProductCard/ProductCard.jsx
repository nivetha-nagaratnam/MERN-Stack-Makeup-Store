import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductCard.css';
import katvond_liner from "../../images/katvond-eyeliner.png";
import better_than_s from "../../images/twoface-mascara.png";
import flyliner from "../../images/fenty-eyeliner.png";
import laura_powder from "../../images/laura-powder.png";
import nars_concealer from "../../images/nars-concealor.png";
import fenty_highlighter from "../../images/fenty-highlighter.jpeg";
import hoola_bronzer from "../../images/benefit- bronzer.jpeg";
import tarte_blush from "../../images/tarte- blush.jpeg";
import kylie_gloss from "../../images/kylie- lip gloss.jpeg";
import fenty_gloss from "../../images/fenty-lip gloss.jpeg";
import mac_lipstick from "../../images/mac- lipstick.jpeg";

class ProductCard extends Component {

  onDeleteClick (id) {
    axios
      .delete('http://localhost:3000/api/products/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error from ProductDetailsPage_deleteClick");
      })
  };

  render() {

    let image = "";

    if (this.props.product.name === "Tattoo Eyeliner") {
      image = <img className= 'img' src={katvond_liner} alt="liner" />;
    } else if (this.props.product.name === "Better Than Sex Mascara") {
      image = <img className= 'img' src={better_than_s} alt="mascaras" />;
    } else if (
      this.props.product.name === "Flyliner Longwear Liquid Eyeliner"
    ) {
      image = <img className= 'img' src={flyliner} alt="liner" />;
    } else if (this.props.product.name === "Translucent Loose Setting Powder") {
      image = <img className= 'img' src={laura_powder} alt="powder" />;
    } else if (this.props.product.name === "Radiant Creamy Concealer") {
      image = <img className= 'img' src={nars_concealer} alt="concealer" />;
    } else if (this.props.product.name === "Killawatt Freestyle Highlighter") {
      image = <img className= 'img' src={fenty_highlighter} alt="highlighter" />;
    } else if (this.props.product.name === "Hoola Matte Bronzer") {
      image = <img className= 'img' src={hoola_bronzer} alt="bronzer" />;
    } else if (this.props.product.name === "Amazonian Clay 12-Hour Blush") {
      image = <img className= 'img' src={tarte_blush} alt="blush" />;
    } else if (this.props.product.name === "High Gloss") {
      image = <img className= 'img' src={kylie_gloss} alt="liner" />;
    } else if (
      this.props.product.name === "Gloss Bomb Universal Lip Luminizer"
    ) {
      image = <img className= 'img' src={fenty_gloss} alt="lipgloss" />;
    } else if (this.props.product === "Matte Lipstick") {
      image = <img className= 'img' src={mac_lipstick} alt="lipstick" />;
    } else {
      image = "";
    }

    const  product  = this.props.product;
    return (
      // <div className='grid'>
      //   <div className="row row-cols-1 row-cols-md-3">
      //     <h2>{product.name}</h2>
      //     <p>${product.price}</p>
      //     <p>{product.rating}</p>
      //     <div className="row">
      //       <div className="col-md-6">
      //         <Link to={`/product-detail/${product._id}`}>
      //           <button
      //             type="button"
      //             className="btn btn-outline-danger btn-lg btn-block"
      //           >
      //             <p>Details</p>
      //           </button>
      //         </Link>
      //         <br />
      //         <button
      //           type="button"
      //           className="btn btn-outline-danger btn-lg btn-block"
      //           onClick={this.onDeleteClick.bind(this, product._id)}
      //         >      Delete Product
      //         </button>
      //         <br />
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div className="grid">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="row">
            <div className="col-mb-4">
              <div className="card-deck">
                <div classNameName="view overlay">
                  {image}
                  <div classNameName="card-body">
                    <p className="card-text">{product.name}</p>
                    <p className="card-text">${product.price}</p>
                    <p className="card-text">{product.rating}</p>
                  </div>
                  <div className="card-footer">
                    <Link to={`/product-detail/${product._id}`}>
                      <button type="button" className="btn btn-dark">
                        <p>Details</p>
                      </button>
                    </Link>
                    <br />
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={this.onDeleteClick.bind(this, product._id)}
                    >
                      {" "}
                      Delete Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
