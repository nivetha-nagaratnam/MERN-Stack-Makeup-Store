import React, { Component } from 'react';
import './DupeCard.css';

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
                <div classNameName="view overlay">
                  <div classNameName="card-body">
                    <p className="card-text">{product.name}</p>
                    <p className="card-text">${product.price}</p>
                    <p className="card-text">{product.rating}</p>
                  </div>
                  <div className="card-footer">
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
