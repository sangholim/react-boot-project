import React, { Component}  from 'react';
import './header.css';

class HeaderTop extends Component {

  render() {
    return (
      <div className="header_top_wrap">
        <div className="header_top">
          <div className="left">
            <ul>
              <li><a>+BOOKMARK</a></li>
              <li><a href="/shop/faq.html">CS CENTER</a></li>
              <li><a href="/board/board.html?code=jogunshop_image2">EVENT</a></li>
              <li><a href="/board/board.html?code=jogunshop_board21">REVIEW</a></li>
              <li><a href="/board/board.html?code=jogunshop_image2&amp;page=1&amp;type=v&amp;board_cate=&amp;num1=999840&amp;num2=00000&amp;number=13&amp;lock=N">MEMBERSHIP</a></li>
              <li>
               <select name="select" id="glob" >
                 <option value="#">KOR</option>
                 <option value="http://en.jogunshop.com/">USA</option>
                 <option value="http://cn.jogunshop.com/">CHN</option>
                 <option value="http://jp.jogunshop.com/">JPN</option>
               </select>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li><a href="https://www.jogunshop.com/shop/member.html?type=login">LOGIN</a></li>
              <li className="w30"><a href="https://www.jogunshop.com/shop/idinfo.html">JOIN</a></li>
              <li className="w53"><a href="https://www.jogunshop.com/shop/member.html?type=mynewmain">MY PAGE</a></li>
              <li className="line"><a href="https://www.jogunshop.com/shop/confirm_login.html?type=myorder">ORDER</a></li>
              <li className="icon"><a href="/shop/mypage.html?mypage_type=mywishlist"><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/wish_icon.png'} /></a></li>
              <li className="icon"><a href="/shop/basket.html"><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/cart_icon.png'} /><span className="cart_count">/<span id="user_basket_quantity" className="user_basket_quantity">0</span></span></a></li>
            </ul>
            <span id="solutiontype" style={{display:'none'}}>makeshop</span>
            <span id="sfsnapfit_store_id" style={{display:'none'}}>jogunshop</span>
            <div>
              <input id="sf_draw_type" type="hidden" value="pc"/>
              <input id="sf_store_name" type="hidden" value="jogunshop"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HeaderTop;
