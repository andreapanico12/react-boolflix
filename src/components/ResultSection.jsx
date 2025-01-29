import { useContext } from "react"
import { GlobalStateContext } from "../context/GlobalContext"
import ResultCard from "./ResultCard";
function ResultSection() {

  const {movies, tvShows, isLoading, error} = useContext(GlobalStateContext);

  if(isLoading) return <p>CARICAMENTO...</p>
  if(error) return <p>{error}</p>


  const renderCards = (items, type) => (
    <>
      <h2>{type}</h2>
      <div className="card-container">
        {items.map((item) => (
          <ResultCard
            key={item.id}
            title={item.title || item.name}
            originalTitle={item.original_title || item.original_name}
            language={item.original_language}
            vote={item.vote_average}
            posterPath={item.poster_path}
          />
        ))}
      </div>
    </>
  )


  return (
    <div className="results-container">
      {renderCards(movies, "FILM")}
      {renderCards(tvShows, "SERIE TV")}
              
    </div>
  )
}

export default ResultSection