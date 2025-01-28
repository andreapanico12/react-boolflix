import { useContext } from "react"
import { GlobalStateContext } from "../context/GlobalContext"

function SearchBar() {

  const {query, setQuery, searchMedia} = useContext(GlobalStateContext)
  return (
    <div>
      <input
       type="text"
       value={query}
       onChange={(e) => setQuery(e.target.value)}
       placeholder="Cerca un film o una serie TV..."

       />
       <button onClick={searchMedia}>Cerca</button>
    </div>
  )
}

export default SearchBar