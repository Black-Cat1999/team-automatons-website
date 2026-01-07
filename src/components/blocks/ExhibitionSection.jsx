'use client';

import React, { useRef, useEffect, useState } from 'react';

const exhibitions = [
    {
        id: "Events - 01",
        title: "Global Expo",
        subtitle: "Future Tech Exhibition",
        description: "Showcasing our latest rover capabilities to an international audience. The interactive booth allowed visitors to control the robotic arm remotely.",
        images: ["/events/team.jpg", "/events/team.jpg"] // Placeholder slideshow
    },
    {
        id: "Events - 02",
        title: "Science Fair",
        subtitle: "University Science Day",
        description: "Engaging with students and faculty to demonstrate the principles of space robotics. We performed live demo runs of the autonomous navigation system.",
        images: ["/events/team.jpg", "/events/team.jpg"]
    },
    {
        id: "Events - 03",
        title: "Tech Summit",
        subtitle: "Innovation Summit 2025",
        description: "A gathering of industry leaders where we presented our research on sustainable rover chassis design. Received accolades for our novel suspension system.",
        images: ["/events/team.jpg", "/events/team.jpg"]
    }
];

const SlideshowBlock = ({ item, index, isAlternate }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const ref = useRef(null);

    // Intersection Observer for Slide-up animation
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.2 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Slideshow Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % item.images.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(timer);
    }, [item.images.length]);

    return (
        <div
            ref={ref}
            className={`flex flex-col lg:flex-row ${isAlternate ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-24 items-center mb-32 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
            {/* Image Side with Slideshow & Spinning Border */}
            <div className="w-full lg:w-1/2">
                <div className="relative p-[4px] rounded-[40px] overflow-hidden group w-full aspect-video">
                    {/* Spinning Gradient Border */}
                    <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#7e22ce_50%,#000000_100%)] opacity-100" />

                    {/* Inner Content */}
                    <div className="relative w-full h-full bg-black rounded-[36px] overflow-hidden">
                        {item.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`${item.title} ${idx}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentImage ? 'opacity-90' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 relative">
                <div className="flex flex-col space-y-6">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-[1px] w-8 bg-purple-500"></div>
                            <h2 className="text-purple-400 font-bold tracking-[0.2em] text-sm uppercase">{item.id}</h2>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            {item.subtitle}
                        </h3>
                    </div>
                    <div className="text-lg text-gray-400 leading-relaxed font-light">
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function ExhibitionSection() {
    return (
        <section className="relative w-full pt-24 pb-0 px-4 md:px-8 z-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6 relative inline-block">
                        EXHIBITIONS
                        {/* Underline */}
                        <div className="absolute -bottom-4 left-0 w-full h-2 bg-purple-600 rounded-full"></div>
                    </h2>
                </div>
                {exhibitions.map((item, index) => (
                    <SlideshowBlock key={index} item={item} index={index} isAlternate={index % 2 !== 0} />
                ))}
            </div>
        </section>
    );
}
