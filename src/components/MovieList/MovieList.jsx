import { Link } from 'react-router-dom'
import css from './MovieList.module.css'
import { useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
    const location = useLocation();

    return (
        <div className={css.container}>
            <ul className={css.moviesList}>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id} className={css.movieItem} >
                            <div>
                                <img
                                    className={css.pic}
                                    src={movie.backdrop_path
                                        ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                                        :'/images/no-img-available-placeholder.jpg'}
                                    alt={`The poster of ${movie.title} movie.`}
                                />
                                <ul className={css.infoList}>
                                    <li className={css.infoListItem}><h3 className={css.movieTitle}>{movie.title}</h3></li>
                                    <li className={css.infoListItem}><strong>Rating:</strong> ⭐ {Math.round(movie.vote_average * 100) / 100} ({movie.vote_count} votes)</li>
                                    <li className={css.infoListItem}><strong>Release date:</strong> {movie.release_date}</li>
                                    <li className={css.infoListItem}><Link className={css.detLink} to={`/movies/${movie.id}`} state={location} >See The Details</Link></li>
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}