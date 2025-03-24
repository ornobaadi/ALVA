import TeamMembers from "./TeamMembers";

const Team = () => {
    return (
        <section className="w-full bg-neutral text-white inter-tight">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col items-center space-y-12">
                    {/* Text Content */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="
                            text-4xl sm:text-5xl lg:text-6xl 
                            font-bold tracking-tight
                            bg-gradient-to-r from-[#5C6BC0] to-[#FF6B6B] 
                            text-transparent bg-clip-text
                        ">
                            Meet Our Exceptional Team
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-gray-400 mx-auto">
                            A collective of innovative minds, driven by a passion for solving complex digital challenges 
                            and pushing the boundaries of web technology.
                        </p>
                    </div>
                    <TeamMembers />
                </div>
            </div>
        </section>
    );
};

export default Team;