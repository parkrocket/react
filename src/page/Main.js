import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './Css/style.css';
import './Css/main.css';
import './Css/media.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Head from './Component/Head.js';

function Main() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const settings3 = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 1,
        speed: 500
    };



    return (
        <div>
            <div className="follow_btn">
                <div className="top_btn">

                </div>
                <div className="write_btn">

                </div>
            </div>
            <div id="main_wrap" className="wrap">
                <Head></Head>

                <div className="sec main_bn_wrap">
                    <div className="main_bn">
                        <div className="main_bn_list">
                            <Slider {...settings}>
                                <div className="main_bn_img">
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div className="main_bn_img">
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div className="main_bn_img">
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div className="main_bn_img">
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div className="main_bn_img">
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div className="main_bn_img">
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div className="main_bn_img">
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div className="main_bn_img">
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div className="main_bn_img">
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div className="main_bn_img">
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div className="main_bn_img">
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                            </Slider>
                        </div>
                        <div className="main_bn_paging"></div>
                    </div>
                </div>

                <div className="sec best_talk_wrap">
                    <div className="sec_tit">
                        <h2>오늘의 베스트 톡</h2>
                        <a href="#!">&gt;</a>
                    </div>
                    <div className="best_talk">
                        <div className="best_item">
                            <a href="#!">
                                <div className="img"><img src="../../images/best_talk_img01.jpg" alt="" /></div>
                                <div className="text">
                                    오늘의 건강 아침 + 간식! 첫 도전해봤어요!
                                </div>
                            </a>
                        </div>
                        <div className="best_item">
                            <a href="#!">
                                <div className="img"><img src="../../images/best_talk_img02.jpg" alt="" /></div>
                                <div className="text">
                                    오늘의 건강 아침 + 간식! 첫 도전해봤어요!
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="sec notice_wrap">
                    <ul className="notice_tab">
                        <li className="on"><a href="#!">인기글</a></li>
                        <li><a href="#!">최신글</a></li>
                    </ul>
                    <div className="notice_conts">
                        <div className="hot">
                            <ul>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            사례로 보는 구독 서비스
                                        </p>
                                        <p className="cmt_num">10</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            YOU만 모르는 스마트스토어 리마케팅 방법
                                        </p>
                                        <p className="cmt_num">10</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            스마트스토어 운영 시 추천 사이트 (기초 셋팅부터 운123456789
                                        </p>
                                        <p className="cmt_num">10</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            병읜원 분들!!!
                                        </p>
                                        <p className="cmt_num">10</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            꼰머우뇌가 전하는 활용법
                                        </p>
                                        <p className="cmt_num">10</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            사례로 보는 구독 서비스
                                        </p>
                                        <p></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            스마트스토어 운영 시 추천 사이트 (기초 셋팅부터 운123456789
                                        </p>
                                        <p></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            병읜원 분들!!!
                                        </p>
                                        <p></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            꼰머우뇌가 전하는 활용법
                                        </p>
                                        <p></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            사례로 보는 구독 서비스
                                        </p>
                                        <p></p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="new">
                            <ul>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            new
                                        </p>
                                        <p className="cmt_num">10</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            YOU만 모르는 스마트스토어 리마케팅 방법
                                        </p>
                                        <p className="cmt_num">10</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            스마트스토어 운영 시 추천 사이트 (기초 셋팅부터 운123456789
                                        </p>
                                        <p className="cmt_num">10</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            병읜원 분들!!!
                                        </p>
                                        <p className="cmt_num">10</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            꼰머우뇌가 전하는 활용법
                                        </p>
                                        <p className="cmt_num">10</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            사례로 보는 구독 서비스
                                        </p>
                                        <p></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            스마트스토어 운영 시 추천 사이트 (기초 셋팅부터 운123456789
                                        </p>
                                        <p></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            병읜원 분들!!!
                                        </p>
                                        <p></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            꼰머우뇌가 전하는 활용법
                                        </p>
                                        <p></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <p className="tit">
                                            사례로 보는 구독 서비스
                                        </p>
                                        <p></p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="sec main_middle_bn_wrap">
                    <div className="main_middle_bn">
                        <div className="middle_bn_list">
                            <Slider {...settings2}>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="img /main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="img /main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="img /main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="img /main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="img /main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="sec market_wrap">
                    <div className="sec_tit">
                        <h2>중고마켓</h2>
                        <a href="#!">&gt;</a>
                    </div>
                    <div className="market_item_wrap">
                        <div className="market_item">
                            <div className="item">
                                <a href="#!">
                                    <div className="img"><img src="../../images/main_market_img01.jpg" alt="" /></div>
                                    <span className="area">서울 금천구</span>
                                    <p className="product">컬러웨이 퓨전 14 카모 스탠드백 팝</p>
                                </a>
                                <div className="price">
                                    <span className="sell"></span>
                                    <p>49,900원</p>
                                </div>
                                <div className="tag">
                                    <p>자전거용품</p>
                                </div>
                            </div>
                            <div className="item">
                                <a href="#!">
                                    <div className="img"><img src="../../images/main_market_img01.jpg" alt="" /></div>
                                    <span className="area">서울 금천구</span>
                                    <p className="product">컬러웨이 퓨전 14 카모 스탠드백 팝 컬러웨이 퓨전 14 카모 스탠드백 팝</p>
                                </a>
                                <div className="price">
                                    <span className="sell"></span>
                                    <p>49,900원</p>
                                </div>
                                <div className="tag">
                                    <p>자전거용품</p>
                                </div>
                            </div>
                            <div className="item">
                                <a href="#!">
                                    <div className="img"><img src="../../images/main_market_img01.jpg" alt="" /></div>
                                    <span className="area">서울 금천구</span>
                                    <p className="product">컬러웨이 퓨전 14 카모 스탠드백 팝 컬러웨이 퓨전 14 카모 스탠드백 팝123</p>
                                </a>
                                <div className="price">
                                    <span className="sell"></span>
                                    <p>49,900원</p>
                                </div>
                                <div className="tag">
                                    <p>자전거용품</p>
                                </div>
                            </div>
                            <div className="item">
                                <a href="#!">
                                    <div className="img"><img src="../../images/main_market_img01.jpg" alt="" /></div>
                                    <span className="area">서울 금천구</span>
                                    <p className="product">컬러웨이 퓨전 14 카모 스탠드백 팝 컬러웨이 퓨전 14 카모 스탠드백 팝</p>
                                </a>
                                <div className="price">
                                    <span className="sell"></span>
                                    <p>49,900원</p>
                                </div>
                                <div className="tag">
                                    <p>자전거용품</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sec club_wrap">
                    <div className="sec_tit">
                        <h2>주간 동호회 순위</h2>
                        <a href="#!">&gt;</a>
                    </div>
                    <div className="club_item_wrap">
                        <a href="#!" className="club_box">
                            <div className="img"><img src="../../images/main_club_img01.jpg" alt="" /></div>
                            <span className="img_bg"></span>
                            <p className="club_tit">수원시 / 119명 / 너와 함께 걷고 싶다★</p>
                        </a>
                        <a href="#!" className="club_box">
                            <div className="img"><img src="../../images/main_club_img01.jpg" alt="" /></div>
                            <span className="img_bg"></span>
                            <p className="club_tit">2040 등산하실분 구합니다.</p>
                        </a>
                        <a href="#!" className="club_box">
                            <div className="img"><img src="../../images/main_club_img01.jpg" alt="" /></div>
                            <span className="img_bg"></span>
                            <p className="club_tit">수원시 / 119명 / 너와 함께 걷고 싶다★ 함께 걷고함께 걷고함께 걷고함께 걷고함께 걷고</p>
                        </a>
                        <a href="#!" className="club_box">
                            <div className="img"><img src="../../images/main_club_img01.jpg" alt="" /></div>
                            <span className="img_bg"></span>
                            <p className="club_tit">수원시 / 119명 / 너와 함께 걷고 싶다★ 함께 걷고함께 걷고함께 걷고함께 걷고함께 걷고</p>
                        </a>
                    </div>
                </div>

                <div className="sec event_wrap">
                    <div className="sec_tit">
                        <h2>기회전 &amp; 이벤트</h2>
                        <a href="#!">&gt;</a>
                    </div>
                    <div className="event_list">
                        <Slider {...settings3}>
                            <div className="event_box">
                                <img src="../../images/event_img.jpg" alt="" />
                                <span className="date">21.09.21-21.09.03</span>
                                <p className="event_tit">2021 제1회 키친디자인페어</p>
                            </div>
                            <div className="event_box">
                                <img src="../../images/event_img.jpg" alt="" />
                                <span className="date">21.09.21-21.09.03</span>
                                <p className="event_tit">2021 제1회 키친디자인페어</p>
                            </div>
                            <div className="event_box">
                                <img src="../../images/event_img.jpg" alt="" />
                                <span className="date">21.09.21-21.09.03</span>
                                <p className="event_tit">2021 제1회 키친디자인페어</p>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="footer_wrap">
                    <div className="footer">
                        <p>링크비</p>
                        <div className="address">
                            <div>
                                대표이사 조인호 <span>&mid;</span>
                                서울 금천구 가산디지털1로 128 (가산동, STXV타워) 607호
                            </div>
                            <div>
                                cs@linkbe.kr <span>&mid;</span>
                                1661-9050
                            </div>
                        </div>
                        <a href="#!">이용약관</a>
                    </div>
                </div>

                <div className="follow_menu_wrap">
                    <div className="follow_menu">
                        <a href="#!">
                            <img src="../../images/follow_icon01.png" alt="" />
                            <p>하루배송</p>
                        </a>
                        <a href="#!">
                            <img src="../../images/follow_icon01.png" alt="" />
                            <p>카테고리</p>
                        </a>
                        <a href="#!" className="home_btn">
                            <img src="../../images/follow_home_icon.png" alt="" />
                            <p>홈</p>
                        </a>
                        <a href="#!">
                            <img src="../../images/follow_icon01.png" alt="" />
                            <p>찜</p>
                        </a>
                        <a href="#!">
                            <img src="../../images/follow_icon01.png" alt="" />
                            <p>마이</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Main;
