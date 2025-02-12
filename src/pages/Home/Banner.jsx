import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className="inter-tight hero bg-neutral text-white min-h-screen rounded-b-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Build Your Digital Future</h1>
                        <p className="py-6 max-w-2xl text-gray-400">
                            At ALVA, we create reliable web and software solutions tailored to your needs. From frontend to full-stack, we bring your ideas to life.
                        </p>
                        <div className="flex gap-5">
                            <button className="btn btn-accent">Get Started</button>
                            <button className="btn btn-accent btn-outline">
                                <FaPlayCircle /> Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;