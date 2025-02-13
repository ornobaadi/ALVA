import { FaPlayCircle } from 'react-icons/fa';
import banner from "../../../public/banner.json"
import Lottie from 'lottie-react';

const Banner = () => {
    return (
        <section className="w-full bg-neutral text-white rounded-b-2xl">
            <div className="inter-tight max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col items-center space-y-12">
                    {/* Text Content */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                            Build Your Digital Future
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                            At ALVA, we create reliable web and software solutions tailored to your needs.
                            From frontend to full-stack, we bring your ideas to life.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <button className="btn btn-accent px-6">
                                Get Started
                            </button>
                            <button className="btn btn-accent btn-outline px-4 flex items-center gap-2">
                                <FaPlayCircle />
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Image Container */}
                    <div className="">
                        <div className="relative rounded-lg overflow-hidden shadow-xl">
                            <Lottie className='w-[600px]' animationData={banner} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;