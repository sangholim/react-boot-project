import React, {Component} from 'react';
import Product from './Product';
import '../common/common.css';
import './content.css';


class Content extends Component {
  render() {
    return (
      <div className="contentWrapper">
        {/*imgBanner*/}
        <div className="imgBanner">
          <ul>
            <li>
              <a href="/shop/shopbrand.html?xcode=052&amp;type=Y"><img src={'http://jogunshop.img18.kr/web/upload/main/main_banner_bigsize_3.jpg'} alt="빅사이즈"/></a>
              <a href="/shop/shopbrand.html?xcode=065&amp;type=Y"><img src={'http://jogunshop.img18.kr/web/upload/main/main_banner_jogunmade_3.jpg'} alt="made"/></a>
            </li>
            <li>
              <a href="/shop/shopbrand.html?xcode=068&amp;type=P"><img src={'http://jogunshop.img18.kr/web/upload/main/main_banner_today_3.jpg'} alt="당일배송"/></a>
              <a href="/shop/shopbrand.html?xcode=076&amp;type=P"><img src={'http://jogunshop.img18.kr/web/upload/main/main_banner_sale.jpg'} alt="event"/></a>
            </li>
            <li class="nopd">
              <a href="/shop/shopbrand.html?xcode=081&amp;type=N&amp;mcode=002"><img src={'http://jogunshop.img18.kr/web/upload/main/main_banner_denim.jpg'} alt="데님"/></a>
            </li>
          </ul>
        </div>
        {/*Product*/}
        <Product></Product>
      </div>
    );
  }
}

export default Content;
