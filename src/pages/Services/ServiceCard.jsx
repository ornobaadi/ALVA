import { Code, Database, Layout, Smartphone, Server, Cloud, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const services = [
    {
        icon: Layout,
        title: "Frontend Development",
        description: "Create responsive, interactive user interfaces using modern frameworks like React, Vue, and Angular.",
    },
    {
        icon: Server,
        title: "Backend Development",
        description: "Build robust server-side applications with Node.js, Python, or Java to power your web applications."
    },
    {
        icon: Database,
        title: "Database Solutions",
        description: "Design and implement efficient database architectures using SQL and NoSQL technologies."
    },
    {
        icon: Cloud,
        title: "SaaS Application Development",
        description: "Scalable Software-as-a-Service solutions with cloud integration and subscription management."
    },
    {
        icon: Code,
        title: "API Development",
        description: "Create RESTful and GraphQL APIs to connect your services and enable seamless data flow."
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Build cross-platform mobile applications using React Native and Flutter frameworks."
    }
];

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="p-8 rounded-xl bg-white hover:bg-gray-950 border hover:cursor-pointer border-gray-50 hover:text-white shadow-lg transition-all duration-300 hover:scale-105 group  transform hover:-rotate-2">
        <Icon className="w-10 h-10 mb-6  text-black group-hover:text-green-400 transition-colors duration-300" />
        <h3 className="text-xl text-gray-900 group-hover:text-white font-bold my-4">{title}</h3>
        <p className="my-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        <Link className="flex items-center text-black group-hover:text-green-400 font-semibold transition-colors duration-300">
            Learn more
            <span className="ml-1"><ChevronRight /></span>
        </Link>
    </div>
);

export default ServiceCard;