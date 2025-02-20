import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import useProducts from '../../Hooks/UseProducts';
import Search from '../Products/search';

export default function Products() {
  const { data, isError, error, isLoading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (query) => {
    if (data) {
      const filtered = data.data.data.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  if (isLoading) {
    return <div className='py-8 w-full flex justify-center items-center'>
      <BeatLoader color="green" />
    </div>;
  }

  if (isError) {
    return <div className='py-8 w-full flex justify-center items-center'>
      <h3>{error}</h3>
    </div>;
  }

  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : data?.data?.data;

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="row">
        {productsToDisplay.map((product) =>
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
              <button className='btn w-full'>Add to cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}