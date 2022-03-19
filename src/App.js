import "./App.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getPokemonData, getPokemons, searchPokemon } from "./Api/api";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { useEffect, useState } from "react";
import { FavoriteProvider } from "./contexts/favoritesContext";

const favoritesKey = "f"


function App() {
  const [page, setPage] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([])


  const itensPerPages = 24;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPages, itensPerPages * page); //resposavel por busca a lista

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);

      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPages));
    } catch (error) {
      toast.success("Sera que foi");
    }
  };

  useEffect(() => {
    // toast.success("foi");
    fetchPokemons();
  }, [page]);

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey) )|| []
    setFavorites(pokemons)
  }
  useEffect(() => {
    // toast.success("foi");
    loadFavoritePokemons()
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites]
    const favoritesIndex = favorites.indexOf(name)

    console.log(name)
    if (favoritesIndex >= 0) {
      updateFavorites.splice(favoritesIndex, 1)
    } else {
      updateFavorites.push(name)
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(favorites)  )
    setFavorites(updateFavorites)

  }

  return (
    <div>
      <FavoriteProvider
        value={{
          favoritePokemons: favorites,
          updateFavoritePokemons: updateFavoritePokemons
        }}
      />
      <Navbar />
      <Searchbar />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        setPage={setPage}
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
