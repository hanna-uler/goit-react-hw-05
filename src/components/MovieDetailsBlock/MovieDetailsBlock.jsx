import css from './MovieDetailsBlock.module.css'

export default function MovieDetailsBlock({movie}) {
    console.log(movie);
    return (
        <div className={css.container}>
        <div >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
      
          <div >
            <h1 >{movie.title}</h1>
            <p >{movie.tagline}</p>
      
            <p >{movie.overview}</p>
      
            <ul >
              <li><strong>Release Date:</strong> {movie.release_date}</li>
                        {movie.genres && (
                            <li><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</li>)}
              <li><strong>Runtime:</strong> {movie.runtime} min</li>
              <li><strong>Rating:</strong> ⭐ {movie.vote_average} ({movie.vote_count} votes)</li>
              {movie.original_language && (<li><strong>Original Language:</strong> {movie.original_language.toUpperCase()}</li>)}
              <li><strong>Country:</strong> {movie.origin_country}</li>
              {movie.homepage && (
                <li>
                  <strong>Official Site:</strong>
                  <a
                    href={movie.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >{movie.homepage}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      )
}