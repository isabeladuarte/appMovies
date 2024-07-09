import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }) {
    const [ favorite, setFavorite ] = useState([])

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            { children }
        </FavoritesContext.Provider>        
    );
}

// Hook personalizado
export function useFavoriteContent() {
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFavorite) {
        // verificar se o tem item favorito repetido
        const repeatFavorite = favorite.some((item) => item.id === newFavorite.id)
        
        // nova lista recebe lista anterior
        let newList = [...favorite]

        // verificar se nao tem repetido e adicionar o item na lista de favoritos
        if(!repeatFavorite) {
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        // se for repetido ele vai ser tirado da lista
        newList = favorite.filter((fav) => fav.id !== newFavorite.id)
        return setFavorite(newList)
    }

    return {
        favorite,
        addFavorite
    }
}
