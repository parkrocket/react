import React from 'react'
import Slider from "react-slick";

function MainBanner() {

    const settings = {
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

                    </Slider>
                </div>
                <div className="main_bn_paging"></div>
            </div>
        </div>
    )
}

export default MainBanner
