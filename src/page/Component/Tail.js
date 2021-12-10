import React from "react";

function Tail() {
    return (
        <div> 
            <div className="footer_wrap">
                <div className="footer">
                    <p>링크비</p>
                    <div className="address">
                        <div>
                            대표이사 조인호 <span> | </span>
                            서울 금천구 가산디지털1로 128 (가산동, STXV타워) 607호
                        </div>
                        <div>
                            cs@linkbe.kr <span> | </span>
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
    )
}

export default Tail;