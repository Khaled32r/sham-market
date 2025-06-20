    'use client';

    import Link from "next/link";
    import { useSelector, useDispatch } from "react-redux";
    import { getProductFu } from "@/store/productSlice";
    import { useEffect, useState, useRef } from "react";
    import { CircularProgress } from '@mui/material';
    import CategorySelector from "@/components/categorySelector";

    export default function Products() {
    const [category, setCategory] = useState("");
    const [visibleCount, setVisibleCount] = useState(8);
    const observerRef = useRef(null);

    const productData = useSelector(state => state.productR);
    const dispatch = useDispatch();

    const categorySelected = (selectedCategory) => {
        if (selectedCategory === 'All') {
        setCategory('');
        } else if (selectedCategory === 'electronics') {
        setCategory('category/electronics');
        } else if (selectedCategory === 'jewelery') {
        setCategory('category/jewelery');
        } else if (selectedCategory === "men's clothing") {
        setCategory("category/men's clothing");
        } else if (selectedCategory === "women's clothing") {
        setCategory("category/women's clothing");
        }
        setVisibleCount(8); // نعيد العد عند تغيير التصنيف
    };

    useEffect(() => {
        dispatch(getProductFu(category));
    }, [category]);

    useEffect(() => {
        const observer = new IntersectionObserver(
        entries => {
            if (entries[0].isIntersecting) {
            setVisibleCount(prev => prev + 8);
            }
        },
        { threshold: 1.0 }
        );

        if (observerRef.current) observer.observe(observerRef.current);

        return () => {
        if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [observerRef.current]);

    const visibleProducts = productData.data.slice(0, visibleCount);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
        {productData.isLoading && <div className="flex justify-center"><CircularProgress /></div>}

        <CategorySelector categorySelected={categorySelected} />
        <hr className="mt-2" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
            {visibleProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
                <div className="bg-white/20 backdrop-blur-md shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] transition">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-contain bg-white p-4"
                />
                <div className="p-4">
                    <h2 className="font-semibold text-lg line-clamp-2 mb-2">{product.title}</h2>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">${product.price}</span>
                    <span className="text-yellow-500 text-sm">⭐ {product.rating?.rate ?? "N/A"}</span>
                    </div>
                </div>
                </div>
            </Link>
            ))}
        </div>

        <div ref={observerRef} className="h-10 mt-10" />

        {visibleProducts.length >= productData.data.length && (
            <p className="text-center text-gray-400 mt-4">No more products to show.</p>
        )}
        </div>
    );
    }
