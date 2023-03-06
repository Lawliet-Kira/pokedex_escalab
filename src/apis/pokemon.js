import axios from "axios";

export async function fetchPokemon(endpoint, id) {
    return axios.get(`https://pokeapi.co/api/v2/${endpoint}/${id}/`).then( res => res.data );
}