import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function fetchBrands() {
      try {
        const response = await axios.get('https://ecommerce.routemisr.com/api/v1/brands');
        setBrands(response.data.data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    }

    fetchBrands();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Brands</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {brands.map((brand) => (
          <div key={brand._id} className="brand-card p-4 border rounded-lg shadow-md">
            <img src={brand.image} alt={brand.name} className="w-full h-32 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold">{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}