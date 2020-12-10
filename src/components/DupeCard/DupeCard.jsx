import React, { Component } from 'react';
import './DupeCard.css';
import coty_powder from "../../images/coty-powder.png";
import { Link } from 'react-router-dom';

class DupeCard extends Component {

//   onDeleteClick (id) {
//     axios
//       .delete('http://localhost:3000/api/products/'+id)
//       .then(res => {
//         this.props.history.push("/");
//       })
//       .catch(err => {
//         console.log("Error from ProductDetailsPage_deleteClick");
//       })
//   };

  render() {

    let image = "";

    if (this.props.product.name = "Coty Airspun Loose Face Powder") {
      image = <img className= 'img' src={coty_powder} alt="liner" />;
    }else{
      image = ""
    }

    let link = "";
    if (this.props.product.name = "Coty Airspun Loose Face Powder") {
      link = <Link to={'/product-detail/5f9b814becd91a190b630a1b'}>
      <button type="button" className="btn btn-dark button1">
        <p>Check Similar Product</p>
      </button>
    </Link>
    }else{
      link = ""
    }

    console.log(this.props.product.name)

    const  product  = this.props.product;
    return (
      // <div className="card-container">
      //   <div className="desc">
      //     <h2>{product.name}</h2>
      //     <p>${product.price}</p>
      //     <div className="row">
      //       <div className="col-md-6">
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
                <div className="view overlay">
                {image}
                  <div className="card-body1">
                    <p className="card-text">{product.name}</p>
                    <p className="card-text">${product.price}</p>
                  </div>
                  <div className="card-footer">
                  {link}
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

export default DupeCard;
