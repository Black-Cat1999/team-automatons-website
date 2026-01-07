import { Navbar } from '@/components/ui/navbar'
import InfiniteMenu from '@/components/ui/InfiniteMenu';

const items = [
    {
        image: '/gallery/img1.jpg',
        link: '#',
        title: 'Precision in Motion',
        description: 'Our robots are engineered for high-precision tasks.'
    },
    {
        image: '/gallery/img2.png',
        link: '#',
        title: 'Team Collaboration',
        description: 'Working together to solve complex engineering challenges.'
    },
    {
        image: '/gallery/img3.jpg',
        link: '#',
        title: 'Mechanism Design',
        description: 'Innovative mechanisms for efficient gameplay.'
    },
    {
        image: '/gallery/img4.jpg',
        link: '#',
        title: 'Competition Ready',
        description: 'Fully tested and ready for the arena.'
    },
    {
        image: '/gallery/img5.jpg',
        link: '#',
        title: 'Advanced Electronics',
        description: 'Sophisticated control systems power our bots.'
    },
    {
        image: '/gallery/_MG_8332 (2).JPG.jpg',
        link: '#',
        title: 'Robocon 2018',
        description: 'Team Automatons in Robocon 2018.'
    },
    {
        image: '/gallery/_MG_8458.JPG',
        link: '#',
        title: 'Robocon 2018',
        description: 'Team Automatons in Robocon 2018.'
    },
    {
        image: '/gallery/2015.jpg',
        link: '#',
        title: 'Robocon 2015',
        description: 'Team Automatons in Robocon 2015.'
    },
    {
        image: '/gallery/2017_bot.jpg',
        link: '#',
        title: 'Robocon 2017',
        description: 'Team Automatons in Robocon 2017.'
    },
    {
        image: '/gallery/2024_r1_cropped.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/2024_r1.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/2024_r2_cropped.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/2024_r2.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/2024_robots.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/evening lawn mr2.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/IMG_8020.JPG',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/IMG_20190615_101605__01.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/InShot_20191225_121508119.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/MR1 1.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/MR1 2.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/MR1 3.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/Mr1 3dplm.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/MR2 1.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/MR2 2.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/MR2 3.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/MR2 4.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/picture.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/r1.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/ROBOCON 2017 bot1.JPG',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    }
];

export default function GalleryPage() {
    return (
        <main className="bg-black min-h-screen text-white relative overflow-hidden">
            <Navbar />

            {/* Background Gradient */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black opacity-50 pointer-events-none" />

            <div className="absolute inset-0 pt-20 h-screen w-full z-10">
                <InfiniteMenu items={items} scale={1.5} />
            </div>
        </main>
    );
}
