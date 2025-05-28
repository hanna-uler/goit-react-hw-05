import { Link } from 'react-router-dom'
import css from './MovieList.module.css'

export default function MovieList({ movies }) {
    return (
        <div className={css.container}>
            <ul className={css.moviesList}>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id} className={css.movieItem} >
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={`The poster of {movie.title} movie.`} />
                                <h3 className={css.movieTitle}>{movie.title}</h3>
                                <p>Release date: {movie.release_date}</p>
                                <Link className={css.detLink} to={`/movies/${movie.id}`} >Details</Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
            {/* <Load more Btn */}
        </div>
    )
}