import css from './MovieDetailsBlock.module.css'

export default function MovieDetailsBlock({movie}) {
  return (
    <div className={css.container}>
      <div className={css.infoBox}>
        <img
          className={css.pic}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={css.textInfo}>
          <h1 className={css.title}>{movie.title}</h1>
          <p className={css.tagline}>{movie.tagline}</p>
          <p className={css.overview}>{movie.overview}</p>
          <ul className={css.detailsList}>
            <li className={css.detailsItem}>
              <strong>Release Date: </strong>
              {movie.release_date}
            </li>
            {movie.genres && (
              <li className={css.detailsItem}>
                <strong>Genres: </strong>
                {movie.genres.map(g => g.name).join(', ')}
              </li>
            )}
            <li className={css.detailsItem}>
              <strong>Runtime: </strong>
              {movie.runtime} min
            </li>
            <li className={css.detailsItem}>
              <strong>Rating: </strong>
              ⭐ {Math.round(movie.vote_average * 100) / 100} ({movie.vote_count} votes)
            </li>
            {movie.original_language && (
              <li className={css.detailsItem}>
                <strong>Original Language: </strong>
                {movie.original_language.toUpperCase()}
              </li>
            )}
            <li className={css.detailsItem}>
              <strong>Country: </strong>
              {movie.origin_country}
            </li>
            {movie.homepage && (
              <li className={css.detailsItem}>
                <strong>Official Site: </strong>
                <a className={css.movieLink} href={movie.homepage} target="_blank" rel="noopener noreferrer">
                  {movie.homepage}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}