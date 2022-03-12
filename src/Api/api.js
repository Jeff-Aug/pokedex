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