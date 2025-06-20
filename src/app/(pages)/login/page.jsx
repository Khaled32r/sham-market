'use client';
import { useState,useEffect } from "react";
import {useDispatch,useSelector } from "react-redux";
import { loginFu } from "@/store/productSlice";
import { useRouter } from 'next/navigation';


const Login = () => {

    
    const islogedin=useSelector(state=>state.productR.islogin)
    const dispatch=useDispatch()
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        
    const handleSubmit = e => {
        e.preventDefault();
        // TODO: Send data to API
        dispatch(loginFu({username:email,password:password}))
        // console.log();
    };


    const handleGoogleLogin = () => {
        // TODO: Integrate with Google login
        alert('Google login coming soon...');
    };

        
    // useEffect(() => {
    //     if (islogedin) {
    //     router.push('/');
    //     location.reload()
    //     }
    // }, [islogedin, router]);
        

return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl transition-colors">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Welcome Back</h2>
    <form onSubmit={handleSubmit} className="space-y-5">
        <input
        type="text"
        placeholder="Email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="text-right">
        <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot password?
        </a>
        </div>
        <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
        Sign In
        </button>
    </form>
    <div className="my-6 text-center text-gray-500">OR</div>
    <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
    >
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
        <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
    </button>
    <p className="text-center text-sm text-gray-600 mt-6">
        Don’t have an account?{' '}
        <a href="/login/register" className="text-blue-600 hover:underline font-medium">Register</a>
    </p>
    </div>
);
};

export default Login;
