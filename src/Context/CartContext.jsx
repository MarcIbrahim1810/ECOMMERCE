import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext();

export default function CartContextProvider(props) {

    let headers = {
        token: localStorage.getItem('userToken')
    }

    function AddToCart(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
            productId
        }, {
            headers
        })
            .then((response) => response)
            .catch((err) => err)
    }


    function getCartItem() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
            {
                headers
            })
            .then((response) => response)
            .catch((error) => error)
    }


    function removeCartItems(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
            headers: headers
        })
            .then((response) => response)
            .catch((error) => error)
    }


    function updateCartItems(productId, count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
            count:count
        },{
            headers: headers
        })
            .then((response) => response)
            .catch((error) => error)
    }

    return (
        <CartContext.Provider value={{ AddToCart, getCartItem, removeCartItems, updateCartItems }}>
            {props.children}
        </CartContext.Provider>
    )
}