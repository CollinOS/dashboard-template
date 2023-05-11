import React from 'react';
// import { NavLink } from "react-router-dom";
// import { LoginButton } from "./login-button";
// import { LogoutButton } from "./logout-button";

const Header = () => {

  return (
    <div className='pt-4 pl-4 pr-4'>
      {/* Want to make header sticky in the future */}
      <div className="flex flex-col justify-center px-4 bg-zinc-900 p-2 rounded-xl">
        <nav className="flex items-center justify-between w-full mx-auto pt-4 pb-4">
          <div>
            <p>LOGO/ TITLE</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="text-white pr-4">
              <p>Sign In</p>
            </div>
            <div>

            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header