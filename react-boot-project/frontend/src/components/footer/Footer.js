import React, { Component}  from 'react';
import './footer.css';
import '../common/common.css';
import '../common/font2.css';
import '../common/google_roboto.css';
import '../common/google_sans.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_inner">
            <div className="box_cs">
              <div className="tit">CUSTOMER CENTER</div>
              <div className="bignum">1599-3120</div>
              <div className="ss_txt">MON-FRI : AM 10:00 ~ PM 05:00</div>
              <div className="ss_txt">LUNCH: PM 01:00 ~ PM 02:00</div>
              <div className="ss_txt">SAT, SUN, HOLIDAY OFF</div>
              <div className="partner"><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/partner_logo.gif'} alt="협력사로고모음"/></div>
            </div>
            <div className="box_bank">
              <div className="tit">BANK ACCOUNT</div>
              <div className="select">
                <select onchange="javascript:window.open(value,'_blank');">
                  <option selected="" value="">::::::인터넷뱅킹::::::</option>
                  <option value="http://www.wooribank.com/">우리은행</option>
                  <option value="http://banking.nonghyup.com/">NH농협은행</option>
                  <option value="https://www.kbstar.com/">국민은행</option>
                  <option value="http://www.shinhan.com/">신한은행</option>
                  <option value="http://www.ibk.co.kr/">기업은행</option>
                </select>
              </div>
              <div className="bank"> · 우리 1005-601-776813</div>
              <div className="bank"> · 농협 351-0286-8129-53</div>
              <div className="bank"> · 기업 114-153764-04-011</div>
              <div className="bank"> · 국민 594401-04-027446</div>
              <div className="bank"> · 신한 140-009-662523</div>
              <div className="bank name">예금주 : ㈜조군</div>
            </div>
            <div className="box_quick">
              <div className="tit">QUICK MENU</div>
              <div className="quick"><a><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/quickicon_1.gif'}alt="회사소개"/>회사소개</a></div>
              <div className="quick"><a><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/quickicon_2.gif'} alt="개인정보처리방침"/><b>개인정보처리방침</b></a></div>
              <div className="quick"><a><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/quickicon_3.gif'} alt="이용약관"/>이용약관</a></div>
              <div className="quick"><a><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/quickicon_4.gif'} alt="이용안내"/>이용안내</a></div>
              <div className="quick"><a><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/quickicon_6.gif'} alt="이벤트"/>이벤트</a></div>
              <div className="quick"><a><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/quickicon_4.gif'} alt="제휴문의"/>제휴문의</a></div>
              <div className="quick"><a><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/quickicon_7.gif'} alt="매장안내"/>매장안내</a></div>
              <div className="quick"><a><img src={'http://cdn2-aka.makeshop.co.kr/design/jogunshop/MakeshopRenewal/img/quickicon_3.gif'} alt="모델지원"/>모델지원</a></div>
            </div>
            <div className="box_about">
              <div className="tit">ABOUT US</div>
              <div className="txt">㈜ 조군</div>
              <div className="txt">대표 : 조안익</div>
              <div className="txt">사업자 등록 번호 : 130-86-56658</div>
              <div className="txt">E-mail : jogunshop@naver.com</div>
              <div className="txt">주소 : 경기도 부천시 원미구 중동 1086-2 6층 조군샵</div>
              <div className="txt">도로명 : 경기도 부천시 길주로 347(중동) 6층 조군샵</div>
              <div className="txt">통신판매업 신고: 제2011-경기부천-126호</div>
              <div className="txt">개인정보 보호 책임자 : 조안나 <a targer="_blank">[사업자정보확인]</a><a></a></div><a>
              </a><div className="txt"><a></a><a target="_blank">[배송조회 바로가기]</a></div>
            </div>
          </div>
      </div>
    );
  }

};

export default Footer;
