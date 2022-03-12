import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const Searchbar = () => {
    let [search, setSearch] = useState()

    const onChangeHandler = (e) => {
        //toast.success(e.target.value)
        setSearch(

            e.target.value
        )
    }

    const onButtonClickHandler = (e) => {
        toast.dark(search)

    }
    return (
        <div className="searchar-container" >
            <div className="searchbar" >
                <input placeholder="Buscar pokemon" onChange={onChangeHandler} ></input>
                {/* <button onClick={onChangeHandler} ></button> */}
                
            </div>
            <div className="searchbar-btn"  >
                <button onClick={onButtonClickHandler}> Buscar</button>
            </div>
        </div>
    )

}

export default Searchbar











