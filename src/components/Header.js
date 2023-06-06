import React from 'react';
import logo from '../images/icons8-dryclean-with-any-solvent-except-trichloroethylene-48.png';

function Header() {
  return (
    <div className="container flex justify-between py-2 px-2 mx-auto bg-skin-navbar rounded-xl">
      {/* logo */}
      <div className="flex">
        <img src={logo} alt="logo" className="w-10" />
        <h1 className="text-white font-extrabold tracking-wider text-3xl ml-1 font-logo">
          pixelate
        </h1>
      </div>
    </div>
  );
}

export default Header;
