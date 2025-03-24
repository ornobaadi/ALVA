import { Github, Instagram, Mail } from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="inter-tight footer footer-horizontal footer-center text-primary-content p-10">
            <aside>
                <img className="w-16" src="/Alva logo.png" alt="" />
                <h2 className="font-bold text-base">Nextgen ALVA</h2>
                <p className="font-bold">
                    Turning Vision into Reality
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link className="hover:text-red-600" to="https://www.youtube.com/@NextGenAlva">
                        <FaYoutube className="text-2xl" />
                    </Link>
                    <Link className="hover:text-slate-500" to="https://github.com/nextgenalva">
                        <Github />
                    </Link>
                    <Link className="hover:text-green-400" to="https://wa.me/+8801829812289?text=Hello%20there!%20I%20would%20like%20to%20discuss%20about%20a%20Project.">
                        <FaWhatsapp className="text-2xl" />
                    </Link>
                    <Link className="hover:text-blue-500" to="https://www.facebook.com/people/Alva-Gen/61570221325782/">
                        <FaFacebookF className="text-xl" />
                    </Link>
                    <Link className="hover:text-gray-600" to="https://x.com/NextGenAlva">
                        <FaXTwitter className="text-2xl" />
                    </Link>
                    <Link className="hover:text-pink-500" to="https://www.instagram.com/nextgenalva/">
                        <Instagram />
                    </Link>
                    <Link className="hover:text-blue-400" to="mailto:nextgen.alva@gmail.com">
                        <Mail />
                    </Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;