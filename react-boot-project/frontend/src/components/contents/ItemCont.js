import React, {Component} from 'react';
import ItemList from './ItemList';
import '../common/common.css';
import './content.css';


class ItemCont extends Component {
  render() {
    return (
      <div className="item-cont">
        <ItemList></ItemList>
      </div>

    );
  }
}

export default ItemCont;
