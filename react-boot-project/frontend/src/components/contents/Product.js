import React, {Component} from 'react';
import ItemCont from './ItemCont';
import '../common/common.css';
import './content.css';


class Product extends Component {
  render() {
    return (
      <div className="product-wrap">
        <div className="item-wrap">
          <div className="cateTit">
            <h3>BEST</h3>
          </div>
          <ItemCont></ItemCont>
        </div>
      </div>
    );
  }
}

export default Product;
