'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer-section';
import { TeamTimeline } from '@/components/blocks/TeamTimeline';
import { TeamProfileCard } from '@/components/ui/TeamProfileCard';

// Dummy Data Generator
const getMembersForYear = (year) => {
    // Generate 27 dummy members (7 leaders + 20 members)
    const count = 27;
    return Array.from({ length: count }, (_, i) => ({
        id: `${year}-${i}`,
        name: `Team Member ${i + 1}`,
        role: i < 7 ? "Team Lead / Core" : "Member",
        photo: "/team/member.jpg",
        email: "contact@teamautomatons.com",
        linkedin: "https://linkedin.com"
    }));
};

export default function TeamPage() {
    const [selectedYear, setSelectedYear] = useState(2026);

    const teamMembers = getMembersForYear(selectedYear);

    // Split: First 7 vs The Rest
    // Leaders: 4 in first row, 3 in second row (centered)
    const topMembers = teamMembers.slice(0, 7);
    const otherMembers = teamMembers.slice(7);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-x-hidden">

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-900/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-800/20 rounded-full blur-[100px] animate-pulse animation-delay-2000" />
            </div>

            <Navbar />

            <div className="pt-24 relative z-10 pb-20">

                {/* Header Removed as requested */}

                {/* Timeline - Sticky */}
                <TeamTimeline selectedYear={selectedYear} onYearSelect={setSelectedYear} />

                {/* Team Roster */}
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-20 min-h-[60vh]">

                    {/* Top Members - 7 Total (4 then 3) */}
                    {/* We can achieve this with a flex container that wraps and centers items */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-7xl mx-auto">
                        {topMembers.map((member, index) => (
                            // Using specific width to ensure 4 fit on large screens, then it wraps
                            <div
                                key={member.id}
                                className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-3rem)] flex-shrink-0 animate-slide-up"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <TeamProfileCard
                                    name={member.name}
                                    role={member.role}
                                    photo={member.photo}
                                    email={member.email}
                                    linkedin={member.linkedin}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Divider Line */}
                    {topMembers.length > 0 && otherMembers.length > 0 && (
                        <div className="relative w-full h-[2px] bg-purple-900/30 my-24">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-purple-500 rotate-45" />
                        </div>
                    )}

                    {/* Remaining Members - 4 in a row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
                        {otherMembers.map((member, index) => (
                            <div
                                key={member.id}
                                className="w-full animate-slide-up"
                                style={{ animationDelay: `${(index + 7) * 50}ms` }}
                            >
                                <TeamProfileCard
                                    name={member.name}
                                    role={member.role}
                                    photo={member.photo}
                                    email={member.email}
                                    linkedin={member.linkedin}
                                />
                            </div>
                        ))}
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    );
}
