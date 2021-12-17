import React from 'react'
import Slider from "react-slick";

function MainMiddleBn() {

    const settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
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
    )
}

export default MainMiddleBn;
