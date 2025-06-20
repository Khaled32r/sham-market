    'use client';
    import { useSelector,useDispatch } from "react-redux";
    import { getProductFu } from "@/store/productSlice";
    import { useEffect } from "react";
    import { useParams } from 'next/navigation';
import { CircularProgress } from "@mui/material";

    
export default function ProductDetails(paramsPromise) {

    const params = useParams();
    const { id } = params;

    const pdata=useSelector(state=>state.productR)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProductFu(id))
    },[])
    
    const product =pdata.data

return (
<div className="max-w-5xl mx-auto p-6 mt-10 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl transition">
    <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 w-full">
        <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-contain rounded-lg bg-white p-4"
        />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-between">
            <div>
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {product.title}
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                {product.description}
                </p>
                    {pdata.isLoading?<CircularProgress/>:''}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Category:{" "}
                <span className="font-medium capitalize text-gray-800 dark:text-gray-200">
                    {product.category}
                </span>
                </p>
                <div className="flex items-center space-x-6 mb-4">
                    <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                        ${product.price}
                    </span>
                    <div className="flex items-center space-x-2 text-yellow-500">
                        <span>⭐</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                        {product.rating?.rate ?? "N/A"} (
                        {product.rating?.count ?? 0} reviews)
                        </span>
                    </div>
                </div>
            </div>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
                Buy Now
            </button>

            <a className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition" href={'/products'}>
                products
            </a>

        </div>
    </div>
</div>
);
}
