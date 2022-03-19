import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export const searchPokemon = async (pokemon)=>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)

        return await response.json()

    }catch ( error){
        toast.error(`${error}`)

    }
}
export const getPokemons = async ( limite=50, offSet=0 )=>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${offSet}`
        //                                       pokemon?limit=100&offset=200
        const response = await fetch(url)

        return await response.json()

    }catch ( error){
        toast.error(`${error}`)

    }
}
export const getPokemonData = async ( url )=>{
    try{
        const response = await fetch(url)

        return await response.json()

    }catch ( error){
        toast.error(`${error}`)

    }
}