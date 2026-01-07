'use client';

import React, { useRef, useEffect, useState } from 'react';

export function OurExperienceSection() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative w-full py-32 px-4 md:px-8 bg-black overflow-hidden">
            <div
                ref={ref}
                className={`max-w-[1000px] mx-auto flex flex-col items-center text-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >

                {/* Section Header - First */}
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-16">
                    OUR EXPERIENCE
                </h2>

                {/* Image Container - Second */}
                <div className="relative w-full aspect-video rounded-[40px] overflow-hidden group mb-16 max-w-[800px]">
                    {/* Spinning Gradient Border - Always Visible */}
                    <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#7e22ce_50%,#000000_100%)] opacity-100" />

                    {/* Inner Black Box */}
                    <div className="relative w-full h-full bg-black rounded-[36px] overflow-hidden m-[4px]">
                        <img
                            src="/irc/lighthouse.jpg"
                            alt="Our Experience"
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                </div>

                {/* Centered Text Content - Third */}
                <div className="relative z-10 max-w-3xl">
                    <p className="text-xl text-gray-400 leading-loose font-light">
                        Participation in the International Rover Challenge has provided our team with invaluable hands-on experience in complex systems engineering. From autonomous navigation to biological sample analysis, we have pushed the boundaries of what is possible, fostering a culture of innovation and resilience.
                    </p>
                </div>

            </div>
        </section>
    );
}
