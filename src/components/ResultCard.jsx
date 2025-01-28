

function ResultCard({title, originalTitle,language,vote,posterPath}) {

  const getFlag = (languageIn) =>{
    const countryIn = languageIn === "en" ? "gb": languageIn;
    return `https://flagcdn.com/w40/${countryIn}.png`
  }

  const getImg = (path) => {
    return path ? `https://image.tmdb.org/t/p/w342${path}` : `https://placehold.co/600x400?text=Image+not+found`
  }



  return (
    <div className="card">
      <img 
      src={getImg(posterPath)} 
      alt={title}
      className="poster"
      />
      <h3>{title}</h3>
      <p><strong>Titolo Originale:</strong>{originalTitle}</p>
      <p>
        <strong>Lingua:</strong>{language}
        <img 
        src={getFlag(language)} 
        alt={language}
        onError={(e) => (e.target.style.display= "none")}
        style={{width: "40px" , marginLeft: "5px"}} 
        />
      </p>
      <p><strong>Voto:</strong>{vote}</p>
    </div>
  )
}

export default ResultCard