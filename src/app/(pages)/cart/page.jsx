    'use client'
    import { useDispatch, useSelector } from "react-redux";
    import { getProductFu, getUserCartFu } from "@/store/productSlice";
    import { useEffect, useState } from "react";
    import { CircularProgress } from "@mui/material";

    const Carts = () => {
    const dispatch = useDispatch();
    const userCartData = useSelector(state => state.productR);
    const productFromSlice = useSelector(state => state.productR.data);

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        dispatch(getUserCartFu(userId));

    }, [dispatch]);

    useEffect(() => {
        if (userCartData.userCart.length > 0) {
        const latestCart = userCartData.userCart[userCartData.userCart.length - 1];
        latestCart.products.forEach(async (product) => {
            const res = await dispatch(getProductFu(product.productId));
            if (res?.payload) {
            setCartProducts(prev => [...prev, { ...res.payload, quantity: product.quantity }]);
            }
        });
        }
    }, [userCartData.userCart, dispatch]);

    return (
        <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
            <header className="text-center">
                <h1 className="text-xl font-bold sm:text-3xl">Your Cart</h1>
            </header>

            {userCartData.isLoading ? <div className="flex justify-center py-10"><CircularProgress /></div> : (
                <div className="mt-8">
                <ul className="space-y-4">
                    {cartProducts.length > 0 ? cartProducts.map((product, index) => (
                    <li key={index} className="flex items-center gap-4">
                        <img
                        src={product.image}
                        alt={product.title}
                        className="size-16 rounded-sm object-cover"
                        />
                        <div>
                        <h3 className="text-sm">{product.title}</h3>
                        <p className="text-xs text-gray-500">${product.price}</p>
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-2">
                        <span className="text-sm">Qty: {product.quantity}</span>
                        </div>
                    </li>
                    )) : <p className="text-center text-sm text-gray-500">No products in cart.</p>}
                </ul>

                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                    <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm ">
                        <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>
                            ${cartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                        </dd>
                        </div>
                        <div className="flex justify-between">
                        <dt>VAT</dt>
                        <dd>$10</dd>
                        </div>
                        <div className="flex justify-between">
                        <dt>Discount</dt>
                        <dd>-$5</dd>
                        </div>
                        <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>
                            ${(cartProducts.reduce((total, item) => total + item.price * item.quantity, 0) + 10 - 5).toFixed(2)}
                        </dd>
                        </div>
                    </dl>

                    <div className="flex justify-end">
                        <a
                        href="#"
                        className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                        >
                        Checkout
                        </a>
                    </div>
                    </div>
                </div>

                </div>
            )}
            </div>
        </div>
        </section>
    );
    };

    export default Carts;
