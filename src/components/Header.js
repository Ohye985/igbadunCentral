import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom"


export default function Header({ fixed }) {

    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className=" bg-white sticky flex flex-wrap items-center justify-between px-4 md:px-28 py-3 mb-4 w-full top-0 left-0 right-0 z-50">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap capitalize text-gray-900"
                            href="/"
                        >
                            <div className="flex" style={{ alignItems: 'center' }}>
                                <text style={{ fontSize: 'x-large' }}>Igbadun <br /> <span className="ml-1">Central</span></text>
                            </div>
                        </a>
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none "
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaBars />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center " +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mt-4">
                            <li className="nav-item lg:px-3 py-2 flex items-center text-xs md:text:sm capitalize font-bold leading-snug text-gray-400 opacity-50 hover:opacity-75 hover:text-blue">

                                <Link to="/" className="ml-2">Home</Link>

                            </li>

                            <li className="nav-item lg:px-3 py-2 flex items-center text-xs md:text:sm capitalize font-bold leading-snug text-gray-400 opacity-50 hover:opacity-75 hover:text-blue">

                                <Link to="/about" className="ml-2">About us</Link>

                            </li>
                            <li className="nav-item lg:px-3 py-2 flex items-center text-xs md:text:sm capitalize font-bold leading-snug text-gray-400 opacity-50 hover:opacity-75 hover:text-blue">

                                <Link to="/rates" className="ml-2">Rates</Link>

                            </li>
                            <li className="nav-item lg:px-3 py-2 flex items-center text-xs md:text:sm capitalize font-bold leading-snug text-gray-400 opacity-50 hover:opacity-75 hover:text-blue">

                                <Link to="/facilities" className="ml-2">Facilities</Link>

                            </li>
                            <li className="nav-item lg:px-3 py-2 flex items-center text-xs md:text:sm capitalize font-bold leading-snug text-gray-400 opacity-50 hover:opacity-75 hover:text-blue">

                                <Link to="/contact" className="ml-2">Contact us</Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

