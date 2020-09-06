import React, { Component}  from 'react';
import HeaderTop from './HeaderTop';
import HeaderMid from './HeaderMid';
import HeaderBot from './HeaderBot';
import '../common/common.css';
import './header.css';
import '../common/font2.css';
import '../common/google_roboto.css';
import '../common/google_sans.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        {/*
          HeaderTop:
                    중앙을 기준으로 LEFT: 언어, BOOKMARK, CS CENTER, EVENT, REVIEW, MEMVERSHIP이 존재 하지만 이건 단순히 notify을 위한 용도로 component간의 연결은 필요 없음
                    중앙을 기준으로 RIGHT: LOGIN/JOIN/MYPAGE/ORDER/하트/카트, 컨텐츠중에서 물품을 선택하면, 카트에 담겨야 하므로 component간의 연결을 필요할수 있다.
          HeaderMid:
        */}
        <HeaderTop></HeaderTop>
        <HeaderMid></HeaderMid>
        <HeaderBot></HeaderBot>
      </div>
    );
  }

};

export default Header;
