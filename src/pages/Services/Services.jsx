import ServiceCard, { services } from './ServiceCard';

const Services = () => {
    return (
        <div className="bg-amber-50/20">
            <div className="max-w-7xl mx-auto bg-amber-50/0 text-neutral inter-tight px-4 py-16">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                    <div>
                        <h1 className="text-5xl font-bold">Our Services</h1>
                        <p className="py-6 text-gray-500 max-w-2xl">
                            Unleashing comprehensive web development solutions to transform your digital presence.
                            From frontend to backend, we build scalable and modern applications.
                        </p>
                    </div>
                    <button className="btn btn-accent">Get Started</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            dark={service.dark}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;