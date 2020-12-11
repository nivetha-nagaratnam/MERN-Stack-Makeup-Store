import React, { Component } from "react";
import axios from "axios";
import DupeCard from "../../components/DupeCard/DupeCard";

class ViewDupesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:3000/api/dupes/products/" +
          this.props.match.params.id +
          "/dupes/show"
      )
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ViewDupesList");
      });
  }

  render() {
    const products = this.state.products.dupe;
    console.log(typeof products);
    console.log(products);
    let dupeList;

    if (!products) {
      dupeList = "there is no product record!";
    } else {
      dupeList = products.map((product, k) => (
        <DupeCard product={product} key={k} history={this.props.history} />
      ));
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row"></div>

          <div className="list">{dupeList}</div>
        </div>
      </div>
    );
  }
}

export default ViewDupesPage;
