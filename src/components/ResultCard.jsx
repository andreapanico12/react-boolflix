

function ResultCard({title, originalTitle,language,vote}) {

  const getFlag = (languageIn) =>{
    const countryIn = languageIn === "en" ? "gb": languageIn;
    return `https://flagcdn.com/w40/${countryIn}.png`
  }


  return (
    <div className="card">
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