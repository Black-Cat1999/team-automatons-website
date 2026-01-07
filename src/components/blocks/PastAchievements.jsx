
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const legacyData = [
    {
        year: "2025",
        type: "dual",
        items: [
            {
                title: "ROBOCON 2025",
                description: "AIR 2 secured in the national championship. Innovation at its peak.",
                image: "/achievements/legacy-placeholder.jpg"
            },
            {
                title: "IRC 2025",
                description: "International Rover Challenge participation with Kartikeya 2.0.",
                image: "/achievements/legacy-placeholder.jpg"
            }
        ]
    },
    {
        year: "2024",
        type: "single",
        title: "ROBOCON 2024",
        description: "Achieved significant milestones in autonomous navigation and task completion.",
        image: "/achievements/legacy-placeholder.jpg"
    },
    {
        year: "2023",
        type: "single",
        title: "ROBOCON 2023",
        description: "Best Mechanism Award and Quarter Finalists.",
        image: "/achievements/legacy-placeholder.jpg"
    },
    {
        year: "2022",
        title: "ROBOCON 2022",
        description: "Showcasing resilience and engineering prowess.",
        image: "/achievements/legacy-placeholder.jpg"
    },
    {
        year: "2021",
        title: "ROBOCON 2021",
        description: "Virtual completion excellence during the pandemic era.",
        image: "/achievements/legacy-placeholder.jpg"
    },
    {
        year: "2020",
        title: "ROBOCON 2020",
        description: "Innovation award for the unique throwing mechanism.",
        image: "/achievements/legacy-placeholder.jpg"
    },
    {
        year: "2019",
        title: "ROBOCON 2019",
        description: "AIR 4 and Best Aesthetic Robot Award.",
        image: "/achievements/legacy-placeholder.jpg"
    },
    {
        year: "2018",
        title: "ROBOCON 2018",
        description: "Fastest task completion record in the league stage.",
        image: "/achievements/legacy-placeholder.jpg"
    },
    {
        year: "2017",
        title: "ROBOCON 2017",
        description: "Qualified for Super League with a robust design.",
        image: "/achievements/legacy-placeholder.jpg"
    },
    {
        year: "2016",
        title: "ROBOCON 2016",
        description: "Clean Energy Award for efficient power management.",
        image: "/achievements/legacy-placeholder.jpg"
    },
    {
        year: "2015",
        title: "ROBOCON 2015",
        description: "The beginning of a legacy. Best Rookie Team Award.",
        image: "/achievements/legacy-placeholder.jpg"
    }
];

const LegacyCard = ({ data }) => {
    return (
        <div className="relative group w-fit mx-auto rounded-2xl p-[2px] overflow-hidden">
            {/* Spinning Gradient Border */}
            <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#b026ff_50%,#000000_100%)]" />

            {/* Inner Content Box */}
            <div className="relative bg-black rounded-2xl overflow-hidden h-full w-full">
                {/* Background Image - Natural Aspect Ratio constrained to viewport height */}
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-auto h-auto max-h-[60vh] max-w-full block transition-transform duration-700 group-hover:scale-105"
                />

                {/* Default overlay (gradient) to make text readable if always valid, but we want hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 pointer-events-none" />

                {/* Year Label - Always Visible */}
                <div className="absolute top-4 right-4 bg-purple-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-lg z-20">
                    {data.year || "LEGACY"}
                </div>

                {/* Hover Content Overlay */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
                    <h3 className="text-2xl font-bold text-purple-300 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {data.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const PastAchievements = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-[#060010]">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-8 md:px-32 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                        Our <span className="text-purple-500">Legacy</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A decade of excellence, innovation, and engineering marvels.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {legacyData.map((yearData, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="w-full"
                        >
                            {/* Year Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[1px] flex-1 bg-purple-500/30"></div>
                                <h3 className="text-3xl font-bold text-white/50">{yearData.year}</h3>
                                <div className="h-[1px] flex-1 bg-purple-500/30"></div>
                            </div>

                            {/* Content Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {yearData.type === 'dual' ? (
                                    <>
                                        <LegacyCard data={{ ...yearData.items[0], year: yearData.year }} />
                                        <LegacyCard data={{ ...yearData.items[1], year: yearData.year }} />
                                    </>
                                ) : (
                                    <div className="md:col-span-2">
                                        <LegacyCard data={yearData} />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastAchievements;
