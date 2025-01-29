import { createContext, useState,useEffect } from "react";
import axios from "axios";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({children}) => {
  
  const [query, setQuery] = useState("");   // per gestire la query di ricerca
  const [movies, setMovies] = useState([]); // per gestire la lista dei film trovati
  const [tvShows, setTvShows] =useState([]); //per gestire la lista delle serie tv trovate
  const [isLoading, setIsLoading] = useState(false); //per gestire lo stato di caricamento
  const [isSearching, setIsSearching] = useState(false); // per gestire lo stato di ricerca
  const [selectedGenre, setSelectedGenre]= useState(""); // per gestire il genere selezionato per il filtro
  const [error, setError] = useState(null); // per gestire lo stato di errore



  const keyAPI = "2a338965e9b18a913578eec1826e9cbc"; //key per la ricerca
  const baseURL = "https://api.themoviedb.org/3/search"; //url base per la ricerca da suddividere poi in movies e tvshows


  // funzione che ricerca dinamicamente in base al parametro passato o film o serie tv
  const fetchMedia = (endpoint) =>
    axios.get(`${baseURL}/${endpoint}`, {
      params: {api_key: keyAPI, query, language: "it-IT"},
    })


   // funzione che gestisce lo stato di caricamento e l'errore in funzione delle 2 chiamate che vengono eseguite tramite la funzione fetchMedia al termine delle quali lo stato di caricamento ritorna (false) 
  const searchMedia = () => {
    if(!query.trim()) return;

    setIsLoading(true);
    setIsSearching(true);
    setError(null);

    fetchMedia("movie")
      .then((movieRes) => {
        console.log(movieRes.data.results)
        setMovies(movieRes.data.results)
      })

      .catch(() =>{
        setError((prev) => (prev ? `${prev}-Film`:"Errore nella ricerca dei film"))
      })

    fetchMedia("tv")
      .then((tvRes) => {
        setTvShows(tvRes.data.results)
        console.log(tvRes.data.results)
      })

      .catch(() =>{
        setError((prev) => (prev ? `${prev}-Film`:"Errore nella ricerca dei film"))
      })
      
      .finally(()=>{
        setIsLoading(false);
      })
  }    

  

  const value = {
    query, setQuery,
    movies, setMovies,
    tvShows, setTvShows,
    isLoading, setIsLoading,
    isSearching, setIsSearching,
    selectedGenre, setSelectedGenre,
    error, setError,
    searchMedia
  }




  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export {GlobalStateContext, GlobalStateProvider}