import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <header className=" shadow-md">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12 cursor-pointer">
                            <Link to="/">
                                <h2 className="font-bold text-2xl" href="/">
                                    Royal <span className="text-teal-600">Fitness</span>{" "}
                                </h2>
                            </Link>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex text-black items-center gap-6 text-sm">
                                    <Link
                                        className="transition hover:text-teal-500"
                                        to="/courses"
                                    >
                                        Courses
                                    </Link>

                                    <Link
                                        className="transition hover:text-teal-500"
                                        href="#"
                                        to="/store"
                                    >
                                        Store
                                    </Link>

                                    <li>
                                        <a className="transition hover:text-teal-500" href="#">
                                            {" "}
                                            Services{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a className="transition hover:text-teal-500" href="#">
                                            {" "}
                                            About Us{" "}
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link
                                    className="rounded-3xl bg-teal-600 hover:bg-teal-800 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                                    to="/signup"
                                >
                                    Chat With Ai
                                </Link>
                            </div>

                            <div className="block md:hidden"></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
