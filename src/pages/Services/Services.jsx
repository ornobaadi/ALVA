import ServiceCard, { services } from './ServiceCard';

const Services = () => {
    return (
        <div className="bg-amber-50/20">
            <div className="max-w-7xl mx-auto bg-amber-50/0 text-neutral inter-tight px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between items-start lg:items-center mb-8 sm:mb-10 lg:mb-12">
                    <div className="w-full lg:max-w-3xl">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            Our Services
                        </h1>
                        <p className="mt-4 sm:mt-5 lg:mt-6 text-base sm:text-lg text-gray-500 max-w-2xl">
                            Unleashing comprehensive web development solutions to transform your digital presence.
                            From frontend to backend, we build scalable and modern applications.
                        </p>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="w-full sm:w-auto btn btn-accent px-6 py-3">
                        Get Started
                    </button>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
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