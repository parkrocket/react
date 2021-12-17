import React, { useState } from 'react'
import Slider from "react-slick";

function MainBanner() {
    const [activeSlide, setactiveSlide] = useState({activeSlide:1});
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        afterChange: current => setactiveSlide({activeSlide:++current})
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
                <div className="main_bn_paging">
                    <p>
                        <strong>{activeSlide.activeSlide}</strong> / 9
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
