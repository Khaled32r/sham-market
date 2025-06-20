'use client'
import React, { useState,useEffect } from 'react';
import { useTheme } from 'next-themes';
import ThemeToggle from './ThemeToggle';
import CartIcon from './cartIcon';
import Alert from '@mui/material/Alert';


const Header = () => {
    const [isLgedin,setIsLgedin]=useState(false)

    const [menuOpen, setMenuOpen] = useState(false);
    const {theme,setTheme}=useTheme()
    const t=theme

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        let authToken=localStorage.getItem('token')
        if(authToken){
            setIsLgedin(true)
        }else{
            setIsLgedin(false)
        }
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; 
    }

    
    function logout(){
        localStorage.removeItem('token')
        
        location.reload()
    }

    return (
        <header className="bg-gray-900 shadow-xl backdrop-blur-xl text-white">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">

                <a className="block text-white" href="/">

                    <span className="sr-only">Home</span>

                    <span className='font-serifnt-'><span className='text-3xl text-sky-400'>𝒮𝒽𝒶𝓂</span>ℳ𝒶𝓇𝓀ℯ𝓉</span>
                </a>
                {
                    isLgedin?<CartIcon/>:<></>
                }

                <nav className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm ">
                    <li><a className="transition hover:text-teal-600" href="/">Hom</a></li>
                    <li><a className="transition hover:text-teal-600" href="/products">Prodects</a></li>
                    <li><a className="transition hover:text-teal-600" href="about">About us</a></li>
                </ul>
                </nav>

                <ThemeToggle/>
                <div className="flex items-center gap-4">
                <div className="hidden sm:flex sm:gap-4">
                    {
                        isLgedin?<button  className="block hover:text-red-500 text-red-800 text-2xl" onClick={logout}>Logout</button>:
                                <a className="block hover:text-green-500 text-green-800 text-2xl" href="/login">Login</a>
                    }

                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="block rounded-sm bg-white/20 p-2.5  transition hover:bg-white/30 md:hidden"
                >
                    <span className="sr-only">Toggle menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {menuOpen && (
                
                <div className="md:hidden bg-blue-500/10 px-4 py-4 shadow-inner">
                <ul className="space-y-2 text-sm">
                    <li><a className="block hover:text-white/75" href="/">Hom</a></li>
                    <li><a className="block hover:text-white/75" href="/about">About us</a></li>
                    <li><a className="block hover:text-white/75" href="/products">Prodects</a></li>

                    {
                        isLgedin?<button  className="block hover:text-red-500 text-red-800 text-2xl" onClick={logout}>Logout</button>:
                                <a className="block hover:text-green-500 text-green-800 text-2xl" href="/login">Login</a>
                    }
                </ul>
                </div>
            )}
            <hr style={{color:"gray"}}/>
        </header>
    );
};

export default Header;
