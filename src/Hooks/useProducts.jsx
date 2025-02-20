import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader';

export default function useProducts() {


    function getRecent() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }
    let responseObject = useQuery({
        key: ['recentProducts'],
        queryFn: getRecent,
        staleTime: 0,
    });


    return responseObject
}
