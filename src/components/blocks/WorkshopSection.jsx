'use client';

import React, { useRef, useEffect, useState } from 'react';

const workshops = [
    {
        id: "Workshop - 01",
        title: "PCB Design",
        subtitle: "Advanced PCB Design Workshop",
        description: "A comprehensive session on designing multi-layer PCBs for space applications. Students learned about signal integrity, EMI/EMC considerations, and manufacturing processes.",
        image: "/events/team.jpg"
    },
    {
        id: "Workshop - 02",
        title: "3D Modelling",
        subtitle: "CAD & Generative Design",
        description: "Teaching the fundamentals of 3D modelling and topology optimization. Participants designed lightweight rover components using industry-standard software.",
        image: "/events/team.jpg"
    },
    {
        id: "Workshop - 03",
        title: "Autonomous Sys",
        subtitle: "ROS2 & Navigation Stack",
        description: "Deep dive into Robot Operating System 2. We covered SLAM, path planning, and sensor fusion techniques for autonomous mobile robots.",
        image: "/events/team.jpg"
    },
    {
        id: "Workshop - 04",
        title: "Mechanical Integration",
        subtitle: "Rover Assembly Bootcamp",
        description: "Hands-on assembly workshop where participants put together a simplified rover chassis, learning about suspension kinematics and drive systems.",
        image: "/events/team.jpg"
    }
];

const WorkshopBlock = ({ item, index, isAlternate }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

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

    return (
        <div
            ref={ref}
            className={`flex flex-col lg:flex-row ${isAlternate ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-24 items-center mb-32 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
                <div className="relative p-[4px] rounded-[40px] overflow-hidden group w-full aspect-video">
                    {/* Spinning Gradient Border */}
                    <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#7e22ce_50%,#000000_100%)] opacity-100" />

                    {/* Inner Content */}
                    <div className="relative w-full h-full bg-black rounded-[36px] overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                        />
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

export function WorkshopSection() {
    return (
        <section className="relative w-full pt-12 pb-24 px-4 md:px-8 z-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6 relative inline-block">
                        WORKSHOPS
                        {/* Underline */}
                        <div className="absolute -bottom-4 left-0 w-full h-2 bg-purple-600 rounded-full"></div>
                    </h2>
                </div>
                {workshops.map((item, index) => (
                    <WorkshopBlock key={index} item={item} index={index} isAlternate={index % 2 !== 0} />
                ))}
            </div>
        </section>
    );
}
