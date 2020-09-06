import React, { Component}  from 'react';
import './header.css';

class HeaderBot extends Component {

  render() {
    return (
      <div className="header_bot_wrap">
      <div className="header_bot">
            {/*Anitop_Fixed*/}
            <div className="header_ani">
             <div className="header_ani_inner">
              <a href="/"><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/ani_logo.png'} className="ani_logo" alt="로고"/></a>
              <div className="right">
                <ul>
                  <li className="icon"><a href="/shop/mypage.html?mypage_type=mywishlist"><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/wish_icon.png'} alt="관심상품"/></a></li>
                  <li className="icon"><a href="/shop/basket.html"><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/cart_icon.png'} alt="장바구니"/><span className="cart_count">/<span id="user_basket_quantity" className="user_basket_quantity">0</span></span></a></li>
                </ul>
              </div>
             </div>
            </div>
            <ul className="gnb">
              {/*MADE*/}
              <li className="depth1">
                <a href="/shop/shopbrand.html?xcode=065&amp;type=">MADE</a>
              </li>
              {/*BEST*/}
              <li className="depth1">
                <a href="/shop/shopbrand.html?xcode=071&amp;type=P">BEST</a>
              </li>
              {/*NEW~20%*/}
              <li className="depth1">
                <a href="/shop/shopbrand.html?xcode=059&amp;type=P">NEW~20%</a>
              </li>
              {/*BIG*/}
              <li className="depth1 big">
                <a href="/shop/shopbrand.html?xcode=052&amp;type=Y">큰-옷</a>
              </li>

              {/*CODISET*/}
              <li className="depth1">
                <a href="/shop/shopbrand.html?xcode=018&amp;type=P">CODISET</a>
              </li>
              {/*TOP*/}
              <li className="depth1">
                <a href="/shop/shopbrand.html?xcode=078&amp;type=Y">TOP</a>
                <ul className="depth2 top">
                  <li><a href="/shop/shopbrand.html?xcode=078&amp;type=N&amp;mcode=009">맨투맨&amp;후드티</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=078&amp;type=N&amp;mcode=011">니트</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=078&amp;type=N&amp;mcode=004">긴팔티</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=078&amp;type=N&amp;mcode=010">반팔티</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=078&amp;type=N&amp;mcode=003">나시</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=078&amp;type=N&amp;mcode=002">프린팅티</a></li>
                </ul>
              </li>
              {/*PANTS*/}
              <li className="depth1">
                <a href="/shop/shopbrand.html?xcode=081&amp;type=Y">PANTS</a>
                <ul className="depth2 pants">
                  <li><a href="/shop/shopbrand.html?xcode=081&amp;type=N&amp;mcode=006">슬랙스</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=081&amp;type=N&amp;mcode=003">면바지</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=081&amp;type=N&amp;mcode=002">청바지</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=081&amp;type=N&amp;mcode=007">밴딩팬츠</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=081&amp;type=N&amp;mcode=004">반바지</a></li>
                </ul>
              </li>
              {/*SHIRTS*/}
              <li className="depth1">
                <a href="/shop/shopbrand.html?xcode=055&amp;typ">SHIRTS</a>
                <ul className="depth2 shirts">
                  <li><a href="/shop/shopbrand.html?xcode=055&amp;type=N&amp;mcode=004">베이직</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=055&amp;type=N&amp;mcode=006">청남방</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=055&amp;type=N&amp;mcode=005">체크&amp;패턴</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=055&amp;type=N&amp;mcode=003">스트라이프</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=055&amp;type=N&amp;mcode=008">헨리넥&amp;차이나</a></li>
                </ul>
              </li>
              <li className="depth1">
              {/*OUTER*/}
                <a href="/shop/shopbrand.html?xcode=079&amp;type=Y">OUTER</a>
                <ul className="depth2 outer">
                  <li><a href="/shop/shopbrand.html?xcode=079&amp;type=N&amp;mcode=004">패딩</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=079&amp;type=N&amp;mcode=002">코트</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=079&amp;type=N&amp;mcode=006">수트&amp;블레이져</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=079&amp;type=N&amp;mcode=010">자켓</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=079&amp;type=N&amp;mcode=007">블루종/MA-1</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=079&amp;type=N&amp;mcode=005">가디건&amp;조끼</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=079&amp;type=N&amp;mcode=008">후드&amp;집업</a></li>
                </ul>
              </li>
              {/*SHOES*/}
              <li className="depth1">
                <a href="/shop/shopbrand.html?xcode=066&amp;type=Y">SHOES</a>
                <ul className="depth2 shoes">
                  <li><a href="/shop/shopbrand.html?xcode=066&amp;mcode=004&amp;type=Y">스니커즈</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=066&amp;mcode=007&amp;type=Y">로퍼&amp;구두</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=066&amp;mcode=005&amp;type=Y">키높이신발&amp;깔창</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=066&amp;mcode=006&amp;type=Y">슬리퍼&amp;쪼리&amp;샌들</a></li>
                </ul>
              </li>

              {/*BAG*/}
              <li className="depth1">
                <a href="/shop/shopbrand.html?xcode=070&amp;type=Y">BAG</a>
                <ul className="depth2 bags">
                  <li><a href="/shop/shopbrand.html?xcode=070&amp;mcode=001&amp;type=Y">백팩</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=070&amp;mcode=002&amp;type=Y">토트&amp;숄더백</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=070&amp;mcode=003&amp;type=Y">크로스백</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=070&amp;mcode=005&amp;type=Y">클러치</a></li>
                </ul>
              </li>


              {/*ACC*/}
              <li className="depth1">
                <a href="/shop/shopbrand.html?xcode=080&amp;type=Y">ACC</a>
                <ul className="depth2" style={{display: 'none'}}>
                  <li><a href="/shop/shopbrand.html?xcode=080&amp;mcode=005&amp;type=Y">양말&amp;넥타이</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=080&amp;mcode=003&amp;type=Y">모자</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=080&amp;mcode=006&amp;type=Y">머플러&amp;장갑</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=080&amp;mcode=002&amp;type=Y">아이웨어</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=080&amp;mcode=008&amp;type=Y">벨트&amp;시계</a></li>
                  <li><a href="/shop/shopbrand.html?xcode=080&amp;mcode=007&amp;type=Y">기타</a></li>
                </ul>
              </li>
              {/*LIFE*/}
              <li className="depth1">
                <a href="/shop/shopbrand.html?xcode=006&amp;type=P">LIFE</a>
              </li>

              {/*당일배송*/}
              <li className="depth1 orange">
                <a href="/shop/shopbrand.html?xcode=068">당일배송</a>
              </li>
              {/*검색*/}
              <li className="depth1 search">
                <div className="btn"><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/top_search_icon.png'} alt="검색"/></div>
                <div className="searchbar">
                  <form action="/shop/shopbrand.html" method="post" name="search">
                    <fieldset>
                      <legend>상품 검색 폼</legend>
                        <input name="search" className="MS_search_word"/>
                        <a href="javascript:search_submit();"><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/sch_btn.png'} alt="검색버튼"/></a>
                    </fieldset>
                  </form>
                </div>
              </li>
            </ul>
          </div>
      </div>
    );
  }

};

export default HeaderBot;
