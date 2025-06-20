    'use client';
    import { useState } from "react";
    import { useSelector,useDispatch } from "react-redux";
    import { registerFu } from "@/store/productSlice";

    const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch=useDispatch()



    const handleSubmit = e => {
        e.preventDefault();
        // TODO: Send data to registration API
        dispatch(registerFu({ name, username,email, password }))
        // console.log({ name, username,email, password });
    };



    const handleGoogleSignup = () => {
        // TODO: Google OAuth Integration
        alert("Google Sign Up coming soon...");
    };



    return (
        <div className="max-w-md mx-auto mt-16 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl transition-colors">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
            <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
            type="text"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
            type="email"
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

            <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
            >
            Register
            </button>
        </form>

        <div className="my-6 text-center text-gray-500 dark:text-gray-400">OR</div>

        <button
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Sign up with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Log In</a>
        </p>
        </div>
    );
    };

    export default Register;
