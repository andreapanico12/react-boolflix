import { useContext } from "react"
import { GlobalStateContext } from "../context/GlobalContext"
import ResultCard from "./ResultCard";
function ResultSection() {

  const {movies, tvShows, isLoading, error} = useContext(GlobalStateContext);

  if(isLoading) return <p>CARICAMENTO...</p>
  if(error) return <p>{error}</p>


  return (
    <div>
      <h2>FILM</h2>
      <div className="card-container">
        {movies.map((movie) => (
          <ResultCard
            key={movie.id}
            title={movie.title}
            originalTitle={movie.original_title}
            language={movie.original_language}
            vote={movie.vote_average}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
      <h2>Serie TV</h2>
      <div className="card-container">
        {tvShows.map((tvShow) => (
          <ResultCard
            key={tvShow.id}
            title={tvShow.name}
            originalTitle={tvShow.original_name}
            language={tvShow.original_language}
            vote={tvShow.vote_average}
            posterPath={tvShow.poster_path}
          />
        ))}
      </div>
    </div>
  )
}

export default ResultSection