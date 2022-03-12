//a ideia aqui e poder usar ele em qualquer lugar
import React from "react";

const Navbar = () => {

    const logoImag="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <img 
                alt="pokeapi-logo"
                src={logoImag}
                className="navbar-img"
            />
        </nav>

    )
}



export default Navbar
















