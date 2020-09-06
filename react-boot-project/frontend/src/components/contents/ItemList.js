import React, {Component} from 'react';

import favorite_order from './img/favorite_order.PNG';
import '../common/common.css';
import './content.css';


class ItemList extends Component {
  render() {
    return (
      <dl className="item-list">
        <dt className="thumb">
          <a href="/shop/shopdetail.html?branduid=26152&amp;xcode=037&amp;mcode=010&amp;scode=&amp;special=1&amp;GfDT=aW53UQ%3D%3D"><img className="MS_prod_img_l" src={'http://cdn2-aka.makeshop.co.kr/shopimages/jogunshop/037010000659.gif?1588057860'}/></a>
        </dt>
        <dd className="prd-info">
          <ul>
            <li className="prd-color">
              <span style={{background: '#c9969a'}} title=""></span>
              <span style={{background: '#b5ced4'}} title=""></span>
              <span style={{background: '#eee5d9'}} title=""></span>
              <span style={{background: '#d2cfd6'}} title=""></span>
              <span style={{background: '#fefefe'}} title=""></span>
              <span style={{background: '#000000'}} title=""></span>
            </li>
            <li className="prd-name">
              <a href="/shop/shopdetail.html?branduid=26152&amp;xcode=037&amp;mcode=010&amp;scode=&amp;special=1&amp;GfDT=aW53UQ%3D%3D">시트니 헨리넥 반팔 티셔츠<br />
              <font className="font1">M~XL(95~110)</font><br />
              </a>
            </li>
            <li className="prd-price">
              <div className="left">
                <span className="price">24,000</span>
              </div>
              <div className="right crema-product-reviews-count" data-product-code="26152" data-format="(리뷰 : {{{count}}})">(리뷰 : 519)</div>
            </li>
            <li className="prd-ico">
              {/*
              <img src={'/images/trans.gif'}/>
              */}
              <span className="MK-product-icons">
              {/*
              <img src={'/shopimages/jogunshop/prod_icons/46?1536891462'} className="MK-product-icon-2"/>
              */}
              <img src={favorite_order} className="MK-product-icon-2"/>
              </span>
            </li>
            <li className="prd-preview">
              <a href="#" style={{cursor: 'pointer'}} onclick="javascript:mk_get_option_state('26152', 1, event);return false;" className="opt_preview_btn">
                <img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/preview_icon.png'} alt="옵션별재고현황"/>
              </a>
              <a href="javascript:viewdetail('037010000659', '1', '');">
                <img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/pd_cart_icon.png'} alt="장바구니"/>
              </a>
            </li>
          </ul>
        </dd>
      </dl>
    );
  }
}

export default ItemList;
