import { Github, Twitch, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="inter-tight footer footer-horizontal footer-center bg-neutral text-primary-content p-10">
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
                    <Link className="hover:text-slate-500" to="https://github.com/nextgenalva">
                        <Github />
                    </Link>
                    <Link className="hover:text-pink-700" to="https://www.youtube.com/@NextGenAlva">
                        <Youtube />
                    </Link>
                    <Link className="hover:text-purple-700" to="https://www.twitch.tv/nextgenalva">
                        <Twitch />
                    </Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;