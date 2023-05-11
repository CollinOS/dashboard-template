import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center mt-4 ml-4 p-8 bg-zinc-900 w-full max-w-[25%] rounded-xl h-full">
      <nav className="flex flex-col items-start w-full">
        <ul className="w-full text-sm">
          <li className="border-b border-zinc-600 py-3">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                isActive 
                ? "font-semibold hover:underline"
                : "font-light hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="border-b border-zinc-600 py-3">
            <NavLink 
              to="/route1" 
              className={({ isActive }) =>
                isActive 
                ? "font-semibold hover:underline"
                : "font-light hover:underline"
              }
            >
              Route 1
            </NavLink>
          </li>
          <li className="border-b border-zinc-600 py-3">
            <NavLink 
              to="/route2" 
              className={({ isActive }) =>
                isActive 
                ? "font-semibold hover:underline"
                : "font-light hover:underline"
              }
            >
              Route 2
            </NavLink>
          </li>
          <li className="border-b border-zinc-600 py-3">
            <NavLink 
              to="/route3" 
              className={({ isActive }) =>
                isActive 
                ? "font-semibold hover:underline"
                : "font-light hover:underline"
              }
            >
              Route 3
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar