    'use client';
    import React, { useEffect, useState } from 'react';

    export default function HeroSection({ slides = [] }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (slides.length === 0) return;

        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides]);

    if (!slides.length) {
        return (
        <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center text-gray-500">
            No images available.
        </div>
        );
    }

    return (
        <section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[40vh] lg:h-[40vh] overflow-hidden">
        {slides.map((imgUrl, index) => (
            <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            >
            <img
                src={imgUrl}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
            />
            </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[3px] z-20" />
        </section>
    );
    }
