/* eslint-disable react/prop-types */
import { Github, Linkedin, Mail } from 'lucide-react';

const MemberCard = ({ name, role, bio, socials, image }) => {
    return (
        <div className="relative group hover:cursor-default bg-white rounded-xl overflow-hidden shadow-lg h-[400px] transition-all duration-300 hover:shadow-xl">
            {/* Image Container */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Gradient Overlay - always visible but stronger on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-0 transition-all duration-500" />
                {/* Hover gradient - appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 opacity-0 group-hover:opacity-90 transition-all duration-500" />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col">
                {/* Main Content - Animated Container */}
                <div className="flex flex-col justify-end h-full transition-all duration-500 transform group-hover:translate-y-[-5%] p-6">
                    {/* Name and Role */}
                    <h3 className="text-xl font-semibold text-white mb-1 transition-all duration-500">
                        {name}
                    </h3>
                    <p className="text-gray-200 font-medium text-sm transition-all duration-500">
                        {role}
                    </p>
                    
                    {/* Bio - appears on hover */}
                    <div className="max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden mt-4">
                        <p className="text-gray-300 text-sm">
                            {bio}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TeamMembers = () => {
    const members = [
        {
            name: "Md. Emon",
            role: "Machine Learning Engineer",
            bio: "Building intelligent systems that learn and adapt to solve complex problems.",
            image: "https://avatars.githubusercontent.com/u/146655229?v=4",
            socials: {
                linkedin: "https://linkedin.com/",
                github: "https://github.com/mdemon201287",
                email: "james@example.com"
            }
        },
        {
            name: "Ornob Aadi",
            role: "UI/UX & Frontend Developer",
            bio: "Crafting beautiful and intuitive user interfaces that engage and delight users.",
            image: "https://i.ibb.co.com/HNkhYGc/00000-PORTRAIT-00000-BURST20190124113738260-2.jpg",
            socials: {
                linkedin: "https://linkedin.com/in/ornobaadi",
                github: "https://github.com/ornobaadi",
                email: "aadi4789@gmail.com"
            }
        },
        {
            name: "Mashayeakh Islam",
            role: "Database & Backend Developer",
            bio: "Building robust and scalable backend systems that power our applications.",
            image: "https://avatars.githubusercontent.com/u/59131868?v=4",
            socials: {
                linkedin: "https://linkedin.com/",
                github: "https://github.com/mashayeakh",
                email: "juan@example.com"
            }
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {members.map((member, index) => (
                <MemberCard key={index} {...member} />
            ))}
        </div>
    );
};

export default TeamMembers;