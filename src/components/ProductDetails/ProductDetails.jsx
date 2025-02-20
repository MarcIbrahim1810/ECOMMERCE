import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from "react-slick";

export default function ProductDetails() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    let { id, category } = useParams()
    const [productDetails, setProductDetails] = useState(null)
    const [relatedProducts, setRelatedProducts] = useState([])
    function getProductDetails(id) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            .then(({ data }) => {
                setProductDetails(data.data)

            })
            .catch(() => {

            })


    }
    useEffect(() => {
        getProductDetails(id);
    }, [])





    function getRelatedProducts(category) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then(({ data }) => {
                let allProducts = data.data;
                let related = allProducts.filter((product) => product.category.name == category)
                setRelatedProducts(related)
            })
            .catch(() => {

            })


    }
    useEffect(() => {
        getProductDetails(id);
        getRelatedProducts(category);
    }, [id, category])




    return (
        <>

            <div className="row">
                <div className="w-1/4">
                    <Slider {...settings}>
                        {productDetails?.images.map((src) =>

                            <img className='w-full' src={src} alt={productDetails?.title} />
                        )}
                    </Slider>
                </div>

                <div className="w-3/4 p-6">
                    <h1 className='text-lg font-normal text-gray-950'>{productDetails?.title} </h1>
                    <p className='text-gray-600 font-light  mt-4'>{productDetails?.description}</p>

                    <div className='flex justify-between items-center'>
                        <span className='text-lg font-bold text-green-600'>{productDetails?.price} EGP</span>
                        <span>{productDetails?.ratingsAverage} <i className="fa-solid fa-star text-yellow-500"></i> </span>
                    </div>
                    <button className='btn cursor-pointer'>Add tu cart</button>


                </div>


            </div>


            <div className="row">

                {relatedProducts.map((product) =>
                    <div key={product.id} className="w-1/6">
                        <div className="product py-4">
                            <Link to={`/productDetails/${product.id}/${product.category.name}`}>
                                <img className='w-full' src={product.imageCover} alt={product.title} />
                                <span className='block font-light mt-2 text-green-600'>{product.category.name}</span>
                                <h3 className='text-lg font-normal texgr-800 mb-4'>{product.title.split(" ").slice(0, 2).join(" ")}</h3>
                                <div className='flex justify-between items-center'>
                                    <span className='text-lg font-bold text-green-600'>{product.price} EGP</span>
                                    <span>{product.ratingsAverage} <i className="fa-solid fa-star text-yellow-500"></i> </span>
                                </div>
                                <button className='btn cursor-pointer'>Add tu cart</button>
                            </Link>

                        </div>
                    </div>
                )
                }
            </div>
        </>
    )
}
