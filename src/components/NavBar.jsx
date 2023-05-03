import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

let activeClassName = "nav-active"

function navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="active backdrop-blur-xl bg-black/30 font-Sono shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl sm:px-6 md:px-6 px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                 
                <NavLink className={({ isActive }) => isActive ? activeClassName : 
                 "hover:bg-white/50 text-white block px-3 py-2 rounded-md text-lg font-medium"} 
                 to="/">Home</NavLink>
                 <NavLink className={({ isActive }) => isActive ? activeClassName : 
                 "hover:bg-white/50 text-white block px-3 py-2 rounded-md text-lg font-medium"}
                 to="/dashboard">Dashboard</NavLink>
                 <NavLink className={({ isActive }) => isActive ? activeClassName : 
                 "hover:bg-white/50 text-white block px-3 py-2 rounded-md text-lg font-medium"} 
                 to="/project">Projects</NavLink>
                 <NavLink className={({ isActive }) => isActive ? activeClassName : 
                 "hover:bg-white/50 text-white block px-3 py-2 rounded-md text-lg font-medium"} 
                 to="/Calendar">Calendar</NavLink>
                 <NavLink className={({ isActive }) => isActive ? activeClassName : 
                 "hover:bg-white/50 text-white block px-3 py-2 rounded-md text-lg font-medium"} 
                 to="/Reports">Reports</NavLink>
                  
                  </div>
              </div>
              
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               
              <NavLink className={({ isActive }) => isActive ? activeClassName : 
                 "hover:bg-white/50 text-white block px-3 py-2 rounded-md text-lg font-medium"} 
                 to="/">Home</NavLink>
                 <NavLink className={({ isActive }) => isActive ? activeClassName : 
                 "hover:bg-white/50 text-white block px-3 py-2 rounded-md text-lg font-medium"}
                 to="/dashboard">Dashboard</NavLink>
                 <NavLink className={({ isActive }) => isActive ? activeClassName : 
                 "hover:bg-white/50 text-white block px-3 py-2 rounded-md text-lg font-medium"} 
                 to="/project">Projects</NavLink>
                 <NavLink className={({ isActive }) => isActive ? activeClassName : 
                 "hover:bg-white/50 text-white block px-3 py-2 rounded-md text-lg font-medium"} 
                 to="/Calendar">Calendar</NavLink>
                 <NavLink className={({ isActive }) => isActive ? activeClassName : 
                 "hover:bg-white/50 text-white block px-3 py-2 rounded-md text-lg font-medium"} 
                 to="/Reports">Reports</NavLink>

              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default navbar;