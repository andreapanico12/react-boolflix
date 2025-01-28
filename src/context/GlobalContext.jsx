import { createContext, useState } from "react";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({children}) => {
  
  const [query, setQuery] = useState("");   // per gestire la query di ricerca
  const [movies, setMovies] = useState([]); // per gestire la lista dei film trovati
  const [tvShows, setTvShows] =useState([]); //per gestire la lista delle serie tv trovate
  const [isLoading, setIsLoading] = useState(false); //per gestire lo stato di caricamento
  const [isSearching, setIsSearching] = useState(false); // per gestire lo stato di ricerca
  const [selectedGenre, setSelectedGenre]= useState(""); // per gestire il genere selezionato per il filtro
  const [error, setError] = useState(null); // per gestire lo stato di errore

  const value = {
    query, setQuery,
    movies, setMovies,
    tvShows, setTvShows,
    isLoading, setIsLoading,
    isSearching, setIsSearching,
    selectedGenre, setSelectedGenre,
    error, setError
  }

  return (
    <GlobalStateProvider value={value}>
      {children}
    </GlobalStateProvider>
  )
}

export {GlobalStateContext, GlobalStateProvider}