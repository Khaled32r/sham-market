import React from 'react';
import Link from 'next/link';

const categories = [
    {
        name: 'Electronics',
        description: 'Phones, laptops, headphones',
        image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    },
    {
        name: 'mens clothing',
        description: 'Men, kids',
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
    {
        name: 'womens clothing',
        description: 'womens,kids',
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    },
    {
        name: 'jewelery',
        description: 'Appliances and tools',
        image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    },
];

export default function ProductCategories() {

    if (!categories.length) {
        return (
        <div className="text-center text-gray-500 py-10">
            No categories available.
        </div>
        );
    }

return (
    <section className="py-8 px-4 max-w-screen-xl mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-center">Product Categories</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

        {categories.map((category, index) => (
        <Link key={index} href={`/products/`}>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition p-4 flex flex-col items-center text-center cursor-pointer hover:scale-105 duration-300">
            <img
                src={category.image}
                alt={category.name}
                className="w-20 h-20 object-cover rounded-full mb-3"
            />
            <h3 className="text-lg font-semibold ">{category.name}</h3>
            <p className="text-sm  mt-1">{category.description}</p>
            </div>
        </Link>
        ))}
        
    </div>
    </section>
);
}