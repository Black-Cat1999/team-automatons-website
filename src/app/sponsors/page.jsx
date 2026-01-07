'use client';

import PixelCard from '../../components/ui/PixelCard';
import { Navbar } from '../../components/ui/navbar';
import { Footer } from '../../components/ui/footer-section';

const SPONSORS = {
    title: [
        { name: '3deology', logo: '/sponsors/3deology.png' }
    ],
    platinum: [
        { name: 'Altium', logo: '/logos/altium_logo.png', href: "https://altium.com" },
        { name: 'Altium', logo: '/logos/altium_logo.png', href: "https://altium.com" },

    ],
    gold: [
        { name: 'Ashok Laser', logo: '/logos/ashok laser.jpg', href: "https://ashoklaser.com" },
        { name: 'Baker', logo: '/logos/baker.png', href: "https://baker.com" },
        { name: 'BG Enter', logo: '/logos/bg-enter.png', href: "https://bgenter.com" },
        { name: 'Odrive', logo: '/logos/odrive.jpg', href: "https://odrive.com" },
    ],
    silver: [
        { name: 'Microlaser', logo: '/logos/microlaser.PNG', href: "https://microlaser.com" }
    ],
    bronze: [
        { name: 'Ashok Laser', logo: '/logos/ashok laser.jpg', href: "https://ashoklaser.com" },
        { name: 'Baker', logo: '/logos/baker.png', href: "https://baker.com" },
        { name: 'BG Enter', logo: '/logos/bg-enter.png', href: "https://bgenter.com" },
        { name: 'Odrive', logo: '/logos/odrive.jpg', href: "https://odrive.com" },
    ]
};

const TIER_CONFIG = {
    title: { label: 'Title Sponsors', variant: 'title', color: 'text-purple-400' },
    platinum: { label: 'Platinum Sponsors', variant: 'platinum', color: 'text-slate-100' },
    gold: { label: 'Gold Sponsors', variant: 'gold', color: 'text-amber-400' },
    silver: { label: 'Silver Sponsors', variant: 'silver', color: 'text-slate-300' },
    bronze: { label: 'Bronze Sponsors', variant: 'bronze', color: 'text-orange-400' }
};

export default function SponsorsPage() {
    return (
        <div className="min-h-screen w-full bg-slate-950 text-white relative overflow-hidden flex flex-col">
            <Navbar />

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl -z-10" />

            <main className="flex-grow py-24 px-4 md:px-8 mt-20">
                <div className="max-w-7xl mx-auto space-y-28">
                    {Object.entries(SPONSORS).map(([tier, sponsors]) => (
                        <div key={tier} className="flex flex-col items-center animate-fade-in-up">
                            <h2 className={`text-3xl md:text-4xl font-bold mb-12 tracking-wide capitalize ${TIER_CONFIG[tier].color} drop-shadow-lg`}>
                                {TIER_CONFIG[tier].label}
                            </h2>
                            <div className="flex flex-wrap justify-center gap-10">
                                {sponsors.map((sponsor, idx) => (
                                    <PixelCard key={idx} variant={TIER_CONFIG[tier].variant}>
                                        <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
                                            <div className="relative w-full h-full flex items-center justify-center filter drop-shadow-xl transition-transform duration-300 hover:scale-105">
                                                <img
                                                    src={sponsor.logo}
                                                    alt={sponsor.name}
                                                    className="max-w-full max-h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    </PixelCard>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
