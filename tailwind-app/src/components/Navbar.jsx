
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-orange-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          MiLogo
        </div>
        <div className="space-x-4">

          <a href="#" className="text-orange-100 hover:text-white transition-colors">
            Inicio
          </a>
          <a href="#" className="text-orange-100 hover:text-white transition-colors">

            Acerca de
          </a>
          <a href="#" className="text-orange-100 hover:text-white transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;