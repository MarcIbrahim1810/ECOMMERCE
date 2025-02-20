import React from 'react'
import MainSlider1 from "../../assets/images/MainSlider-1.jpeg"
import MainSlider2 from "../../assets/images/MainSlider-2.jpg"
import MainSlider3 from "../../assets/images/MainSlider-3.jpg"
import Slider from "react-slick";

export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <div>

            <div className="row">
                <div className="w-3/4">
                    <Slider {...settings}>
                        <img src={MainSlider1} className='w-full h-[400px]' />
                        <img src={MainSlider2} className='w-full h-[400px]' />
                        <img src={MainSlider3} className='w-full h-[400px]' />

                    </Slider>
                </div>

                <div className="w-1/4">
                    <img src={MainSlider2} className='w-full h-[200px]' />
                    <img src={MainSlider3} className='w-full h-[200px]' />

                </div>
            </div>
        </div>
    )
}
