import React from "react";
import { toast } from "react-toastify";
import Pagination from "./Paginacao";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props

    const onRightClickHandler =()=>{
        // toast.success("Avanca maluco")
        if(page > 0){
            setPage(page-1)
        }

    }
    const onLeftClickHandler=()=>{
        if(page+1 !==totalPages ){
            setPage(page+1)
            // toast.warn("Volta maluco")
        }
    }
    return (
        <div>
            <div className="pokedex-header" >
                <h4> Pokedex</h4>
                

                <Pagination 
                    page={page+1}
                    totalPages = {totalPages}
                    onLeftClick = {onRightClickHandler}
                    onRightClick = {onLeftClickHandler}
                />


            </div>

            {loading ? (
                <div>
                    <h3> Ta carregando fiote</h3>
                </div>
            ) : (
                <div className="pokedex-grid" >
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon pokemon={pokemon} key={index} />)
                    })}

                </div>

            )
            }
        </div>
    )
}

export default Pokedex




