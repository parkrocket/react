import React from "react";

function Head() {
    return (
        <div className="header_wrap">
            <div className="nav_top sec_padding">
                <h1 className="logo"><a href="index.html"><img src="../images/test_logo.png" alt="" /></a></h1>
                <div className="nav_top_right">
                    <p className="search"></p>
                    <p className="heart"></p>
                    <p className="alarm"></p>
                </div>
            </div>
            <div className="nav">
                <ul className="menu sec_padding">
                    <li><a href="#!" className="on">홈</a></li>
                    <li><a href="#!">사진</a></li>
                    <li><a href="#!">홈트페스티벌</a></li>
                    <li><a href="#!">이벤트</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Head;