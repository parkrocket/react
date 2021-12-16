import React from 'react'
import Slider from "react-slick";
import '../../Css/style.css';
import '../../Css/main.css';
import '../../Css/media.css';

import Head from '../Head.js';
import Tail from "../Tail.js";
import MainBanner from "./MainBanner.js";
import MainBestTalk from "./MainBestTalk.js";
import MainComu from "./MainComu.js";
import MainEvent from "./MainEvent.js";


function Main() {

    const settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
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
                <MainBanner></MainBanner>
                <MainBestTalk></MainBestTalk>
                <MainComu></MainComu>

                <div className="sec main_middle_bn_wrap">
                    <div className="main_middle_bn">
                        <div className="middle_bn_list">
                            <Slider {...settings2}>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../../images/main_bn01.jpg" alt="" />
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

                <MainEvent></MainEvent>

                <Tail></Tail>
            </div>
        </div>
    );
}


export default Main;
