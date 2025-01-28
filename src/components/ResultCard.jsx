

function ResultCard({title, originalTitle,language,vote}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p><strong>Titolo Originale:</strong>{originalTitle}</p>
      <p><strong>Lingua:</strong>{language}</p>
      <p><strong>Voto:</strong>{vote}</p>
    </div>
  )
}

export default ResultCard