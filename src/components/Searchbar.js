import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { searchPokemon } from "../Api/api";


const Searchbar = () => {
    let [pokemon, setPokemon] = useState()
    let [search, setSearch] = useState()


    const onChangeHandler = (e) => {
        //toast.success(e.target.value)
        setSearch(e.target.value)
    }

    // const onButtonClickHandler = () => {
    //     onSearchHandler(search)

    // }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        toast.success(`Feito`)
        setPokemon(result)
    }





    return (
        <div className="searchar-container" >
            <div className="searchbar" >
                <input placeholder="Buscar pokemon" onChange={onChangeHandler} ></input>
                {/* <button onClick={onChangeHandler} ></button> */}

            </div>
            <div className="searchbar-btn"  >
                {/* <button onClick={onButtonClickHandler}> Buscar</button> */}
                <button onClick={()=> onSearchHandler(search)}> Buscar</button>
            </div>
            {pokemon?(
                <div>
                    <span>{pokemon.name}</span>
                    <span>{pokemon.weigth}</span>
                    <img src={pokemon.sprites.front_default}/>
                </div>
            ):null}


        </div>
    )

}

export default Searchbar











