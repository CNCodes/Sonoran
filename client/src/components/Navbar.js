import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between bg-slate-50 py-1">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-md font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-transparent bg-clip-text bg-gradient-to-b from-indigo-800 via-purple-600 via-purple-500 to-orange-500"
              href="#pablo"
            >
              Sonoran Sunset Tile
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-b from-indigo-800 via-purple-600 via-purple-500 to-orange-500 hover:opacity-75"
                  href="/"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-b from-indigo-800 via-purple-600 via-purple-500 to-orange-500 hover:opacity-75"
                  href="/gallery"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Our Work</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-b from-indigo-800 via-purple-600 via-purple-500 to-orange-500 hover:opacity-75"
                  href="./#contact"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Get an Estimate</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}