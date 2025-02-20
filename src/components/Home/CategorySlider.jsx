import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CategorySlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 8,
        slidesToScroll: 3,
        autoplay: true,
        arrows: false
    }


    const [categories, setCategories] = useState([])

  async  function getCategories() {
     await    axios.get(`https://ecommerce.routemisr.com/api/v1/products/categories`)
            .then(({ data }) => {
                setCategories(data.data)
            })
            .catch(() => {

            })
    }


    useEffect(() => {
        getCategories()
    }, [])


    return (
        <>
            <div className="py-5">
                <h2 className='py-4 text-xl text-gray-800 font-medium'>Shop Popular Categories</h2>
                <div className="row">
                    <Slider {...settings}>
                        {categories.map((category) => <div>
                            <img className='category-img w-full' src={category.image} alt={category.name} />
                            <h3 className='font-light mt-2'>{category.name}</h3>
                        </div>)}
                    </Slider>
                </div>
            </div>



        </>
    )
}
