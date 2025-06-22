import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = window.location.pathname;
    const isAuthRoute = ["/login", "/signup", "/forget-password"].includes(location);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <>
            <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center cursor-pointer transition-transform hover:scale-105">
                            <Link to="/">
                                <h2 className="font-bold text-2xl">
                                    Royal <span className="text-teal-600">Fitness</span>
                                </h2>
                            </Link>
                        </div>

                        <nav className="hidden md:block" aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link
                                        className="text-gray-700 transition hover:text-teal-500"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-gray-700 transition hover:text-teal-500"
                                        to="/courses"
                                    >
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-gray-700 transition hover:text-teal-500"
                                        to="/store"
                                    >
                                        Store
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-gray-700 transition hover:text-teal-500"
                                        to="/services"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-gray-700 transition hover:text-teal-500"
                                        to="/aboutus"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-gray-700 transition hover:text-teal-500"
                                        to="/trainers"
                                    >
                                        Trainers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-gray-700 transition hover:text-teal-500"
                                        to="/dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            {!isAuthRoute && (
                                <div className="hidden sm:flex sm:gap-4">
                                    <Link
                                        className="rounded-3xl bg-teal-600 hover:bg-teal-800 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                                        to="/chat"
                                    >
                                        Chat With AI
                                    </Link>
                                </div>
                            )}

                            <button
                                className="cursor-pointer block md:hidden rounded-lg bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75"
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden mobile-menu-container ${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-16 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out`}
                    >
                        <nav className="px-4 py-3">
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        to="/"
                                        className="block text-gray-700 hover:text-teal-500 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/courses"
                                        className="block text-gray-700 hover:text-teal-500 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/store"
                                        className="block text-gray-700 hover:text-teal-500 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Store
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="block text-gray-700 hover:text-teal-500 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/aboutus"
                                        className="block text-gray-700 hover:text-teal-500 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/trainers"
                                        className="block text-gray-700 hover:text-teal-500 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Trainers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/dashboard"
                                        className="block text-gray-700 hover:text-teal-500 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>
                            
                            {/* Mobile Button */}
                            {!isAuthRoute && (
                                <div className="mt-4 pb-2">
                                    <Link
                                        to="/chat"
                                        className="block w-full text-center rounded-3xl bg-teal-600 hover:bg-teal-800 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Chat With AI
                                    </Link>
                                </div>
                            )}
                        </nav>
                    </div>
                </div>
            </header>
            {/* Spacer for fixed header */}
            <div className="h-16"></div>
        </>
    );
};
