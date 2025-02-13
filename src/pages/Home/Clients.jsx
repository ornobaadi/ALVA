import WorldMap from "react-svg-worldmap";

const Clients = () => {
    // Define client locations with dummy data
    const clientData = [
        { country: "us", value: 120 }, // United States
        { country: "gb", value: 80 },  // United Kingdom
        { country: "in", value: 95 },  // India
        { country: "au", value: 75 },  // Australia
        { country: "br", value: 85 },  // Brazil
        { country: "ca", value: 70 },  // Canada
        { country: "de", value: 75 },  // Germany
    ];

    // Custom styling for the map
    const mapStyle = {
        width: "100%",
        height: "auto"
    };

    return (
        <section className="inter-tight bg-neutral text-white py-20 rounded-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* World Map Side */}
                    <div className="relative">
                        <div className="w-full aspect-[16/9] flex items-center justify-center">
                            <WorldMap
                                backgroundColor="transparent"
                                color="#64748b"
                                tooltipBgColor="#0f172a"
                                tooltipTextColor="white"
                                valueSuffix="clients"
                                size="lg"
                                data={clientData}
                                style={mapStyle}
                            />

                            {/* Client Avatars */}
                            <div className="absolute top-[25%] left-[10%] z-10">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Client" className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400 animate-pulse" />
                            </div>
                            <div className="absolute top-[25%] left-[40%] z-10">
                                <img src="https://images.unsplash.com/photo-1500428596937-31f16f2210fe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Client" className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400 animate-pulse delay-75" />
                            </div>
                            <div className="absolute top-[60%] left-[30%] z-10">
                                <img src="https://images.unsplash.com/photo-1549473448-b0acc73629dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Client" className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400 animate-pulse delay-100" />
                            </div>
                            <div className="absolute top-[45%] left-[75%] z-10">
                                <img src="https://images.unsplash.com/photo-1511130558090-00af810c21b1?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Client" className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400 animate-pulse delay-150" />
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl sm:text-5xl font-bold">
                                We Work For Client<br />Around The World
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Our global footprint is a testament to our unwavering dedication to providing exceptional services and innovative solutions to businesses, irrespective of geographical boundaries.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="mt-16 grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-5xl font-bold">600</div>
                                <div className="text-gray-400 mt-2">International client</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold">40</div>
                                <div className="text-gray-400 mt-2">Office around the world</div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="btn btn-accent">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;