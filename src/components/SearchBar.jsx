import { useContext } from "react"
import { GlobalStateContext } from "../context/GlobalContext"

function SearchBar() {

  const keyUphandler = (e) => {
    if(e.key === `Enter`){
      searchMedia()
    }
  }

  const {query, setQuery, searchMedia} = useContext(GlobalStateContext)
  return (
    <>
      <input
       className="searchbar"
       type="text"
       value={query}
       onChange={(e) => setQuery(e.target.value)}
       placeholder="Cerca un film o una serie TV..."
       onKeyUp={keyUphandler}

       />
       <button className="searchbar-btn" onClick={searchMedia}>Cerca</button>
    </>
  )
}

export default SearchBar