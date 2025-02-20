import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader";
import useProducts from '../../Hooks/UseProducts';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';




export default function RecentProducts() {


    let { AddToCart } = useContext(CartContext)
    async function addProductToCart(productId) {
        let response = await AddToCart(productId)
        if (response.data.status === "success") {
            toast.success('Product added to your cart successfull',
                {
                    duration: 1500,
                    position: 'top-center'
                }
            )
        }
        else {
            toast.error('Product already dont exist in your cart',
                {
                    duration: 1500, 
                    position: 'top-center'
                }
            )
        }
    }


    let { data, isError, error, isLoading } = useProducts()
    if (isLoading) {
        return <div className='py-8 w-full flex justify-center items-center'>
            <BeatLoader color="green" />
        </div>
    }
    if (isError) {
        return <div className='py-8 w-full flex justify-center items-center'>
            <h3>{error}</h3>
        </div>
    }


    



    return (
        <div className="row">
            {data?.data?.data.map((product) =>

                <div key={product.id} className="w-1/6 px-4">
                    <div className="product py-4">
                        <Link to={`/productDetails/${product.id}/${product.category.name}`}>
                            <img className='w-full' src={product.imageCover} alt={product.title} />
                            <span className='block font-light mt-2 text-green-600'>{product.category.name}</span>
                            <h3 className='text-lg font-normal texgr-800 mb-4'>{product.title.split(" ").slice(0, 2).join(" ")}</h3>
                            <div className='flex justify-between items-center'>
                                <span className='text-lg font-bold text-green-600'>{product.price} EGP</span>
                                <span>{product.ratingsAverage} <i className="fa-solid fa-star text-yellow-500"></i> </span>
                            </div>
                        </Link>
                        <button onClick={() => addProductToCart(product.id)} className='btn cursor-pointer'>Add to cart</button>

                    </div>
                </div>)}
        </div>
    )
}
