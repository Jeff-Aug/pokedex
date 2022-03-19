//a ideia aqui e poder usar ele em qualquer lugar
import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {

    const { favoritePokemons } = useContext(FavoriteContext )

    const logoImag = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <img
                alt="pokeapi-logo"
                src={logoImag}
                className="navbar-img"
            />
            {console.log(favoritePokemons.length)}
            <div> { favoritePokemons.length} ❤</div>
        </nav>

    )
}



export default Navbar
















