import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import './CreateProduct.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      rating: "",
      description: "",
      brand: "",
      colour: "",
      //   review: '',
      //   img: '',
      //   imgs: '',
      category: "",
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: this.state.name,
      price: this.state.price,
      rating: this.state.rating,
      description: this.state.description,
      brand: this.state.brand,
      colour: this.state.colour,
      //   review: this.state.name,
      //   img: this.state.name,
      //   imgs: this.state.name,
      category: this.state.category,
    };

    axios
      .post("http://localhost:3000/api/products", data)
      .then((res) => {
        this.setState({
          name: "",
          price: "",
          rating: "",
          description: "",
          brand: "",
          colour: "",
          //   review: '',
          //   img: '',
          //   imgs: '',
          category: "",
        });
        //redirect
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateProduct!");
      });
  };

  render() {
    return (
      // <div className="body">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-8 m-auto">
      //         <br />
      //         <Link to="/" className="btn btn-outline-warning float-left">
      //             Return to Home Page
      //         </Link>
      //       </div>
      //       <div className="col-md-8 m-auto">
      //         <h1 className="display-4 text-center">Add Product</h1>

      //         <form noValidate onSubmit={this.onSubmit}>
      //           <div className="form-group">
      //             <input
      //               type="text"
      //               placeholder="Enter Name of Product"
      //               name="name"
      //               className="form-control"
      //               value={this.state.name}
      //               onChange={this.onChange}
      //             />
      //           </div>
      //           <br />
      //           <div className="form-group">
      //             <input
      //               type="text"
      //               placeholder="Enter Brand of Product"
      //               name="brand"
      //               className="form-control"
      //               value={this.state.brand}
      //               onChange={this.onChange}
      //             />
      //           </div>
      //           <br />
      //           <div className="form-group">
      //             <input
      //               type="text"
      //               placeholder="Enter Shade of Product"
      //               name="colour"
      //               className="form-control"
      //               value={this.state.colour}
      //               onChange={this.onChange}
      //             />
      //           </div>
      //           <br />
      //           <div className="form-group">
      //             <input
      //               type="text"
      //               placeholder="Enter Price of Product"
      //               name="price"
      //               className="form-control"
      //               value={this.state.price}
      //               onChange={this.onChange}
      //             />
      //           </div>
      //           <br />
      //           <div className="form-group">
      //             <input
      //               type="text"
      //               placeholder="Enter Product Description"
      //               name="description"
      //               className="form-control"
      //               value={this.state.description}
      //               onChange={this.onChange}
      //             />
      //           </div>
      //           <br />
      //           <div className="form-group">
      //             <label>
      //               Enter Product Category:
      //               <select
      //                 name="category"
      //                 value={this.state.category}
      //                 onChange={this.onChange}
      //               >
      //                 <option value="face">Face</option>
      //                 <option value="lips">Lips</option>
      //                 <option value="cheeks">Cheeks</option>
      //                 <option value="eyes">Eyes</option>
      //               </select>
      //             </label>
      //           </div>
      //           <br />
      //           <div className="form-group">
      //             <label>
      //               Enter Product Ratings:
      //               <select name="rating" value={this.state.rating} onChange={this.onChange}>
      //                 <option value="☆☆☆☆☆">☆☆☆☆☆</option>
      //                 <option value="★☆☆☆☆">★☆☆☆☆</option>
      //                 <option value="★★☆☆☆">★★☆☆☆</option>
      //                 <option value="★★★☆☆">★★★☆☆</option>
      //                 <option value="★★★★☆">★★★★☆</option>
      //                 <option value="★★★★★">★★★★★</option>
      //               </select>
      //             </label>
      //           </div>
      //           <br />
      //           <input
      //             type="submit"
      //             className="btn btn-outline-warning btn-block mt-4"
      //           />
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>

 <div>
   
 <Link to="/" className="btn btn-dark">
        Return to Home Page
        </Link>

<MDBContainer>
      <MDBRow className="body">
        <MDBCol md="12">
          <MDBCard className="body_max ">
            <MDBCardBody>
              <form noValidate onSubmit={this.onSubmit}>
                <p className="h4 text-center mb-4">Add Product</p>
                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                  Product Name
                </label>
                <input type="text" placeholder="Enter Name of Product" name="name" className="form-control"
                  value={this.state.name} onChange={this.onChange} />
                <br />
                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                  Brand
                </label>
                <input type="text" placeholder="Enter Brand of Product" name="brand" className="form-control"
                  value={this.state.brand} onChange={this.onChange} />
                <br />
                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                  Shade
                </label>
                <input type="text" placeholder="Enter Shade of Product" name="colour" className="form-control"
                  value={this.state.colour} onChange={this.onChange} />
                <br />
                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                  Price
                </label>
                <input type="text" name="price" className="form-control" value={this.state.price} onChange={this.onChange} />
                <br />
                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                  Product Description
                </label>
                <input type="text" name="description" className="form-control" value={this.state.description}
                  onChange={this.onChange} />
                <br />
                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                  Product Category
                </label>
                <select name="category" value={this.state.category} onChange={this.onChange}>
                  <option value="" disabled selected>Product Category</option>
                  <option value="face">Face</option>
                  <option value="lips">Lips</option>
                  <option value="cheeks">Cheeks</option>
                  <option value="eyes">Eyes</option>
                </select>
                <br />
                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                  Ratings
                </label>
                <select name="rating" value={this.state.rating} onChange={this.onChange}>
                  <option value="" disabled selected>Ratings</option>
                  <option value="☆☆☆☆☆">☆☆☆☆☆</option>
                  <option value="★☆☆☆☆">★☆☆☆☆</option>
                  <option value="★★☆☆☆">★★☆☆☆</option>
                  <option value="★★★☆☆">★★★☆☆</option>
                  <option value="★★★★☆">★★★★☆</option>
                  <option value="★★★★★">★★★★★</option>
                </select>
                <div className="text-center mt-4">
                  <MDBBtn color="dark" type="submit">Add Product</MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
 </div>
    );
  }
}


export default CreateProduct;
