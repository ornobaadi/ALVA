import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        
    </>
    return (
        <div>
            <div className="px-52 navbar bg-neutral text-neutral-content shadow-sm inter-tight">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img className="w-6" src="/Alva logo.png" alt="" />LVA</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 text-base">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-accent">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;