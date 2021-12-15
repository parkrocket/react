import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function MainEvent() {
    
    const settings3 = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500
    };
    
    return (
        <div className="sec event_wrap">
            <div className="sec_tit">
                <h2>기회전 &amp; 이벤트</h2>
                <a href="#!">&gt;</a>
            </div>
            <style>{cssstyle}</style>
            
            <Slider {...settings3}>
                <div>
                    <div className="event_box">
                        <img src="../../images/event_img.jpg" alt="" />
                        <span className="date">21.09.21-21.09.03</span>
                        <p className="event_tit">2021 제1회 키친디자인페어</p>
                    </div>
                </div>
                <div>
                    <div className="event_box">
                        <img src="../../images/event_img.jpg" alt="" />
                        <span className="date">21.09.21-21.09.03</span>
                        <p className="event_tit">2021 제1회 키친디자인페어</p>
                    </div>
                </div>
                <div>
                    <div className="event_box">
                        <img src="../../images/event_img.jpg" alt="" />
                        <span className="date">21.09.21-21.09.03</span>
                        <p className="event_tit">2021 제1회 키친디자인페어</p>
                    </div>
                </div>
            </Slider>
            
        </div>
    )
    
}

const cssstyle = `
.center .slick-center .event_box{
    margin: 1px;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
    box-sizing: border-box;
}
`

export default MainEvent;
